import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaLine,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

export default function Card_Contact() {
  return (
    <section className="pb-20 bg-linear-to-bl from-lime-400 via-blue-600 to-indigo-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
          {/* ===== ส่วนข้อมูลติดต่อ (ซ้าย) ===== */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              ข้อมูลการติดต่อ
            </h2>
            {/* (ข้อมูลติดต่อของคุณถูกต้องแล้ว) */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-yellow-500" />
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:info@meprompt.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@meprompt.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-yellow-500" />
                <div>
                  <strong>Phone:</strong>
                  <br />
                  <span>044-003463 (ฝ่ายสนับสนุน)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-yellow-500" />
                <div>
                  <strong>Address:</strong>
                  <br />
                  <span>
                    606/3 ม.5 ต.บ้านเกาะ อ.เมืองนครราชสีมา จ.นครราชสีมา <br />
                    Nakhon Ratchasima, Thailand, Nakhon Ratchasima
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800">
              ช่องทางโซเชียล
            </h2>
            {/* (Social Links ของคุณถูกต้องแล้ว) */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/meprompttecnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
              >
                <FaDiscord className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
              >
                <FaLine className="text-4xl" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              ส่งข้อความถึงเรา
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 placeholder:text-gray-400"
                    placeholder="ชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 placeholder:text-gray-400"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 placeholder:text-gray-400"
                    placeholder="สอบถามเรื่อง..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500 border-2 border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    ส่งข้อความ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
