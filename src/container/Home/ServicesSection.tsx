import { BrainCircuit, CodeXml, Megaphone } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-shadow-gray-800">
            บริการของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-shadow-gray-800 text-shadow-2xs">
            เราให้บริการด้านเทคโนโลยีครบวงจร
            ตั้งแต่การพัฒนาซอฟต์แวร์ไปจนถึงการให้คำปรึกษา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <CodeXml />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Web & Mobile Development
            </h3>
            <p className="text-gray-600">
              พัฒนาเว็บและแอปพลิเคชันที่ทันสมัย ตอบโจทย์ทุกธุรกิจ
              ด้วยเทคโนโลยีล่าสุด
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <BrainCircuit />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              AI & Automation
            </h3>
            <p className="text-gray-600">
              นำ AI และระบบอัตโนมัติมาเพิ่มประสิทธิภาพองค์กร ลดต้นทุน
              เพิ่มความแม่นยำ
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-linear-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Megaphone />
            </div>
            <h3 className="text-xl font-bold text-green-600 mb-3">
              Consulting & Training
            </h3>
            <p className="text-gray-600">
              ให้คำปรึกษาและอบรมทีมงานด้านเทคโนโลยี พัฒนาศักยภาพองค์กร
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
