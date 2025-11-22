import { useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSection from "@/container/Home/HeroSection";
import ServicesSection from "@/container/Home/ServicesSection";
import FeaturedProjectsSection from "@/container/Home/FeaturedProjectsSection";
import InternshipCTASection from "@/container/Home/InternshipCTASection";
import PartnersSection from "@/container/Home/PartnersSection";
import NewsletterSection from "@/container/Home/NewsletterSection";
import PermissionSection from "@/container/Home/PermissionSection";
import TeamSection from "@/container/Home/TeamSection";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  const permissionRef = useRef<HTMLDivElement>(null);

  const scrollToPermission = () => {
    permissionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <HeroSection onScrollToNextSection={scrollToPermission} />

      <SectionWrapper>
        <div ref={permissionRef}>
          <PermissionSection />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <TeamSection />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>

      <SectionWrapper>
        <FeaturedProjectsSection />
      </SectionWrapper>

      <SectionWrapper>
        <InternshipCTASection />
      </SectionWrapper>

      <SectionWrapper>
        <PartnersSection />
      </SectionWrapper>

      <SectionWrapper>
        <NewsletterSection />
      </SectionWrapper>
    </Layout>
  );
}