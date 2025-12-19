import { Facebook, GraduationCap, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Heritage</span>
            </div>
            <p className="text-slate-400 text-sm">
              Kelajak uchun ta'lim beramiz
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Tezkor Havolalar</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <a
                href="#about"
                className="block hover:text-emerald-400 transition"
              >
                Biz haqimizda
              </a>
              <a
                href="#programs"
                className="block hover:text-emerald-400 transition"
              >
                Dasturlar
              </a>
              <a
                href="#facilities"
                className="block hover:text-emerald-400 transition"
              >
                Imkoniyatlar
              </a>
              <a
                href="#contact"
                className="block hover:text-emerald-400 transition"
              >
                Aloqa
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Aloqa</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>+998 99 739 71 57</p>
              <p>info@heritage.uz</p>
              <p>Buxoro, G'ijduvon</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ijtimoiy Tarmoqlar</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>© 2025 Heritage Private School. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
