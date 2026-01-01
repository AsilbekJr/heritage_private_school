import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-linear-to-br from-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Biz Bilan Bog'laning
          </h2>
          <p className="text-xl text-gray-600">
            Savollaringiz bormi? Biz yordam berishga tayyormiz!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-emerald-100">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
            <p className="text-gray-600">+998 71 123 45 67</p>
            <p className="text-gray-600">+998 90 123 45 67</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-emerald-100">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@heritage.uz</p>
            <p className="text-gray-600">admission@heritage.uz</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-emerald-100">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Manzil</h3>
            <p className="text-gray-600">Buxoro shahri,</p>
            <p className="text-gray-600">G'ijduvon tumani</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Bolangiz Kelajagini Bugun Boshlang!
          </h3>
          <p className="text-xl mb-8 text-emerald-100">
            Bepul ekskursiya va konsultatsiya olish uchun ro'yxatdan o'ting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105 inline-flex items-center justify-center space-x-2">
              <span>Ro'yxatdan o'tish</span>
              <Send className="w-5 h-5" />
            </button>
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition border-2 border-white/20">
              Biz bilan bog'lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
