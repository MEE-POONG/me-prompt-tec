import Link from 'next/link';
import Image from 'next/image'; 
const partners = [
  {
    id: 1,
    name: 'RMUTI',
    src: '/img/logo_RMUTI.jpg', // Path ต้องเริ่มด้วย /
    alt: 'Logo RMUTI ราชมงคลอีสาน'
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
              ความร่วมมือกับสถาบันการศึกษา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เราภูมิใจที่ได้เป็นส่วนหนึ่งในการผลิตบุคลากรด้านเทคโนโลยี
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((partner) => (
              <div 
          key={partner.id} 
          className="w-32 h-32 relative" // 'relative' จำเป็นสำหรับ layout="fill"
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            layout="fill"
            objectFit="contain" // 'contain' ทำให้โลโก้พอดีในกรอบ ไม่ล้นหรือถูกบีบ
          />
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