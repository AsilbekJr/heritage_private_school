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

// interface Role {
//   id: "student" | "teacher" | "admin";
//   title: string;
//   icon: string;
//   description: string;
//   color: string;
// }

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
  // const [selectedRole, setSelectedRole] = useState<
  //   "student" | "teacher" | "admin"
  // >("student");
  // const roles: Role[] = [
  //   {
  //     id: "student",
  //     title: "O'quvchi",
  //     icon: "🎓",
  //     description: "O'quv jarayoniga kirish",
  //     color: "from-emerald-500 to-green-600",
  //   },
  //   {
  //     id: "teacher",
  //     title: "O'qituvchi",
  //     icon: "👨‍🏫",
  //     description: "Darslar va baholar",
  //     color: "from-teal-500 to-cyan-600",
  //   },
  //   {
  //     id: "admin",
  //     title: "Admin",
  //     icon: "👨‍💼",
  //     description: "To'liq boshqaruv",
  //     color: "from-blue-500 to-indigo-600",
  //   },
  // ];
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
  // const handleRoleSelect = (roleId: "student" | "teacher" | "admin"): void => {
  //   setSelectedRole(roleId);
  //   registerForm.setValue("role", roleId);
  // };
  const onRegisterSubmit = (data: RegisterFormData): void => {
    const userData: StoredUser = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      // role: selectedRole,
      createdAt: new Date().toISOString(),
    };

    const users: StoredUser[] = JSON.parse(
      localStorage.getItem("heritage_users") || "[]"
    );
    users.push(userData);
    localStorage.setItem("heritage_users", JSON.stringify(users));

    console.log("Register:", userData);
    alert(`Muvaffaqiyatli ro'yxatdan o'tdingiz!\nIsm: ${data.fullName}\n`);

    registerForm.reset();
  };

  return (
    <div className="space-y-5">
      {/* Role Selection */}
      {/* <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Rolni tanlang
        </label>
        <div className="grid grid-cols-3 gap-3">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => handleRoleSelect(role.id)}
              className={`p-4 rounded-xl border-2 transition text-center ${
                selectedRole === role.id
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              <div className="text-3xl mb-2">{role.icon}</div>
              <div className="text-sm font-semibold text-gray-900">
                {role.title}
              </div>
            </button>
          ))}
        </div>
      </div> */}

      {/* Full Name */}
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
              required: "Email kiritilishi shart",
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
