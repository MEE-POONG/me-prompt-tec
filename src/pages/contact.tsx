import Layout from "@/components/Layout";
import React from "react";
// Import ไอคอน (เหมือนเดิม)
import { FaFacebook, FaYoutube, FaDiscord, FaLine, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <Layout>
      
      {/* 1. HERO SECTION (Gradient) */}
      <section className="py-24 md:py-32 text-white bg-linear-to-tl from-lime-400 via-blue-600 to-indigo-800">

        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            ติดต่อเรา
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto"> 
            พบปัญหาหรือมีข้อสงสัย กรอกแบบฟอร์มด้านล่าง
            <p>หรือติดต่อเราผ่านช่องทางอื่นได้เลย</p>
          </p>
        </div>
      </section>

      {/* 2. ส่วนเนื้อหา (การ์ดสีขาว) */}
      <section className="py-20 bg-linear-to-bl from-lime-400 via-blue-600 to-indigo-800">
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
                    <strong>Email:</strong><br />
                    <a href="mailto:info@meprompt.com" className="text-blue-600 hover:underline">
                      info@meprompt.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-yellow-500" />
                  <div>
                    <strong>Phone:</strong><br />
                    <span>044-003463 (ฝ่ายสนับสนุน)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-yellow-500" />
                  <div>
                    <strong>Address:</strong><br />
                    <span>606/3 ม.5 ต.บ้านเกาะ อ.เมืองนครราชสีมา จ.นครราชสีมา <br />Nakhon Ratchasima, Thailand, Nakhon Ratchasima</span>
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
                <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110">
                  <FaYoutube className="text-4xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110">
                  <FaDiscord className="text-4xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110">
                  <FaLine className="text-4xl" />
                </a>
              </div>
            </div>

            {/* ===== ส่วนฟอร์ม (ขวา) ===== */}
            {/* (Form ของคุณถูกต้องแล้ว) */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                ส่งข้อความถึงเรา
              </h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <button type="submit" className="w-full bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 border-2 border-white/20 transition-all duration-300 hover:scale-105">
                      ส่งข้อความ
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 5. ส่วนแผนที่ (Map Section) ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">
              แผนที่และการเดินทาง
            </h2>
            {/* <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              606/3 ม.5 ต.บ้านเกาะ อ.เมืองนครราชสีมา จ.นครราชสีมา
            </p> */}
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3853.8020813296657!2d102.12709007511401!3d15.00368798553187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDAwJzEzLjMiTiAxMDLCsDA3JzQ2LjgiRQ!5e0!3m2!1sen!2sth!4v1762592015288!5m2!1sen!2sth" 
              className="w-full h-96 md:h-[500px]"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* [NEW] ⭐️ นี่คือ "ปุ่มนำทาง" ที่คุณขอครับ ⭐️ */}
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/kjmZ9AhgsygSzFTUA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 border-2 border-white/20 transition-all duration-300 hover:scale-105"
            >
              คลิกเพื่อนำทาง (Google Maps)
            </a>
          </div>

        </div>
      </section>
    </Layout>
  );
}