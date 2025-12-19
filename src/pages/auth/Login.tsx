import { AlertCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onLoginSubmit = (data: LoginFormData): void => {
    console.log("Login:", data);
    alert(`Muvaffaqiyatli kirdingiz!\nEmail: ${data.email}`);
  };
  const loginForm = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  return (
    <div className="space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            {...loginForm.register("email", {
              required: "Email kiritilishi shart",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email formati noto'g'ri",
              },
            })}
            placeholder="example@heritage.uz"
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              loginForm.formState.errors.email
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
        </div>
        {loginForm.formState.errors.email && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{loginForm.formState.errors.email.message}</span>
          </div>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Parol
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            {...loginForm.register("password", {
              required: "Parol kiritilishi shart",
              minLength: {
                value: 6,
                message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
              },
            })}
            placeholder="••••••••"
            className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              loginForm.formState.errors.password
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {loginForm.formState.errors.password && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{loginForm.formState.errors.password.message}</span>
          </div>
        )}
      </div>

      {/* Remember me / Forgot password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            {...loginForm.register("rememberMe")}
            className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-600">Eslab qolish</span>
        </label>
        <a
          href="#"
          className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          Parolni unutdingizmi?
        </a>
      </div>

      {/* Submit Button */}
      <button
        onClick={loginForm.handleSubmit(onLoginSubmit)}
        className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Kirish
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">yoki</span>
        </div>
      </div>

      {/* Demo Accounts
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Demo hisoblar:
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <div>
            👨‍💼 <span className="font-mono">admin@heritage.uz</span> / admin123
          </div>
          <div>
            🎓 <span className="font-mono">student@heritage.uz</span> /
            student123
          </div>
          <div>
            👨‍🏫 <span className="font-mono">teacher@heritage.uz</span> /
            teacher123
          </div>
        </div>
      </div> */}
    </div>
  );
}
