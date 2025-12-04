import React from "react";
import { Navigation } from "lucide-react";

export default function MapSection_Contact() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 mb-4">
            แผนที่และการเดินทาง
          </h2>
          <p className="text-slate-500 text-lg">
            แวะมาเยี่ยมชมออฟฟิศของเราได้ที่โคราช หรือนัดหมายล่วงหน้าได้เลยครับ
          </p>
        </div>

        <div className="relative group rounded-4xl p-2 bg-linear-to-br from-white via-blue-50 to-purple-50 border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
          <div className="relative w-full overflow-hidden rounded-3xl bg-slate-200">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3853.8020813296657!2d102.12709007511401!3d15.00368798553187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDAwJzEzLjMiTiAxMDLCsDA3JzQ2LjgiRQ!5e0!3m2!1sen!2sth!4v1762592015288!5m2!1sen!2sth" 
              // ⚠️ อย่าลืมใส่ Link Embed Map ของจริงนะครับ
              className="w-full h-[400px] md:h-[500px] grayscale-20 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay Button: เปลี่ยนเป็น Gradient ให้เหมือนปุ่มอื่น */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-max">
              <a
                href="https://maps.app.goo.gl/kjmZ9AhgsygSzFTUA" // 🔗 ใส่ Link นำทางจริง
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 text-white bg-linear-to-r from-blue-600 via-violet-600 to-pink-500"
              >
                <Navigation size={18} className="animate-pulse" />
                <span>เปิดแผนที่นำทาง</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}