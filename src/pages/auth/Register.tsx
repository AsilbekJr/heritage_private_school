import { saveUsers } from "@/features/auth/authStorage";
import {
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface StoredUser {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  // role: string;
  createdAt: string;
}
interface RegisterFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: "student" | "teacher" | "admin";
}

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const hashPassword = (password: string): string => {
    return btoa(password); // base64 (demo uchun)
  };

  const registerForm = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "student",
    },
  });

  const onRegisterSubmit = (data: RegisterFormData): void => {
    const users: StoredUser[] = JSON.parse(
      localStorage.getItem("user") || "[]"
    );

    // 🔴 Telefon raqam takrorlanmasin
    const phoneExists = users.some((user) => user.phone === data.phone);

    if (phoneExists) {
      alert("Bu telefon raqam bilan allaqachon ro‘yxatdan o‘tilgan");
      return;
    }

    const newUser: StoredUser = {
      fullName: data.fullName.trim(),
      email: data.email.trim() || "",
      phone: data.phone,
      password: hashPassword(data.password),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    alert(
      `Muvaffaqiyatli ro'yxatdan o'tdingiz!\n\nIsm: ${newUser.fullName}\nTelefon: ${newUser.phone}`
    );

    registerForm.reset();
    navigate("/login");
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Ism Familiya
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            {...registerForm.register("fullName", {
              required: "Ism familiya kiritilishi shart",
              minLength: {
                value: 3,
                message:
                  "Ism familiya kamida 3 ta belgidan iborat bo'lishi kerak",
              },
            })}
            placeholder="Ism Familiyangiz"
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              registerForm.formState.errors.fullName
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
        </div>
        {registerForm.formState.errors.fullName && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{registerForm.formState.errors.fullName.message}</span>
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            {...registerForm.register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email formati noto'g'ri",
              },
            })}
            placeholder="example@heritage.uz"
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              registerForm.formState.errors.email
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
        </div>
        {registerForm.formState.errors.email && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{registerForm.formState.errors.email.message}</span>
          </div>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Telefon Raqam
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            {...registerForm.register("phone", {
              required: "Telefon raqam kiritilishi shart",
              pattern: {
                value: /^\+998\d{9}$/,
                message: "Telefon format: +998XXXXXXXXX",
              },
            })}
            placeholder="+998901234567"
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              registerForm.formState.errors.phone
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
        </div>
        {registerForm.formState.errors.phone && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{registerForm.formState.errors.phone.message}</span>
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
            {...registerForm.register("password", {
              required: "Parol kiritilishi shart",
              minLength: {
                value: 6,
                message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
              },
            })}
            placeholder="••••••••"
            className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              registerForm.formState.errors.password
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
        {registerForm.formState.errors.password && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{registerForm.formState.errors.password.message}</span>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Parolni Tasdiqlash
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            {...registerForm.register("confirmPassword", {
              required: "Parolni tasdiqlang",
              validate: (value) => {
                const password = registerForm.getValues("password");
                return value === password || "Parollar mos kelmadi";
              },
            })}
            placeholder="••••••••"
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:border-emerald-500 transition ${
              registerForm.formState.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-200"
            }`}
          />
        </div>
        {registerForm.formState.errors.confirmPassword && (
          <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
            <AlertCircle className="w-4 h-4" />
            <span>{registerForm.formState.errors.confirmPassword.message}</span>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={registerForm.handleSubmit(onRegisterSubmit)}
        className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Ro'yxatdan o'tish
      </button>
    </div>
  );
}
