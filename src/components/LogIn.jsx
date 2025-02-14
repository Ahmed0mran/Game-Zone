import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ استخدم useNavigate بدل Link للتوجيه بعد تسجيل الدخول
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ لتوجيه المستخدم بعد تسجيل الدخول

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // ✅ بعد التحقق، يتم التوجيه إلى الصفحة الرئيسية أو صفحة الحساب
    alert("Login successful!");
    navigate("/dashboard"); // 🔹 غير الصفحة حسب احتياجك
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Log in</h1>
        <p className="text-gray-400 text-center mb-6">
          Log in with your account to join the Game Zone!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* حقل البريد الإلكتروني */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* حقل كلمة المرور */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition"
          >
            Continue
          </button>

          {/* رابط نسيان كلمة المرور */}
          <div className="text-center">
            <button
              onClick={() => navigate("/ForgotPassword")}
              className="text-blue-400 hover:underline"
              type="button"
            >
              Forgotten account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
