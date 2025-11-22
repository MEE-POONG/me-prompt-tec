import { useState } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaLine,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import * as React from "react";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  type AlertDialogPopupProps,
} from "@/components/animate-ui/components/base/alert-dialog";
import { Button } from "@/components/ui/Button";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

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
    setLoading(true); // เริ่มหมุน spinner

    try {
      const res = await fetch("/api/Contact/contactmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "website",
        }),
      });

      const data = await res.json();
      console.log(data);

      setIsSuccess(res.ok); // true/false ตาม res.ok
      setOpen(true); // เปิด dialog

      if (res.ok) {
        setForm({ name: "", email: "", phone: "", subject: "", message: "" }); // ล้างฟอร์ม
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setOpen(true);
    } finally {
      setLoading(false); // ปิด spinner
    }
  };

  return (
    <section className="pb-20 bg-linear-to-bl from-lime-400 via-blue-600 to-indigo-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
          {/* ===== ส่วนข้อมูลติดต่อ (ซ้าย) ===== */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              ข้อมูลการติดต่อ
            </h2>
            {/* (ข้อมูลติดต่อของคุณถูกต้องแล้ว) */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-yellow-500" />
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:info@meprompt.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@meprompt.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-yellow-500" />
                <div>
                  <strong>Phone:</strong>
                  <br />
                  <span>044-003463 (ฝ่ายสนับสนุน)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-yellow-500" />
                <div>
                  <strong>Address:</strong>
                  <br />
                  <span>
                    606/3 ม.5 ต.บ้านเกาะ อ.เมืองนครราชสีมา จ.นครราชสีมา <br />
                    Nakhon Ratchasima, Thailand, Nakhon Ratchasima
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800">
              ช่องทางโซเชียล
            </h2>
            {/* (Social Links ของคุณถูกต้องแล้ว) */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/meprompttecnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
              >
                <FaDiscord className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
              >
                <FaLine className="text-4xl" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              ส่งข้อความถึงเรา
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                    placeholder="ชื่อ-นามสกุล"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    อีเมล
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                    placeholder="เบอร์โทร"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    หัวข้อ
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                    placeholder="สอบถามเรื่องอะไร?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                    placeholder="รายละเอียด..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <AlertDialog open={open} onOpenChange={setOpen}>
                  <AlertDialogPopup className="sm:max-w-[425px]">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        {isSuccess ? "ส่งข้อความสำเร็จ" : "เกิดข้อผิดพลาด"}
                      </AlertDialogTitle>

                      <AlertDialogDescription>
                        {isSuccess
                          ? "ขอบคุณที่ติดต่อเรา!"
                          : "โปรดลองใหม่อีกครั้งภายหลัง"}
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogAction onClick={() => setOpen(false)}>
                        ปิด
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogPopup>
                </AlertDialog>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500 transition-all flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading && <span className="loader" />} {/* ใส่ spinner */}
                    ส่งข้อความ
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
