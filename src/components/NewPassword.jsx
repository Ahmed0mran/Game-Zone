import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    //  هنا نفترض أنه بعد حفظ كلمة المرور، يتم التوجيه
    alert("Password updated successfully!");
    navigate("/login"); // 🔹 بعد ضبط كلمة المرور، توجيه المستخدم إلى صفحة تسجيل الدخول
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      {/* حاوية المحتوى */}
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* العنوان */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Choose a new password
        </h1>

        {/* الوصف */}
        <p className="text-gray-400 text-sm md:text-base text-center mb-6 leading-relaxed">
          Create a new password that is at least 6 characters long. A strong
          password has a combination of letters, digits, and punctuation marks.
        </p>

        {/* النموذج */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* حقل إدخال كلمة المرور */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your new password"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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

          {/* زر المتابعة */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 rounded-md transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
