import React from "react";

export default function MapSection_Contact() {
  return (
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
  );
}
