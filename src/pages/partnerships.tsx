import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import Layout from "@/components/Layout";
import CardSection_partnership from "@/container/Partnerships/CardSection_partnership";
import Product_Project from "@/container/Partnerships/Product_Project";

export default function PartnershipsPage() {
  return (
    <Layout>
      {/* ส่วนที่ 1: Hero (ส่วนหัวสีฟ้า-ม่วง) */}
      <section className="py-24 md:py-32 text-white bg-linear-to-r from-cyan-400 via-blue-600 to-purple-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            พันธมิตรของเรา
          </h1>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            เราร่วมมือกับสถาบันการศึกษาชั้นนำมากมาย
          </p>
        </div>
      </section>

      {/* ส่วนที่ 2: แสดงผลการ์ดโลโก้ (CS, IS, MT) */}
      <CardSection_partnership />

      {/* ส่วนที่ 3: แสดงผลโปรเจค (AI Workshop, etc.) */}
      <Product_Project />
      
    </Layout>
  );
}