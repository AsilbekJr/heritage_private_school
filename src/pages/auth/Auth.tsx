import { useState } from "react";
import { ArrowLeft, CheckCircle, GraduationCap } from "lucide-react";
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchMode = (): void => {
    setIsLogin(!isLogin);
    // loginForm.reset();
    // registerForm.reset();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="hidden md:block">
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <a
                href="/"
                className="inline-flex items-center space-x-3 mb-8 hover:opacity-80 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Bosh sahifaga qaytish</span>
              </a>

              <div className="flex items-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Heritage</h1>
                  <p className="text-emerald-100">Private School</p>
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-4">
                {isLogin ? "Xush kelibsiz!" : "Bizga qo'shiling!"}
              </h2>
              <p className="text-emerald-100 text-lg mb-8">
                {isLogin
                  ? "Heritage School'ga kirish uchun hisobingizga kiring"
                  : "Heritage School oilasining bir qismi bo'ling va kelajagingizni yarating"}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>Zamonaviy ta'lim platformasi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>Xavfsiz va ishonchli tizim</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>24/7 yordam va qo'llab-quvvatlash</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <a
              href="/"
              className="md:hidden inline-flex items-center space-x-2 text-emerald-600 mb-6 hover:text-emerald-700 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Orqaga</span>
            </a>

            {/* Tabs */}
            <div className="flex bg-emerald-50 rounded-2xl p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-xl font-semibold transition ${
                  isLogin
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Kirish
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-xl font-semibold transition ${
                  !isLogin
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                Ro'yxatdan o'tish
              </button>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Hisobingizga kiring" : "Yangi hisob yarating"}
            </h2>
            <p className="text-gray-600 mb-8">
              {isLogin
                ? "Email va parolingizni kiriting"
                : "Quyidagi ma'lumotlarni to'ldiring"}
            </p>

            {/* LOGIN FORM */}
            {isLogin ? (
              <Login />
            ) : (
              /* REGISTER FORM */
              <Register />
            )}

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
              {isLogin ? "Hisobingiz yo'qmi?" : "Allaqachon hisobingiz bormi?"}{" "}
              <button
                onClick={switchMode}
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                {isLogin ? "Ro'yxatdan o'ting" : "Kirish"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
