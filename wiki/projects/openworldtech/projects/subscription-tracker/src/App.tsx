import { useState, useEffect, useMemo } from 'react';
import { 
  Plus, 
  Trash2, 
  CreditCard, 
  Calendar, 
  Tag, 
  DollarSign, 
  PieChart as PieChartIcon, 
  TrendingUp,
  AlertCircle,
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { format, parseISO, isAfter, addMonths, addYears, compareAsc, compareDesc } from 'date-fns';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Subscription {
  id: number;
  name: string;
  cost: number;
  currency: string;
  frequency: 'monthly' | 'annually' | 'quarterly';
  renewal_date: string;
  category: string;
  notes?: string;
}

type SortKey = keyof Subscription | 'actions';
type SortDirection = 'asc' | 'desc';

const COLORS = ['#0ea5e9', '#6366f1', '#a855f7', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#22c55e'];

export default function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({
    key: 'renewal_date',
    direction: 'asc'
  });
  const [formData, setFormData] = useState({
    name: '',
    cost: '',
    currency: 'USD',
    frequency: 'monthly',
    renewal_date: format(new Date(), 'yyyy-MM-dd'),
    category: 'SaaS',
    notes: ''
  });

  const fetchSubscriptions = async () => {
    try {
      const res = await fetch('/api/subscriptions');
      const data = await res.json();
      setSubscriptions(data);
    } catch (err) {
      console.error('Failed to fetch:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cost: parseFloat(formData.cost)
        })
      });
      setIsAdding(false);
      setFormData({
        name: '',
        cost: '',
        currency: 'USD',
        frequency: 'monthly',
        renewal_date: format(new Date(), 'yyyy-MM-dd'),
        category: 'SaaS',
        notes: ''
      });
      fetchSubscriptions();
    } catch (err) {
      console.error('Failed to add:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this subscription?')) return;
    try {
      await fetch(`/api/subscriptions/${id}`, { method: 'DELETE' });
      fetchSubscriptions();
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const sortedSubscriptions = useMemo(() => {
    const sortableItems = [...subscriptions];
    if (sortConfig.key !== 'actions') {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof Subscription];
        const bValue = b[sortConfig.key as keyof Subscription];

        if (sortConfig.key === 'renewal_date') {
          return sortConfig.direction === 'asc' 
            ? compareAsc(parseISO(aValue as string), parseISO(bValue as string))
            : compareDesc(parseISO(aValue as string), parseISO(bValue as string));
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }

        return 0;
      });
    }
    return sortableItems;
  }, [subscriptions, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const stats = useMemo(() => {
    let monthlyBurn = 0;
    let annualBurn = 0;
    const categoryMap: Record<string, number> = {};

    subscriptions.forEach(sub => {
      let mCost = 0;
      if (sub.frequency === 'monthly') mCost = sub.cost;
      else if (sub.frequency === 'annually') mCost = sub.cost / 12;
      else if (sub.frequency === 'quarterly') mCost = sub.cost / 3;

      monthlyBurn += mCost;
      annualBurn += mCost * 12;

      categoryMap[sub.category] = (categoryMap[sub.category] || 0) + mCost;
    });

    const categoryData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

    return { monthlyBurn, annualBurn, categoryData };
  }, [subscriptions]);

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortConfig.key !== column) return null;
    return sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscription Tracker</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage and monitor OWT ecosystem costs.</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Add Subscription
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Monthly Burn" 
          value={`$${stats.monthlyBurn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={<TrendingUp className="text-sky-500" />}
          subtitle="Estimated monthly cost"
        />
        <StatCard 
          title="Annual Burn" 
          value={`$${stats.annualBurn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={<DollarSign className="text-emerald-500" />}
          subtitle="Estimated yearly cost"
        />
        <StatCard 
          title="Active Subscriptions" 
          value={subscriptions.length.toString()}
          icon={<CreditCard className="text-indigo-500" />}
          subtitle="Total items tracked"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PieChartIcon size={20} className="text-sky-500" />
            Cost by Category (Monthly)
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.categoryData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stats.categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `$${value.toFixed(2)}`}
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-emerald-500" />
            Category Breakdown
          </h2>
          <div className="space-y-4">
            {stats.categoryData.sort((a,b) => b.value - a.value).map((cat, i) => (
              <div key={cat.name} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                  <span className="text-sm font-medium">{cat.name}</span>
                </div>
                <span className="text-sm font-semibold">${cat.value.toFixed(2)}/mo</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isAdding && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Add New Subscription</h2>
            <button 
              onClick={() => setIsAdding(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
              <input
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                placeholder="e.g. Google Workspace"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Cost</label>
              <input
                required
                type="number"
                step="0.01"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                placeholder="0.00"
                value={formData.cost}
                onChange={e => setFormData({...formData, cost: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Frequency</label>
              <select
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                value={formData.frequency}
                onChange={e => setFormData({...formData, frequency: e.target.value as any})}
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Renewal Date</label>
              <input
                type="date"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                value={formData.renewal_date}
                onChange={e => setFormData({...formData, renewal_date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Category</label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                placeholder="SaaS, Infrastructure, etc."
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              />
            </div>
            <div className="lg:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">Notes</label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-md px-3 py-2 text-sm focus:ring-2 ring-sky-500 outline-none"
                placeholder="Optional notes"
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Save Subscription
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium">
              <tr>
                <th 
                  className="px-6 py-4 cursor-pointer hover:text-slate-700 transition-colors"
                  onClick={() => requestSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Subscription <SortIcon column="name" />
                  </div>
                </th>
                <th 
                  className="px-6 py-4 cursor-pointer hover:text-slate-700 transition-colors"
                  onClick={() => requestSort('cost')}
                >
                  <div className="flex items-center gap-1">
                    Cost <SortIcon column="cost" />
                  </div>
                </th>
                <th 
                  className="px-6 py-4 cursor-pointer hover:text-slate-700 transition-colors"
                  onClick={() => requestSort('frequency')}
                >
                  <div className="flex items-center gap-1">
                    Frequency <SortIcon column="frequency" />
                  </div>
                </th>
                <th 
                  className="px-6 py-4 cursor-pointer hover:text-slate-700 transition-colors"
                  onClick={() => requestSort('renewal_date')}
                >
                  <div className="flex items-center gap-1">
                    Renewal <SortIcon column="renewal_date" />
                  </div>
                </th>
                <th 
                  className="px-6 py-4 cursor-pointer hover:text-slate-700 transition-colors"
                  onClick={() => requestSort('category')}
                >
                  <div className="flex items-center gap-1">
                    Category <SortIcon column="category" />
                  </div>
                </th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-500">Loading subscriptions...</td></tr>
              ) : subscriptions.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-500">No subscriptions found. Add one to get started!</td></tr>
              ) : (
                sortedSubscriptions.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{sub.name}</div>
                      {sub.notes && <div className="text-xs text-slate-400">{sub.notes}</div>}
                    </td>
                    <td className="px-6 py-4 font-mono">${sub.cost.toFixed(2)}</td>
                    <td className="px-6 py-4 capitalize">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-xs font-medium",
                        sub.frequency === 'monthly' ? "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" :
                        sub.frequency === 'annually' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      )}>
                        {sub.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-400" />
                        {format(parseISO(sub.renewal_date), 'MMM d, yyyy')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <Tag size={14} className="text-slate-400" />
                        {sub.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDelete(sub.id)}
                        className="text-slate-400 hover:text-rose-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, subtitle }: { title: string, value: string, icon: React.ReactNode, subtitle: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
        <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <p className="text-xs text-slate-400">{subtitle}</p>
    </div>
  );
}
