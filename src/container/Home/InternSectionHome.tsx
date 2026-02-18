"use client";

import React, { useState, useEffect } from "react";
import { X, Smartphone, Monitor } from "lucide-react";
import { Intern } from "@/types/intern";
import InternCard from "@/components/InternCard";

export default function InternSectionHome() {
    const [interns, setInterns] = useState<Intern[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

    // Fetch interns
    useEffect(() => {
        const fetchInterns = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/interns");
                const data = await res.json();
                if (data.success) {
                    setInterns(data.data.interns);
                } else {
                    setError("ไม่สามารถดึงข้อมูลได้");
                }
            } catch (err) {
                console.error(err);
                setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
            } finally {
                setLoading(false);
            }
        };
        fetchInterns();
    }, []);

    // Group by gen
    const groupedInterns: Record<number, Intern[]> = {};
    interns
        .sort(
            (a, b) =>
                (b.gen || 0) - (a.gen || 0) ||
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .forEach((intern) => {
            const gen = intern.gen || 0;
            if (!groupedInterns[gen]) groupedInterns[gen] = [];
            groupedInterns[gen].push(intern);
        });

    const genKeys = Object.keys(groupedInterns)
        .map(Number)
        .sort((a, b) => b - a);

    // Get only the latest gen
    const latestGen = genKeys[0];
    const latestGenInterns = latestGen ? groupedInterns[latestGen] : [];

    const openModal = (url: string | null) => setModalUrl(url);
    const closeModal = () => setModalUrl(null);

    if (loading) {
        return (
            <div className="min-h-[200px] flex items-center justify-center bg-white">
                <style jsx>{`
          @keyframes tech-spin {
            0% {
              transform: rotate(0deg);
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: rotate(360deg);
              opacity: 0.6;
            }
          }
        `}</style>
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-300"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-[tech-spin_1.2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        );
    }

    if (error || latestGenInterns.length === 0) {
        return null; // Don't show section if there's an error or no interns
    }

    return (
        <section className="py-20 bg-white relative">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 from-35% via-violet-700 to-red-400 bg-clip-text text-transparent">
                    นักศึกษาฝึกงาน (Intern)
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    บุคลากรมืออาชีพที่พร้อมขับเคลื่อนโปรเจกต์ของคุณให้สำเร็จ
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div>
                    <div className="relative flex items-center my-8">
                        <div className="grow border-t border-blue-600"></div>
                        <span className="mx-4 text-xl font-bold bg-white px-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-red-400">
                            นักศึกษาฝึกงาน Gen {latestGen}
                        </span>
                        <div className="grow border-t border-blue-600"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {latestGenInterns.map((intern) => (
                            <InternCard
                                key={intern.id}
                                intern={intern}
                                onOpenModal={openModal}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <div className="relative z-10 w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-xl flex flex-col">
                        <div className="flex justify-between items-center p-3 border-b bg-gray-50 rounded-t-lg">
                            <span className="text-gray-600 text-sm truncate hidden md:block">
                                {modalUrl}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode("desktop")}
                                    className={`p-2 rounded-md ${viewMode === "desktop"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                        } transition-colors`}
                                    aria-label="Desktop View"
                                >
                                    <Monitor size={18} />
                                </button>
                                <button
                                    onClick={() => setViewMode("mobile")}
                                    className={`p-2 rounded-md ${viewMode === "mobile"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                        } transition-colors`}
                                    aria-label="Mobile View"
                                >
                                    <Smartphone size={18} />
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-900 transition-colors ml-2"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-full p-4 bg-gray-300 rounded-b-lg overflow-auto flex justify-center">
                            <iframe
                                src={modalUrl}
                                className={`h-full rounded-lg shadow-xl transition-all duration-300 ease-in-out ${viewMode === "desktop" ? "w-full" : "w-[375px] max-w-full"
                                    }`}
                                title="Portfolio Preview"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
