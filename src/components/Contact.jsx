import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          We would love to hear from you! Whether you have a question, feedback, or
          need support, feel free to reach out.
        </p>
        <form className="space-y-4 mt-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
