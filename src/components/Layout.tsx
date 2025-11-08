/**
 * Layout Component
 * ME PROMPT TECHNOLOGY
 */

import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "มีพร้อมท์เทคโนโลยี - ME PROMPT TECHNOLOGY",
  description = "บริษัทพัฒนาซอฟต์แวร์และโซลูชันดิจิทัล ผู้เชี่ยวชาญด้าน Web & Mobile Development, AI และ Automation",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main Content */}
        <main className="grow">{children}</main>

        <Footer />
      </div>
    </>
  );
}
