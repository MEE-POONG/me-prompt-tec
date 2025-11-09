import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import HeroBanner_Internship from "@/container/Internship/HeroBanner_Internship";
import OpenPositions_Internship from "@/container/Internship/OpenPositions_Internship";
import ApplicationProcess_Internship from "@/container/Internship/ApplicationProcess_Internship";

export default function Internship() {
  return (
    <Layout>
      <Head>
        <title>Internship Program | โปรแกรมฝึกงาน</title>
        <meta name="description" content="เข้าร่วมโปรแกรมฝึกงานกับเรา" />
      </Head>
      <HeroBanner_Internship />
      <OpenPositions_Internship />
      <ApplicationProcess_Internship />
    </Layout>
  );
}
