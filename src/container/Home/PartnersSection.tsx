import Link from 'next/link';

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ความร่วมมือกับสถาบันการศึกษา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เราภูมิใจที่ได้เป็นส่วนหนึ่งในการผลิตบุคลากรด้านเทคโนโลยี
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">University {partner}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              ดูความร่วมมือทั้งหมด →
            </Link>
          </div>
        </div>
      </section>
  );
}
