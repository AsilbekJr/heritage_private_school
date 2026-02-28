import { BookOpen, CheckCircle, GraduationCap, Trophy } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Boshlang'ich Ta'lim",
      grades: "1-4 sinflar",
      description:
        "Bolalarning asosiy bilimlarini shakllantirish va rivojlantirish",
      features: ["STEAM dastur", "Ingliz tili", "Robotika"],
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "O'rta Maktab",
      grades: "5-9 sinflar",
      description: "Keng qamrovli bilim va ko'nikmalarni rivojlantirish",
      features: ["STEM yo'nalish", "Olimpiada tayyorlash", "IT kurslari"],
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: "Yuqori Maktab",
      grades: "10-11 sinflar",
      description: "Universitetga tayyorlov va kasbiy yo'naltirish",
      features: ["SAT tayyorlov", "IELTS kurslari", "Universitet maslahat"],
    },
  ];
  return (
    <section id="programs" className="py-20 lg:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Ta'lim Dasturlarimiz
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Har bir yosh guruhiga moslashtirilgan zamonaviy va to'liq ta'lim
            dasturlari
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col group"
            >
              <div className="p-8 lg:p-10 flex-1">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full tracking-wide">
                    {program.grades}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{program.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button className="w-full bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-emerald-500 dark:hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer border border-slate-200 dark:border-slate-600 hover:border-emerald-600 dark:hover:border-emerald-500">
                  Batafsil Ma'lumot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
