import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import HeroBanner_Internship from "@/container/Internship/HeroBanner_Internship";
import OpenPositions_Internship from "@/container/Internship/OpenPositions_Internship";
import ApplicationProcess_Internship from "@/container/Internship/ApplicationProcess_Internship";
import Allprofiles from "@/container/Internship/Allprofiles";
import { motion } from "framer-motion";
export default function Internship() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <Layout>
      <Head>
        <title>Internship Program | โปรแกรมฝึกงาน</title>
        <meta name="description" content="เข้าร่วมโปรแกรมฝึกงานกับเรา" />
      </Head>
      <HeroBanner_Internship />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Allprofiles />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <OpenPositions_Internship />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ApplicationProcess_Internship />
      </motion.div>
    </Layout>
  );
}
