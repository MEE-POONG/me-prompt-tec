import Layout from "@/components/Layout";
import About_HrSection from "@/container/About/About_HrSection";
import GoalSection from "@/container/About/GoalSection";
import NewsletterSection from "@/container/About/NewsletterSection";
import PermissionSection from "@/container/About/PermissionSection";
import ServicesSection from "@/container/Home/ServicesSection";
import React from "react";

export default function about() {
  return (
    <Layout>
      <About_HrSection />
      <PermissionSection />
      <GoalSection />
      <ServicesSection />
      <NewsletterSection />
    </Layout>
  );
}
