import Link from 'next/link';

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ?
              </h2>
              
              <p className="text-xl mb-8 text-gray-300">
                ติดต่อเราวันนี้เพื่อปรึกษาโครงการและรับคำแนะนำฟรี
              </p>
              <Link
                href="/contact"
                className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-all bg-linear-to-r from-yellow-500 via-yellow-500 to-orange-500 hover:from-yellow-600 hover:via-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg"
              >
                ติดต่อเรา
              </Link>
            </div>
          </section>
  );
}
