import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UploadCloud, Send, ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
export default function ApplyPage() {
  const router = useRouter();
  const { position_id } = router.query;

  // State เก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    faculty: "",
    position: "",
    portfolioUrl: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mapping ID เป็นชื่อตำแหน่ง (เพื่อให้ Auto-select ทำงาน)
  // ตรงนี้ควรตรงกับ ID ในหน้า Landing Page
  const positions = [
    { id: "1", name: "Frontend Developer (Intern)" },
    { id: "2", name: "Backend Developer (Intern)" },
    { id: "3", name: "UI/UX Designer (Intern)" },
  ];

  // useEffect: ดึงค่า position_id จาก URL มาเลือกใน Dropdown อัตโนมัติ
  useEffect(() => {
    if (position_id) {
      const target = positions.find((p) => p.id === position_id);
      if (target) {
        setFormData((prev) => ({ ...prev, position: target.name }));
      }
    }
  }, [position_id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- จำลองการส่งข้อมูล (Mock API) ---
    // ของจริงจะต้องใช้ FormData เพื่อส่งไฟล์
    // const data = new FormData();
    // data.append('resume', resumeFile);
    // ... append อื่นๆ

    await new Promise((resolve) => setTimeout(resolve, 2000)); // รอ 2 วินาที

    console.log("Form Data:", formData);
    console.log("File:", resumeFile?.name);

    setIsSubmitting(false);
    setIsSuccess(true); // เปลี่ยนสถานะเป็นสมัครสำเร็จ
    window.scrollTo(0, 0); // เลื่อนขึ้นบนสุด
  };

  // --- View: เมื่อสมัครสำเร็จ ---
  if (isSuccess) {
    return (
      <div>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center max-w-lg w-full border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">สมัครสำเร็จ!</h2>
            <p className="text-gray-500 mb-8">
              ขอบคุณที่สนใจร่วมงานกับเรา <br/>
              ทางทีม HR ได้รับข้อมูลของคุณเรียบร้อยแล้ว <br/>
              และจะติดต่อกลับภายใน 3-5 วันทำการครับ
            </p>
            <Link href="/internship">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition w-full">
                กลับไปหน้าหลัก
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- View: ฟอร์มสมัคร ---
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* ปุ่มย้อนกลับ */}
          <Link href="/internship" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition">
            <ArrowLeft size={20} className="mr-2" /> ย้อนกลับ
          </Link>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            {/* Header Form */}
            <div className="bg-blue-600 px-8 py-6">
              <h1 className="text-2xl font-bold text-white">แบบฟอร์มสมัครฝึกงาน</h1>
              <p className="text-blue-100 text-sm mt-1">กรอกข้อมูลให้ครบถ้วนเพื่อประกอบการพิจารณา</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
  
  {/* 1. ข้อมูลส่วนตัว */}
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">ข้อมูลส่วนตัว</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อจริง <span className="text-red-500">*</span></label>
        <input 
            required 
            name="firstName" 
            onChange={handleChange} 
            type="text" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุชื่อจริง (ภาษาไทย)" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">นามสกุล <span className="text-red-500">*</span></label>
        <input 
            required 
            name="lastName" 
            onChange={handleChange} 
            type="text" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุนามสกุล (ภาษาไทย)" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">อีเมล <span className="text-red-500">*</span></label>
        <input 
            required 
            name="email" 
            onChange={handleChange} 
            type="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุอีเมลที่ติดต่อได้สะดวก" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
        <input 
            required 
            name="phone" 
            onChange={handleChange} 
            type="tel" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุหมายเลขโทรศัพท์มือถือ" 
        />
      </div>
    </div>
  </div>

  {/* 2. การศึกษา & ตำแหน่ง */}
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 mt-6">การศึกษา & ตำแหน่ง</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">มหาวิทยาลัย <span className="text-red-500">*</span></label>
        <input 
            required 
            name="university" 
            onChange={handleChange} 
            type="text" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุชื่อมหาวิทยาลัยหรือสถาบันการศึกษา" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">คณะ / สาขา <span className="text-red-500">*</span></label>
        <input 
            required 
            name="faculty" 
            onChange={handleChange} 
            type="text" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
            placeholder="ระบุคณะและสาขาวิชาที่ศึกษาอยู่" 
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">ตำแหน่งที่ต้องการฝึก <span className="text-red-500">*</span></label>
        <select 
          required 
          name="position" 
          value={formData.position} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black bg-white placeholder-gray-400"
        >
          <option value="">-- กรุณาเลือกตำแหน่งที่ต้องการสมัคร --</option>
          {positions.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>
    </div>
  </div>

  {/* 3. เอกสารประกอบ */}
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 mt-6">เอกสารประกอบ</h3>
    
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Resume / CV (PDF) <span className="text-red-500">*</span></label>
      <div className="flex items-center justify-center w-full">
        <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition ${resumeFile ? "border-green-400 bg-green-50" : "border-gray-300 bg-gray-50"}`}>
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {resumeFile ? (
               <>
                 <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                 <p className="text-sm text-green-600 font-medium">{resumeFile.name}</p>
                 <p className="text-xs text-gray-400 mt-1">คลิกเพื่อเปลี่ยนไฟล์</p>
               </>
            ) : (
               <>
                 <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
                 <p className="text-sm text-gray-500"><span className="font-semibold">คลิกเพื่ออัปโหลด</span> หรือลากไฟล์มาวางที่นี่</p>
                 <p className="text-xs text-gray-500">รองรับไฟล์ PDF (ขนาดไม่เกิน 5MB)</p>
               </>
            )}
          </div>
          <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} required />
        </label>
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">Link Portfolio / GitHub / Website</label>
      <input 
        name="portfolioUrl" 
        onChange={handleChange} 
        type="url" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400" 
        placeholder="ระบุลิงก์ผลงาน (Google Drive, GitHub หรือ Website)" 
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความถึงทีมงาน (Cover Letter)</label>
      <textarea 
        name="message" 
        onChange={handleChange} 
        rows={4} 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black resize-none placeholder-gray-400" 
        placeholder="ระบุเหตุผลที่สนใจร่วมงาน หรือสิ่งที่คาดหวังจากการฝึกงานในครั้งนี้..."
      ></textarea>
    </div>
  </div>

  {/* Submit Button */}
  <div className="pt-4">
    <button 
      type="submit" 
      disabled={isSubmitting}
      className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-semibold text-lg shadow-md transition-all
        ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"}
      `}
    >
      {isSubmitting ? (
        <>กำลังดำเนินการส่งข้อมูล...</>
      ) : (
        <> <Send className="mr-2 w-5 h-5" /> ยืนยันการสมัคร </>
      )}
    </button>
  </div>

</form>
          </div>
        </div>
      </div>
    </Layout>
  );
}