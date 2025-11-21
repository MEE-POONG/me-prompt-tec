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

export default function Home() {
  const permissionRef = useRef<HTMLDivElement>(null);

  const scrollToPermission = () => {
    permissionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Layout>
        <HeroSection onScrollToNextSection={scrollToPermission} />
      <motion.div
        ref={permissionRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <PermissionSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TeamSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <FeaturedProjectsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <InternshipCTASection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <PartnersSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <NewsletterSection />
      </motion.div>
    </Layout>
  );
}
