import Link from 'next/link';

export default function InternshipCTASection() {
  return (
    <section className="py-20 bg-blue-700 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            เข้าร่วมทีมกับเรา
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            เปิดรับนักศึกษาฝึกงาน/สหกิจศึกษา ร่วมทำโปรเจกต์จริง เรียนรู้จากผู้เชี่ยวชาญ
            พัฒนาทักษะเพื่ออนาคตในอุตสาหกรรมเทคโนโลยี
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'โปรเจกต์จริง', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/blueprint--v1.png" alt="blueprint--v1"/> },
              { label: 'เทคโนโลยีล่าสุด', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/electronics.png" alt="electronics"/> },
              { label: 'ทีมมืออาชีพ', icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/group-foreground-selected.png" alt="group-foreground-selected"/> },
              { label: 'ประสบการณ์', icon: <img width="30" height="30" src="https://img.icons8.com/poly/30/filled-star.png" alt="filled-star"/> },
            ].map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white shadow-xl mb-4 transform hover:scale-105 transition duration-300">
                <div className="text-3xl leading-none">{benefit.icon}</div> 
                </div>
                <div className="font-semibold">{benefit.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/internship"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            ดูข้อมูลโปรแกรมฝึกงาน
          </Link>
        </div>
      </section>
  );
}
