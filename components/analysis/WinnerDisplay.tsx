"use client";

import { motion } from "framer-motion";
import { GraduationCap, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WinnerDisplayProps {
  winner: "PhD" | "OnlyFans";
  score: number;
}

export function WinnerDisplay({ winner, score }: WinnerDisplayProps) {
  const Icon = winner === "PhD" ? GraduationCap : Camera;
  const color = winner === "PhD" ? "text-purple-500" : "text-pink-500";
  const bgColor = winner === "PhD" ? "bg-purple-100" : "bg-pink-100";

  return (
    <motion.div
      className="text-center space-y-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold">Recommended Path</h3>

      <motion.div
        className={`mx-auto w-24 h-24 rounded-full ${bgColor} flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
      >
        <Icon className={`w-12 h-12 ${color}`} />
      </motion.div>

      <div>
        <h4 className={`text-xl font-semibold ${color}`}>
          {winner} Path
        </h4>
        <div className="mt-2 flex justify-center gap-2">
          <Badge variant="outline">Confidence Score: {Math.round(score)}%</Badge>
        </div>
      </div>
    </motion.div>
  );
}