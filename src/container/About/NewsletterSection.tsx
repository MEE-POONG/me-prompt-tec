import React from "react";

export default function NewsletterSection() {
  return (
    <section className="relative bg-linear-to-bl from-green-400 via-blue-600 to-purple-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          รับข่าวสารล่าสุดจากเรา
        </h2>
        <p className="text-lg text-white mb-8">
          สมัครรับจดหมายข่าวเพื่อไม่พลาดข้อมูลอัปเดตเกี่ยวกับเทคโนโลยีและบริการใหม่ ๆ จาก Me Prompt
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="กรอกอีเมลของคุณ"
            className="w-full text-white sm:w-auto flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            สมัคร
          </button>
        </form>

        <p className="text-sm text-white mt-4">
          เราจะไม่ส่งสแปมและเคารพความเป็นส่วนตัวของคุณ
        </p>
      </div>
    </section>
  );
}
