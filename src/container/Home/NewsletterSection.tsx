import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      // ✅ ให้ยิงไปที่ /api/newsletter/subscribe ตามที่เราตั้ง backend ไว้
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "website" }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail(""); // ล้างช่อง
      } else {
        setStatus("error");
        setMessage(
          data.message || data.error || "ไม่สามารถสมัครรับข่าวสารได้ กรุณาลองใหม่อีกครั้ง"
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage("ไม่สามารถเชื่อมต่อ Server ได้");
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* การ์ดฟอร์มสไตล์ที่เราอยากได้ */}
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#f5e8ff] via-white to-[#ffe6f7] shadow-[0_22px_70px_rgba(15,23,42,0.18)]">
          {/* แสงเบา ๆ */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-fuchsia-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative px-6 py-10 md:px-14 md:py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500">
              รับข่าวสารล่าสุดจากเรา
            </h2>

            <p className="text-sm md:text-base text-slate-700">
              สมัครรับจดหมายข่าวเพื่อไม่พลาดข้อมูลอัปเดตเกี่ยวกับเทคโนโลยีและบริการใหม่ ๆ
              จาก Me Prompt
            </p>

            {/* === ถ้าส่งสำเร็จ แสดงการ์ด success แทนฟอร์ม === */}
            {status === "success" ? (
              <div className="mt-8 bg-white/85 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100 shadow-lg">
                <div className="flex flex-col items-center gap-3 text-emerald-600">
                  <CheckCircle2 size={42} />
                  <h3 className="text-lg md:text-xl font-bold">
                    สมัครรับข่าวสารสำเร็จ!
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    ขอบคุณที่ติดตามเรา ข่าวสารดี ๆ จะส่งถึงคุณเร็ว ๆ นี้
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setMessage("");
                    }}
                    className="mt-2 text-xs md:text-sm text-blue-500 hover:underline"
                  >
                    สมัครอีเมลอื่นเพิ่ม
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* === ฟอร์มปกติ === */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto"
                >
                  <div className="w-full sm:flex-1 relative">
                    <input
                      type="email"
                      required
                      placeholder="กรอกอีเมลของคุณ"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full rounded-full border border-sky-200 bg-white/90 px-5 py-3 text-sm md:text-base text-slate-800 shadow-md shadow-sky-100/70 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading" || !email}
                    className="w-full sm:w-auto rounded-full px-8 py-3 text-sm md:text-base font-semibold text-white bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-300/70 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[110px]"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      "สมัคร"
                    )}
                  </button>
                </form>

                {/* error message ใต้ฟอร์ม */}
                {status === "error" && (
                  <div className="mt-3 flex items-center justify-center gap-2 text-xs md:text-sm text-red-500 font-medium">
                    <AlertCircle size={16} /> {message}
                  </div>
                )}
              </>
            )}

            {status !== "success" && (
              <p className="mt-4 text-[11px] md:text-xs text-slate-500">
                เราจะไม่ส่งสแปม และเคารพความเป็นส่วนตัวของคุณ
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
