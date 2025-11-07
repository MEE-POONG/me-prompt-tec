import Link from 'next/link';

export default function ContactCTASection() {
  return (
    <section className="py-20 relative bg-linear-to-br from-green-400 via-blue-600 to-purple-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
               พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ?
              </h2>
              
              <p className="text-xl mb-8 text-gray-300">
                ติดต่อเราวันนี้เพื่อปรึกษาโครงการและรับคำแนะนำฟรี
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600  border-2 border-white/20 transition-all duration-300 hover:scale-110" 
              >
                ติดต่อเรา
              </Link>
            </div>
          </section>
  );
}
