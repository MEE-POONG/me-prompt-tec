/**
 * Homepage
 * ME PROMPT TECHNOLOGY
 */

import { useRef } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/container/Home/HeroSection";
import ServicesSection from "@/container/Home/ServicesSection";
import FeaturedProjectsSection from "@/container/Home/FeaturedProjectsSection";
import InternshipCTASection from "@/container/Home/InternshipCTASection";
import PartnersSection from "@/container/Home/PartnersSection";
import NewsletterSection from "@/container/Home/NewsletterSection";
import PermissionSection from "@/container/Home/PermissionSection";
import TeamSection from "@/container/Home/TeamSection";

export default function Home() {
  const permissionRef = useRef<HTMLDivElement>(null);

  const scrollToPermission = () => {
    permissionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <HeroSection onScrollToNextSection={scrollToPermission} />
      <PermissionSection ref={permissionRef} />
      <TeamSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <InternshipCTASection />
      <PartnersSection />
      <NewsletterSection />
    </Layout>
  );
}
