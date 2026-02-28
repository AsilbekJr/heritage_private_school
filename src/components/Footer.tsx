import { Facebook, GraduationCap, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-4 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Heritage</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Private School</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kelajak uchun ta'lim beramiz. Zamonaviy ta'lim va an'anaviy qadriyatlar uyg'unligi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Tezkor Havolalar</h4>
            <div className="space-y-3 text-sm">
              <a href="#about" className="block text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 focus:outline-none focus:text-emerald-400">Biz haqimizda</a>
              <a href="#programs" className="block text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 focus:outline-none focus:text-emerald-400">Dasturlar</a>
              <a href="#facilities" className="block text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 focus:outline-none focus:text-emerald-400">Imkoniyatlar</a>
              <a href="#contact" className="block text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 focus:outline-none focus:text-emerald-400">Aloqa</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Aloqa</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center select-all"><span className="text-emerald-500 mr-2">📞</span> +998 99 739 71 57</p>
              <p className="flex items-center select-all"><span className="text-emerald-500 mr-2">✉️</span> info@heritage.uz</p>
              <p className="flex items-center"><span className="text-emerald-500 mr-2">📍</span> Buxoro, G'ijduvon</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Ijtimoiy Tarmoqlar</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-800 hover:border-emerald-500"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-800 hover:border-emerald-500"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-800 hover:border-emerald-500"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Heritage Private School. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Maxfiylik Siyosati</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
