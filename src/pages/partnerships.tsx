import Layout from "@/components/Layout";
import CardSection_partnership from "@/container/Partnerships/CardSection_partnership";

export default function PartnershipsPage() {
  return (
    <Layout>
      <section className="py-24 md:py-32 text-white bg-linear-to-r from-cyan-400 via-blue-600 to-purple-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            พันธมิตรของเรา
          </h1>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            เราร่วมมือกับสถาบันการศึกษาและองค์กรชั้นนำมากมาย
          </p>
        </div>
      </section>
      <CardSection_partnership />
    </Layout>
  );
}
