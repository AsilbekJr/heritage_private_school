import { BookOpen, CheckCircle, GraduationCap, Trophy } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Boshlang'ich Ta'lim",
      grades: "1-4 sinflar",
      description:
        "Bolalarning asosiy bilimlarini shakllantirish va rivojlantirish",
      features: ["STEAM dastur", "Ingliz tili", "Robotika"],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "O'rta Maktab",
      grades: "5-9 sinflar",
      description: "Keng qamrovli bilim va ko'nikmalarni rivojlantirish",
      features: ["STEM yo'nalish", "Olimpiada tayyorlash", "IT kurslari"],
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Yuqori Maktab",
      grades: "10-11 sinflar",
      description: "Universitetga tayyorlov va kasbiy yo'naltirish",
      features: ["SAT tayyorlov", "IELTS kurslari", "Universitet maslahat"],
    },
  ];
  return (
    <section id="programs" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ta'lim Dasturlarimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Har bir yosh guruhiga moslashtirilgan zamonaviy va to'liq ta'lim
            dasturlari
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-emerald-100"
            >
              <div className="bg-linear-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-emerald-100 text-sm font-semibold">
                  {program.grades}
                </p>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition">
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
