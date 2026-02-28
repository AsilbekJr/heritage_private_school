import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Biz Bilan Bog'laning
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Savollaringiz bormi? Biz yordam berishga doim tayyormiz!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 group">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-all duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Telefon</h3>
            <p className="text-slate-600 dark:text-slate-400">+998 71 123 45 67</p>
            <p className="text-slate-600 dark:text-slate-400">+998 90 123 45 67</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 group">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Email</h3>
            <p className="text-slate-600 dark:text-slate-400">info@heritage.uz</p>
            <p className="text-slate-600 dark:text-slate-400">admission@heritage.uz</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl text-center hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 group">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-all duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Manzil</h3>
            <p className="text-slate-600 dark:text-slate-400">Buxoro shahri,</p>
            <p className="text-slate-600 dark:text-slate-400">G'ijduvon tumani</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-emerald-600 dark:bg-emerald-700 rounded-3xl p-10 lg:p-14 text-center text-white shadow-xl relative overflow-hidden">
          {/* Subtle abstract background accent */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Bolangiz Kelajagini Bugun Boshlang!
            </h3>
            <p className="text-lg md:text-xl mb-10 text-emerald-50 max-w-2xl mx-auto">
              Bepul ekskursiya va konsultatsiya olish uchun hoziroq ro'yxatdan o'ting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-base font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 cursor-pointer">
                <span>Ro'yxatdan o'tish</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-emerald-700/50 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600">
                Biz bilan bog'lanish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
