import Layout from "@/components/Layout";
import { Card_Contact } from "@/container/Contact/Card_Contact";
import Herosection_contact from "@/container/Contact/Herosection_contact";
import MapSection_Contact from "@/container/Contact/MapSection_Contact";
import { motion } from "framer-motion";
import React from "react";

export default function ContactPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <Layout>
      <Herosection_contact />
      <Card_Contact from={undefined} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <MapSection_Contact />
      </motion.div>
    </Layout>
  );
}
