import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const achievements = [
    { number: "500+", label: "O'quvchilar" },
    { number: "15+", label: "Yillik tajriba" },
    { number: "50+", label: "Malakali o'qituvchilar" },
    { number: "98%", label: "Universitetga kirish" },
  ];
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full mb-8 border border-emerald-200/50 dark:border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                Buxoro viloyatidagi yetakchi xususiy maktab
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
              Kelajak uchun
              <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
                ilhom beramiz
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Heritage School - bu zamonaviy ta'lim va an'anaviy qadriyatlarni
              birlashtirgan muassasa. Biz har bir bolaning maxsus potentsialini
              ochishga yordam beramiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 w-full sm:w-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                <span>Bepul Ekskursiya</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl text-base font-semibold border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 w-full sm:w-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-sm">
                Biz bilan bog'laning
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {achievements.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 border border-slate-100 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="relative lg:ml-auto w-full max-w-lg mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-white/10">
              <img
                src="./HPS.png"
                alt="Heritage Private School students"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Minimal Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
