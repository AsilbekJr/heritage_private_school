import { CheckCircle } from "lucide-react";

export default function Facilities() {
  const facilities = [
    "Zamonaviy laboratoriyalar",
    "Sport zallari va maydonlar",
    "Kutubxona va media markaz",
    "Kompyuter sinflari",
    "San'at va musiqa studiyalari",
    "Xavfsiz transport xizmati",
  ];
  return (
    <section id="facilities" className="py-20 lg:py-32 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Zamonaviy Infratuzilma
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              O'quvchilarimiz uchun eng yaxshi sharoitlarni yaratdik. Har bir sinf
              va xona eng so'nggi texnologiyalar bilan ta'minlangan bo'lib, xavfsiz va rag'batlantiruvchi muhitni taqdim etadi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-white/10">
              <img
                src="./infratuzilma.png"
                alt="Maktab infratuzilmasi"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Minimal Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
