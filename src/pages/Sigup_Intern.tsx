import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UploadCloud, Send, ArrowLeft, CheckCircle, School, Building2, GraduationCap, Briefcase } from "lucide-react";
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
    educationLevel: "university", // default value
    university: "", // ใช้เก็บชื่อสถานศึกษา (โรงเรียน/วิทยาลัย/มหาลัย)
    faculty: "",
    gpa: "",     // ใช้เก็บ คณะ/สาขา/สายการเรียน
    position: "",
    portfolioUrl: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const positions = [
    { id: "1", name: "Frontend Developer (Intern)" },
    { id: "2", name: "Backend Developer (Intern)" },
    { id: "3", name: "UI/UX Designer (Intern)" },
  ];

  // Auto-select position
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

  // ฟังก์ชันเปลี่ยนระดับการศึกษา และล้างค่าเก่า
  const handleLevelChange = (level: string) => {
    setFormData(prev => ({ 
        ...prev, 
        educationLevel: level,
        university: "", // ล้างค่าชื่อสถานศึกษาเมื่อเปลี่ยนระดับ
        faculty: ""     // ล้างค่าสาขาเมื่อเปลี่ยนระดับ
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const res = await fetch("/api/application", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                resumeUrl: resumeFile ? `pending_upload_${resumeFile.name}` : "", 
            }), 
        });

        const data = await res.json();

        if (res.ok) {
            setIsSuccess(true);
            window.scrollTo(0, 0);
        } else {
            alert("เกิดข้อผิดพลาด: " + (data.error || "ไม่สามารถส่งข้อมูลได้"));
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
    } finally {
        setIsSubmitting(false);
    }
  };

  // --- Helper Function: เลือก Label ตามระดับการศึกษา ---
  const getLabels = () => {
    switch (formData.educationLevel) {
        case "highschool":
            return { school: "ชื่อโรงเรียน", major: "สายการเรียน (เช่น วิทย์-คณิต)", placeholderSchool: "ระบุชื่อโรงเรียน", placeholderMajor: "ระบุสายการเรียน" };
        case "vocational":
            return { school: "ชื่อวิทยาลัย / สถานศึกษา", major: "สาขาวิชา (เช่น คอมพิวเตอร์ธุรกิจ)", placeholderSchool: "ระบุชื่อวิทยาลัย", placeholderMajor: "ระบุสาขาวิชา" };
        case "graduated":
            return { school: "สถานศึกษาที่จบล่าสุด", major: "วุฒิการศึกษา / สาขาที่จบ", placeholderSchool: "ระบุชื่อสถานศึกษา", placeholderMajor: "ระบุวุฒิหรือสาขา" };
        default: // university
            return { school: "ชื่อมหาวิทยาลัย", major: "คณะ / สาขาวิชา", placeholderSchool: "ระบุชื่อมหาวิทยาลัย", placeholderMajor: "ระบุคณะและสาขา" };
    }
  };

  const labels = getLabels();

  if (isSuccess) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center max-w-lg w-full border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">สมัครสำเร็จ!</h2>
            <p className="text-gray-500 mb-8">
              ขอบคุณที่สนใจร่วมงานกับเรา <br/>
              ทางทีม HR ได้รับข้อมูลของคุณเรียบร้อยแล้ว
            </p>
            <Link href="/internship">
              <button className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition w-full shadow-md">
                กลับไปหน้าหลัก
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            
            {/* Header */}
            <div className="bg-blue-600 px-6 py-6 md:px-8 flex items-start gap-4 relative">
              <Link href="/internship">
                <button className="cursor-pointer p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm shadow-sm border border-white/10 mt-1">
                  <ArrowLeft size={24} />
                </button>
              </Link>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white leading-tight">แบบฟอร์มสมัครฝึกงาน</h1>
                <p className="text-blue-100 text-sm mt-1 font-light opacity-90">
                  กรอกข้อมูลให้ครบถ้วนเพื่อประกอบการพิจารณาคัดเลือก
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
              
              {/* 1. ข้อมูลส่วนตัว */}
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  ข้อมูลส่วนตัว
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อจริง <span className="text-red-500">*</span></label>
                    <input required name="firstName" onChange={handleChange} type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white" placeholder="ระบุชื่อจริง (ภาษาไทย)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">นามสกุล <span className="text-red-500">*</span></label>
                    <input required name="lastName" onChange={handleChange} type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white" placeholder="ระบุนามสกุล (ภาษาไทย)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">อีเมล <span className="text-red-500">*</span></label>
                    <input required name="email" onChange={handleChange} type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white" placeholder="ระบุอีเมลที่ติดต่อได้สะดวก" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                    <input required name="phone" onChange={handleChange} type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white" placeholder="ระบุหมายเลขโทรศัพท์มือถือ" />
                  </div>
                </div>
              </div>

              {/* 2. การศึกษา (แบบใหม่: เลือกรูปแบบ) */}
              <div className="animate-fade-in-up delay-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  ข้อมูลการศึกษา
                </h3>

                {/* ตัวเลือก: ระดับการศึกษา (Grid Cards) */}
                <label className="block text-sm font-medium text-gray-700 mb-3">ระดับการศึกษาปัจจุบัน / ล่าสุด <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {/* มัธยมปลาย */}
                    <div 
                        onClick={() => handleLevelChange("highschool")}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-md text-center h-24
                            ${formData.educationLevel === "highschool" ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500" : "border-gray-200 bg-white text-gray-500 hover:border-blue-300"}`}
                    >
                        <School size={24} />
                        <span className="text-sm font-medium">มัธยมปลาย</span>
                    </div>

                    {/* ปวช./ปวส. */}
                    <div 
                        onClick={() => handleLevelChange("vocational")}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-md text-center h-24
                            ${formData.educationLevel === "vocational" ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500" : "border-gray-200 bg-white text-gray-500 hover:border-blue-300"}`}
                    >
                        <Building2 size={24} />
                        <span className="text-sm font-medium">ปวช. / ปวส.</span>
                    </div>

                    {/* มหาวิทยาลัย */}
                    <div 
                        onClick={() => handleLevelChange("university")}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-md text-center h-24
                            ${formData.educationLevel === "university" ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500" : "border-gray-200 bg-white text-gray-500 hover:border-blue-300"}`}
                    >
                        <GraduationCap size={24} />
                        <span className="text-sm font-medium">มหาวิทยาลัย</span>
                    </div>

                    {/* จบการศึกษา */}
                    <div 
                        onClick={() => handleLevelChange("graduated")}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all hover:shadow-md text-center h-24
                            ${formData.educationLevel === "graduated" ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500" : "border-gray-200 bg-white text-gray-500 hover:border-blue-300"}`}
                    >
                        <Briefcase size={24} />
                        <span className="text-sm font-medium">จบการศึกษาแล้ว</span>
                    </div>
                </div>

                {/* ช่องกรอกข้อมูล (Dynamic Labels) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in-up bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{labels.school} <span className="text-red-500">*</span></label>
                    <input 
                        required 
                        name="university" 
                        value={formData.university} 
                        onChange={handleChange} 
                        type="text" 
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black bg-white transition-all" 
                        placeholder={labels.placeholderSchool} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{labels.major} <span className="text-red-500">*</span></label>
                    <input 
                        required 
                        name="faculty" 
                        value={formData.faculty} 
                        onChange={handleChange} 
                        type="text" 
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black bg-white transition-all" 
                        placeholder={labels.placeholderMajor} 
                    />
                  </div>
                   {/* แถว 2: เกรดเฉลี่ย (GPA) + ตำแหน่ง */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">เกรดเฉลี่ยสะสม (GPA) <span className="text-red-500">*</span></label>
                    <input 
                        required 
                        name="gpa" 
                        value={formData.gpa} 
                        onChange={handleChange} 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        max="4.00" 
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-black bg-white transition-all" 
                        placeholder="เช่น 3.50" 
                    />
                  </div>

                  {/* ส่วนเลือกตำแหน่ง (อยู่รวมในกรอบเดียวกันเพื่อให้ดูเป็นหมวดหมู่) */}
                  <div className="md:col-span-2 border-t border-gray-200 pt-4 mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">ตำแหน่งที่ต้องการสมัคร <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <select 
                          required name="position" value={formData.position} onChange={handleChange} 
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-black bg-white cursor-pointer hover:bg-gray-50"
                        >
                          <option value="">-- กรุณาเลือกตำแหน่ง --</option>
                          {positions.map(p => (
                            <option key={p.id} value={p.name}>{p.name}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. เอกสารประกอบ */}
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  เอกสารประกอบ
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume / CV (PDF) <span className="text-red-500">*</span></label>
                  <div className="flex items-center justify-center w-full group">
                    <label className={`flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
                        ${resumeFile 
                            ? "border-green-400 bg-green-50/50" 
                            : "border-gray-300 bg-gray-50/50 hover:bg-blue-50/50 hover:border-blue-300"
                        }`}>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {resumeFile ? (
                           <div className="flex flex-col items-center animate-bounce-in">
                             <div className="p-2 bg-green-100 rounded-full mb-2">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                             </div>
                             <p className="text-sm text-green-700 font-semibold">{resumeFile.name}</p>
                             <p className="text-xs text-gray-500 mt-1">คลิกเพื่อเปลี่ยนไฟล์</p>
                           </div>
                        ) : (
                           <div className="flex flex-col items-center group-hover:scale-105 transition-transform">
                             <div className="p-3 bg-gray-100 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
                                <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                             </div>
                             <p className="text-sm text-gray-600"><span className="font-semibold text-blue-600">คลิกอัปโหลด</span> หรือลากไฟล์มาวาง</p>
                             <p className="text-xs text-gray-400 mt-1">รองรับไฟล์ PDF (สูงสุด 5MB)</p>
                           </div>
                        )}
                      </div>
                      <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} required />
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Link Portfolio / GitHub</label>
                  <input 
                    name="portfolioUrl" onChange={handleChange} type="url" 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white" 
                    placeholder="https://..." 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ข้อความถึงทีมงาน (Cover Letter)</label>
                  <textarea 
                    name="message" onChange={handleChange} rows={4} 
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-black placeholder-gray-400 bg-gray-50/50 focus:bg-white resize-none" 
                    placeholder="ระบุเหตุผลที่สนใจร่วมงาน หรือสิ่งที่คาดหวัง..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-100">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full cursor-pointer flex items-center justify-center py-3.5 px-6 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 transform
                    ${isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed scale-95" 
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-1 active:scale-95"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        กำลังส่งข้อมูล...
                    </div>
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