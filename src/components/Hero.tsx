import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const achievements = [
    { number: "500+", label: "O'quvchilar" },
    { number: "15+", label: "Yillik tajriba" },
    { number: "50+", label: "Malakali o'qituvchilar" },
    { number: "98%", label: "Universitetga kirish" },
  ];
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Buxuro viloyatidagi yetakchi xususiy maktab
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kelajak uchun
              <span className="block bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ilhom beramiz
              </span>
            </h1>

            <p className="text-sm md:text-xl text-gray-600 mb-8 leading-relaxed">
              Heritage School - bu zamonaviy ta'lim va an'anaviy qadriyatlarni
              birlashtirgan xususiy maktab. Biz har bir bolaning potentsialini
              ochishga yordam beramiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-linear-to-r  from-emerald-500 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-md md:text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Bepul Ekskursiya</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-md md:text-lgfont-semibold border-2 border-emerald-200 hover:border-emerald-500 transition">
                Biz bilan bog'laning
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-md border border-emerald-100"
                >
                  <div className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-3xl h-96 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* <div className="text-white text-center p-8">
                <GraduationCap className="w-32 h-32 mx-auto mb-4 opacity-20" />
                <p className="text-2xl font-semibold opacity-80">
                  Maktab Rasmi
                </p>
              </div> */}
              <img
                src="./HPS.png"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
