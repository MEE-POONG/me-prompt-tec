"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  UploadCloud,
  Send,
  ArrowLeft,
  CheckCircle,
  School,
  Building2,
  GraduationCap,
  Briefcase,
  Loader2,
  FileText
} from "lucide-react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

// Interface สำหรับข้อมูลตำแหน่งงานจาก Database
interface Position {
  id: string;
  title: string;
  isOpen: boolean;
}

function ApplyFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const position_id = searchParams.get("position_id");

  // State เก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    educationLevel: "",
    university: "",
    faculty: "",
    gpa: "",
    position: "",
    portfolioUrl: "",
    resumeUrl: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [positions, setPositions] = useState<Position[]>([]);

  // Fetch Positions
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await fetch("/api/positions");
        if (res.ok) {
          const data = await res.json();
          const activePositions = Array.isArray(data)
            ? data.filter((p: Position) => p.isOpen)
            : [];
          setPositions(activePositions);
        } else {
          console.error("Failed to fetch positions");
        }
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };
    fetchPositions();
  }, []);

  // Auto-select position
  useEffect(() => {
    if (position_id && positions.length > 0) {
      const target = positions.find((p) => p.id === position_id);
      if (target) {
        setFormData((prev) => ({ ...prev, position: target.title }));
      }
    }
  }, [position_id, positions]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLevelChange = (level: string) => {
    setFormData((prev) => ({
      ...prev,
      educationLevel: level,
      university: "",
      faculty: "",
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
      const fileUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, resumeUrl: fileUrl }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Basic Validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.position) {
        alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
        setIsSubmitting(false);
        return;
      }

      if (!resumeFile) {
        alert("กรุณาอัพโหลดไฟล์ Resume/CV");
        setIsSubmitting(false);
        return;
      }

      // 1. Upload Resume
      let uploadedResumeUrl = "";
      const formDataFile = new FormData();
      formDataFile.append("file", resumeFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formDataFile,
      });

      if (!uploadRes.ok) {
        const errorData = await uploadRes.json();
        alert("อัปโหลดไฟล์ล้มเหลว: " + (errorData.error || "กรุณาลองใหม่อีกครั้ง"));
        setIsSubmitting(false);
        return;
      }

      const uploadData = await uploadRes.json();
      uploadedResumeUrl = uploadData.url;

      // 2. Prepare Message
      const detailMessage = `
**ข้อมูลการสมัครงาน**
ตำแหน่ง: ${formData.position}
ระดับการศึกษา: ${formData.educationLevel}
สถานศึกษา: ${formData.university}
คณะ/สาขา: ${formData.faculty}
GPA: ${formData.gpa}

${formData.message ? formData.message : "- ไม่มีข้อความเพิ่มเติม -"}
`.trim();

      // 3. Send Data
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `[ใบสมัคร] ${formData.position} - ${formData.firstName}`,
        message: detailMessage,
        source: "application-form",
        status: "new",
        resumeUrl: uploadedResumeUrl,
        portfolioUrl: formData.portfolioUrl || null,
      };

      const res = await fetch("/api/Contact/contactmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  const getLabels = () => {
    switch (formData.educationLevel) {
      case "highschool":
        return { school: "ชื่อโรงเรียน", major: "สายการเรียน", placeholderSchool: "ระบุชื่อโรงเรียน", placeholderMajor: "ระบุสายการเรียน" };
      case "vocational":
        return { school: "ชื่อวิทยาลัย", major: "สาขาวิชา", placeholderSchool: "ระบุชื่อวิทยาลัย", placeholderMajor: "ระบุสาขาวิชา" };
      case "graduated":
        return { school: "สถานศึกษาที่จบล่าสุด", major: "วุฒิ/สาขา", placeholderSchool: "ระบุชื่อสถานศึกษา", placeholderMajor: "ระบุวุฒิหรือสาขา" };
      default:
        return { school: "ชื่อมหาวิทยาลัย", major: "คณะ / สาขาวิชา", placeholderSchool: "ระบุชื่อมหาวิทยาลัย", placeholderMajor: "ระบุคณะและสาขา" };
    }
  };

  const labels = getLabels();

  // --- Success State ---
  if (isSuccess) {
    return (
      <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
        {/* Background Animation */}
        <div className="fixed inset-0 -z-10 bg-slate-50">
           <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
           <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
           <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 backdrop-blur-2xl p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 text-center max-w-lg w-full"
        >
          <div className="w-24 h-24 bg-linear-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            ส่งใบสมัครเรียบร้อย!
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            ขอบคุณที่สนใจร่วมงานกับ Me Prompt Technology <br />
            ทางทีม HR จะพิจารณาข้อมูลและติดต่อกลับโดยเร็วที่สุดครับ
          </p>
          <Link href="/internship">
            <button className="w-full px-8 py-4 bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">
              กลับไปหน้าหลัก
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // --- Main Form ---
  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 overflow-hidden">
      
      {/* 🔮 Global Background (Pastel Theme) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Glass Card Container */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white/60">
          
          {/* Header แบบ Clean Gradient Text */}
          <div className="px-6 py-10 md:px-12 text-center border-b border-white/50 bg-white/40">
            <Link href="/internship" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-6 text-sm font-medium group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              ย้อนกลับ
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-600 to-pink-500">
                แบบฟอร์มสมัครฝึกงาน
              </span>
            </h1>
            <p className="text-slate-500 font-light text-lg">
              มาร่วมเป็นส่วนหนึ่งของทีม Me Prompt กรอกข้อมูลของคุณให้ครบถ้วนนะครับ
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            
            {/* 1. ข้อมูลส่วนตัว */}
            <Section title="ข้อมูลส่วนตัว">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="ชื่อจริง" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="ชื่อภาษาไทย" />
                <InputGroup label="นามสกุล" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="นามสกุลภาษาไทย" />
                <InputGroup label="อีเมล" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" />
                <InputGroup label="เบอร์โทรศัพท์" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="0xx-xxx-xxxx" />
              </div>
            </Section>

            {/* 2. การศึกษา */}
            <Section title="ประวัติการศึกษา">
              <label className="block text-sm font-semibold text-slate-700 mb-4 ml-1">
                ระดับการศึกษาปัจจุบัน / ล่าสุด <span className="text-pink-500">*</span>
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <EduCard 
                  icon={School} 
                  label="มัธยมปลาย" 
                  selected={formData.educationLevel === "highschool"} 
                  onClick={() => handleLevelChange("highschool")} 
                />
                <EduCard 
                  icon={Building2} 
                  label="ปวช. / ปวส." 
                  selected={formData.educationLevel === "vocational"} 
                  onClick={() => handleLevelChange("vocational")} 
                />
                <EduCard 
                  icon={GraduationCap} 
                  label="มหาวิทยาลัย" 
                  selected={formData.educationLevel === "university"} 
                  onClick={() => handleLevelChange("university")} 
                />
                <EduCard 
                  icon={Briefcase} 
                  label="จบการศึกษาแล้ว" 
                  selected={formData.educationLevel === "graduated"} 
                  onClick={() => handleLevelChange("graduated")} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-2xl border border-white/60">
                <InputGroup label={labels.school} name="university" value={formData.university} onChange={handleChange} required placeholder={labels.placeholderSchool} />
                <InputGroup label={labels.major} name="faculty" value={formData.faculty} onChange={handleChange} required placeholder={labels.placeholderMajor} />
                <InputGroup label="เกรดเฉลี่ยสะสม (GPA)" name="gpa" type="number" step="0.01" min="0" max="4.00" value={formData.gpa} onChange={handleChange} required placeholder="เช่น 3.50" />
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">
                    ตำแหน่งที่ต้องการสมัคร <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white cursor-pointer appearance-none"
                    >
                      <option value="">-- เลือกตำแหน่ง --</option>
                      {positions.length === 0 ? (
                        <option value="" disabled>กำลังโหลด...</option>
                      ) : (
                        positions.map((p) => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))
                      )}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* 3. เอกสารประกอบ */}
            <Section title="เอกสารประกอบการสมัคร">
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
                  Resume / CV (PDF) <span className="text-pink-500">*</span>
                </label>
                
                <label className={`group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-3xl cursor-pointer transition-all duration-300 overflow-hidden ${
                  resumeFile 
                    ? "border-emerald-400 bg-emerald-50/50" 
                    : "border-slate-300 bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-400"
                }`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
                    {resumeFile ? (
                      <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mb-3 shadow-sm">
                          <FileText size={32} />
                        </div>
                        <p className="text-sm text-emerald-700 font-bold mb-1">{resumeFile.name}</p>
                        <p className="text-xs text-emerald-500">คลิกเพื่อเปลี่ยนไฟล์</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-4 bg-white rounded-full mb-3 shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all">
                          <UploadCloud size={32} className="text-slate-400 group-hover:text-blue-500" />
                        </div>
                        <p className="text-sm text-slate-600 mb-1 font-medium">
                          <span className="text-blue-600 hover:underline">คลิกเพื่ออัปโหลด</span> หรือลากไฟล์มาวาง
                        </p>
                        <p className="text-xs text-slate-400">รองรับไฟล์ PDF (สูงสุด 5MB)</p>
                      </div>
                    )}
                  </div>
                  <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} required />
                </label>
              </div>

              <div className="space-y-6">
                <InputGroup label="Link Portfolio / GitHub (ถ้ามี)" name="portfolioUrl" type="url" value={formData.portfolioUrl} onChange={handleChange} placeholder="https://..." />
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">
                    ข้อความถึงทีมงาน (Cover Letter)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white placeholder:text-slate-400 resize-none"
                    placeholder="แนะนำตัวสั้นๆ หรือบอกเหตุผลที่อยากร่วมงานกับเรา..."
                  ></textarea>
                </div>
              </div>
            </Section>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-200/60">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : "bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 text-white hover:shadow-blue-500/40 hover:-translate-y-1 hover:brightness-110 active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> กำลังส่งข้อมูล...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> ยืนยันการสมัคร
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </motion.div>
    </div>
  );
}

// --- Helper Components ---

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-700">
    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <span className="w-1.5 h-6 bg-linear-to-b from-blue-500 to-pink-500 rounded-full"></span>
      {title}
    </h3>
    {children}
  </div>
);

const InputGroup = ({ label, required, ...props }: any) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-slate-700 ml-1">
      {label} {required && <span className="text-pink-500">*</span>}
    </label>
    <input
      {...props}
      required={required}
      className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 bg-white placeholder:text-slate-400"
    />
  </div>
);

const EduCard = ({ icon: Icon, label, selected, onClick }: any) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 border h-32 ${
      selected
        ? "border-blue-500 bg-blue-50/50 text-blue-700 ring-2 ring-blue-500/20 shadow-md transform -translate-y-1"
        : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:shadow-sm"
    }`}
  >
    <Icon size={28} className={selected ? "text-blue-600" : "text-slate-400"} />
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

export default function ApplyPage(props: any) {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-500" /></div>}>
        <ApplyFormContent />
      </Suspense>
    </Layout>
  );
}