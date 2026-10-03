import { Slide } from '../components/Slide';

export function TeamSlide() {
  const team = [
    {
      name: "Matt Pursley",
      role: "CEO & Founder",
      bio: "Extensive experience with modern CICD, distributed scalable Tech, and AI/LLM integration.",
      image: "https://picsum.photos/seed/matt/200/200"
    },
    {
      name: "Hiring / Stand-in",
      role: "Founder & COO",
      bio: "Scaling SaaS startups and operational excellence. Focus on sustainable growth and ecosystem efficiency.",
      image: "https://picsum.photos/seed/elena/200/200"
    },
    {
      name: "Hiring / Stand-in",
      role: "Head of Product",
      bio: "Former Product Lead at Top Tech Co. Expert in consumer UX and product strategy.",
      image: "https://picsum.photos/seed/marcus/200/200"
    }
  ];

  return (
    <Slide
      title="The Team"
      subtitle="Builders, researchers, and operators from top tech companies."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/20 transition-all text-center group">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-indigo-500/50 transition-colors">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-indigo-400 text-sm font-mono mb-4">{member.role}</p>
            <p className="text-slate-400 text-base leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
