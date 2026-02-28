export default function Achievements() {
  const achievements = [
    { number: "500+", label: "O'quvchilar" },
    { number: "15+", label: "Yillik tajriba" },
    { number: "50+", label: "Malakali o'qituvchilar" },
    { number: "98%", label: "Universitetga kirish" },
  ];
  return (
    <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle abstract background accent */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Bizning Yutuqlarimiz
          </h2>
          <p className="text-lg text-slate-400">
            Raqamlar orqali Heritage School
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold mb-3 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
