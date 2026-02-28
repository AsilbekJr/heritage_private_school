import { Globe, Heart, Star, Users } from "lucide-react";

export default function Value() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "G'amxo'rlik",
      description: "Har bir bolaga individual yondashuv",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mukammallik",
      description: "Yuqori sifatli ta'lim standartlari",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Fikrlash",
      description: "Xalqaro standartlar asosida ta'lim",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hamkorlik",
      description: "Ota-onalar bilan yaqin aloqa",
    },
  ];
  return (
    <section className="py-20 lg:py-32 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Bizning Qadriyatlarimiz
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Bolalar kelajagi uchun eng muhim hisoblangan asosiy tamoyillarimiz
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
            >
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
