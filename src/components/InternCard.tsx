"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FolderKanban } from "lucide-react";
import { Intern } from "@/types/intern";

const DEFAULT_AVATAR = "/image/default-avatar.svg";

interface InternCardProps {
    intern: Intern;
    onOpenModal?: (url: string) => void;
}

export default function InternCard({ intern, onOpenModal }: InternCardProps) {
    const [imgSrc, setImgSrc] = useState<string>(
        intern.avatar || DEFAULT_AVATAR
    );

    const displayName =
        intern.name.display || `${intern.name.first} ${intern.name.last}`;

    const portfolioUrl = intern.portfolioSlug
        ? `https://portfolio.example.com/${intern.portfolioSlug}`
        : null;

    const instagramUrl = intern.contact?.email
        ? `https://instagram.com/${intern.contact.email}`
        : null;

    const githubUrl = intern.resume?.links?.find((link) =>
        link.label.toLowerCase().includes("github")
    )?.url;

    return (
        <div className="relative aspect-[9/12] rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group">
            <Image
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={imgSrc}
                alt={displayName}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                onError={() => setImgSrc(DEFAULT_AVATAR)}
            />

            {/* Hover overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm text-white transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-white mb-1 truncate">
                    {displayName}
                </h3>
                <p className="text-sm font-medium text-blue-300 mb-4 truncate">
                    {intern.major || "นักศึกษาฝึกงาน"}
                </p>

                <div className="flex justify-center gap-5 mt-4">
                    {instagramUrl && (
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                            aria-label={`${displayName} Instagram`}
                        >
                            <FaInstagram size={22} />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                            aria-label={`${displayName} GitHub`}
                        >
                            <FaGithub size={22} />
                        </a>
                    )}
                    {portfolioUrl && onOpenModal && (
                        <button
                            onClick={() => onOpenModal(portfolioUrl)}
                            className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                            aria-label={`${displayName} Portfolio`}
                        >
                            <FolderKanban size={22} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
