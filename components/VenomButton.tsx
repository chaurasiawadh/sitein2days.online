"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Globe } from "lucide-react";

interface VenomButtonProps {
    href: string;
    className?: string;
}

function Particle({ mouseX, mouseY, i, isHovered }: any) {
    const springX = useSpring(mouseX, { damping: 15 + i * 2, stiffness: 200 - i * 20 });
    const springY = useSpring(mouseY, { damping: 15 + i * 2, stiffness: 200 - i * 20 });

    return (
        <motion.div
            className="absolute rounded-full bg-[#d4ff46] pointer-events-none"
            style={{
                left: springX,
                top: springY,
                x: "-50%",
                y: "-50%",
                width: isHovered ? Math.max(10, 35 - i * 5) : 0,
                height: isHovered ? Math.max(10, 35 - i * 5) : 0,
                opacity: isHovered ? 1 : 0,
            }}
        />
    );
}

export default function VenomButton({ href, className = "" }: VenomButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* SVG Filter Definition */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                    <filter id="venom-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block"
            >
                <div
                    style={{ filter: "url(#venom-goo)" }}
                    className="relative py-2 px-6"
                >
                    {/* Main Button Background */}
                    <div className="absolute inset-0 bg-[#d4ff46] rounded-2xl" />

                    {/* Drip Tail (multiple particles for smoother trail) */}
                    {[...Array(6)].map((_, i) => {
                        // Create springs inline to avoid hook violations, but actually 
                        // we should use a custom hook or just list them.
                        // However, we can use the same springX/springY with different delays or configurations
                        // if we were using animate.
                        // For simplicity in this single-file edit, I'll use a sequence of motion divs 
                        // that have slightly different spring behaviors.
                        return (
                            <Particle
                                key={i}
                                mouseX={mouseX}
                                mouseY={mouseY}
                                i={i}
                                isHovered={isHovered}
                            />
                        );
                    })}

                    {/* Button Content */}
                    <div className="relative z-20 flex items-center gap-3 text-black">
                        <Globe size={24} />
                        <div className="text-left leading-tight">
                            <div className="text-lg font-black">Website</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
