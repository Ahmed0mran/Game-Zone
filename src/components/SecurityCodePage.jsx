import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SecurityCodePage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Code submitted: " + code);
    navigate("/recover/password"); //  توجيه المستخدم بعد إدخال الكود
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* الحاوية الرئيسية */}
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* العنوان */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Enter security code
        </h1>

        {/* الوصف أو التعليمات */}
        <p className="text-gray-400 text-center mb-6">
          Please check your emails for a message with your code. Your code is 6
          numbers long.
        </p>

        {/* النموذج */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* حقل إدخال الكود */}
          <input
            type="text"
            maxLength="6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* الأزرار */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/")} // زر الرجوع
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Continue
            </button>
          </div>
        </form>

        {/* رابط المساعدة في حال لم يصل الكود */}
        <p className="mt-6 text-blue-400 text-sm text-center cursor-pointer hover:underline">
          Didn't get a code?
        </p>
      </div>
    </div>
  );
}

export default SecurityCodePage;
