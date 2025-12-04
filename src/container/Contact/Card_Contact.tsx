import { useState } from "react";
import { FaFacebook, FaYoutube, FaDiscord, FaLine } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";

import {
  AlertDialog,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  type AlertDialogPopupProps,
} from "@/components/animate-ui/components/base/alert-dialog";

interface BaseAlertDialogDemoProps {
  from: AlertDialogPopupProps["from"];
}

export const Card_Contact = ({ from }: BaseAlertDialogDemoProps) => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/Contact/contactmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "website" }),
      });

      setIsSuccess(res.ok);
      setOpen(true);

      if (res.ok) {
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row"
      >
        {/* ===== ฝั่งซ้าย: ข้อมูลติดต่อ (Pastel Theme) ===== */}
        {/* เปลี่ยน BG เป็นสีพาสเทลไล่เฉด */}
        <div className="w-full md:w-[40%] bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-10 md:p-14 relative overflow-hidden">
          
          {/* Decor: วงกลมฟุ้งๆ สีสดขึ้นนิดหน่อยให้เห็นชัดบนพื้นขาว */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl -ml-16 -mb-16" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              {/* เปลี่ยนสีตัวหนังสือเป็นสีเข้ม (Slate-800) */}
              <h3 className="text-3xl font-bold mb-2 text-slate-800">ข้อมูลติดต่อ</h3>
              <p className="text-slate-600 font-light mb-10">
                สอบถามข้อมูลเพิ่มเติม หรือต้องการใบเสนอราคา?
              </p>

              <div className="space-y-8">
                <ContactItem icon={Mail} title="Email" content="info@meprompt.com" href="mailto:info@meprompt.com" />
                <ContactItem icon={Phone} title="Phone" content="044-003463 (Support)" />
                <ContactItem icon={MapPin} title="Head Office" content="606/3 ม.5 ต.บ้านเกาะ อ.เมืองนครราชสีมา จ.นครราชสีมา 30000" />
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">Follow Us</p>
              <div className="flex gap-3">
                <SocialBtn icon={FaFacebook} href="https://www.facebook.com/meprompttecnology/" color="text-blue-600 hover:bg-blue-600 hover:text-white" />
                <SocialBtn icon={FaLine} href="#" color="text-green-500 hover:bg-green-500 hover:text-white" />
                <SocialBtn icon={FaYoutube} href="#" color="text-red-500 hover:bg-red-500 hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== ฝั่งขวา: ฟอร์ม (White) ===== */}
        <div className="w-full md:w-[60%] p-8 md:p-14 bg-white/60">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">ส่งข้อความถึงเรา</h3>
            <p className="text-slate-500 text-sm">กรอกข้อมูลด้านล่าง แล้วทีมงานจะรีบติดต่อกลับไปครับ</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup id="name" label="ชื่อ-นามสกุล" placeholder="สมชาย ใจดี" value={form.name} onChange={handleChange} required />
              <InputGroup id="phone" label="เบอร์โทรศัพท์" placeholder="081-234-5678" value={form.phone} onChange={handleChange} />
            </div>
            <InputGroup id="email" label="อีเมล" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} required />
            <InputGroup id="subject" label="หัวข้อ" placeholder="ต้องการปรึกษาเรื่อง..." value={form.subject} onChange={handleChange} required />
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">ข้อความ</label>
              <textarea
                id="message"
                rows={4}
                placeholder="รายละเอียดเพิ่มเติม..."
                className="w-full px-5 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-slate-700 placeholder:text-slate-400"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-4 rounded-xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
              <span>{loading ? "กำลังส่ง..." : "ส่งข้อความ"}</span>
            </button>
          </form>
        </div>
      </motion.div>

      {/* Alert Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogPopup className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle className={isSuccess ? "text-green-600" : "text-red-600"}>
              {isSuccess ? "ส่งข้อความสำเร็จ!" : "เกิดข้อผิดพลาด"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isSuccess
                ? "ขอบคุณที่ติดต่อเรา ทีมงานจะรีบตอบกลับโดยเร็วที่สุดครับ"
                : "ไม่สามารถส่งข้อความได้ในขณะนี้ โปรดลองใหม่อีกครั้ง"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpen(false)} className="bg-slate-900 text-white rounded-lg">
              ตกลง
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </div>
  );
};

// Helper Components (ปรับให้รองรับ Pastel Theme)
const InputGroup = ({ id, label, type = "text", ...props }: any) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
    <input
      id={id}
      type={type}
      className="w-full px-5 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-700 placeholder:text-slate-400"
      {...props}
    />
  </div>
);

const ContactItem = ({ icon: Icon, title, content, href }: any) => (
  <div className="flex items-start gap-4 group">
    {/* ปรับสีไอคอนให้เด่นบนพื้นสว่าง */}
    <div className="p-3 bg-white shadow-sm rounded-xl text-violet-600 group-hover:scale-110 transition-transform duration-300">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{title}</p>
      {href ? (
        <a href={href} className="text-base md:text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors">{content}</a>
      ) : (
        <p className="text-base md:text-lg font-medium leading-relaxed text-slate-800">{content}</p>
      )}
    </div>
  </div>
);

const SocialBtn = ({ icon: Icon, href, color }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // ปรับปุ่ม Social ให้มีพื้นหลังขาว แล้ว Hover เปลี่ยนสี
    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 ${color}`}
  >
    <Icon size={18} />
  </a>
);