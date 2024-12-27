"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CareerImageProps {
  type: "phd" | "onlyfans";
  className?: string;
}

const CAREER_IMAGES = {
  phd: "/phd-lad.jpg",
  onlyfans: "/zara-onlyfans.png",
} as const;

export function CareerImage({ type, className }: CareerImageProps) {
  return (
    <div className={cn("relative rounded-full overflow-hidden", className)}>
      <Image
        src={CAREER_IMAGES[type]}
        alt={type === "phd" ? "Academic Path" : "Content Creator Path"}
        width={200}
        height={200}
        className="object-cover"
        priority
      />
    </div>
  );
}