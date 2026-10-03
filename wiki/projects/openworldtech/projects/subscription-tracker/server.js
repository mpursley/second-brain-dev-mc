import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Database setup
const db = new Database('subscriptions.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cost REAL NOT NULL,
    currency TEXT DEFAULT 'USD',
    frequency TEXT DEFAULT 'monthly',
    renewal_date TEXT,
    category TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// API Endpoints
app.get('/api/subscriptions', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM subscriptions ORDER BY renewal_date ASC').all();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/subscriptions', (req, res) => {
  const { name, cost, currency, frequency, renewal_date, category, notes } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO subscriptions (name, cost, currency, frequency, renewal_date, category, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(name, cost, currency || 'USD', frequency || 'monthly', renewal_date, category, notes);
    res.json({ id: info.lastInsertRowid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/subscriptions/:id', (req, res) => {
  const { id } = req.params;
  const { name, cost, currency, frequency, renewal_date, category, notes } = req.body;
  try {
    db.prepare(`
      UPDATE subscriptions 
      SET name = ?, cost = ?, currency = ?, frequency = ?, renewal_date = ?, category = ?, notes = ?
      WHERE id = ?
    `).run(name, cost, currency, frequency, renewal_date, category, notes, id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/subscriptions/:id', (req, res) => {
  const { id } = req.params;
  try {
    db.prepare('DELETE FROM subscriptions WHERE id = ?').run(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
