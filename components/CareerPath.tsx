"use client";

import { Brain, DollarSign } from "lucide-react";
import { CareerImage } from "@/components/ui/career-image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface CareerPathProps {
  type: "phd" | "onlyfans";
  selected?: boolean;
  onClick?: () => void;
}

export function CareerPath({ type, selected, onClick }: CareerPathProps) {
  const isPhD = type === "phd";
  const color = isPhD ? "text-purple-500" : "text-pink-500";
  const borderColor = isPhD ? "border-purple-500" : "border-pink-500";
  const bgHover = isPhD ? "hover:bg-purple-50" : "hover:bg-pink-50";
  const Icon = isPhD ? Brain : DollarSign;
  const title = isPhD ? "Academic Excellence" : "Content Creation";
  const subtitle = isPhD ? "The Traditional Path" : "The Modern Path";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className={`p-6 cursor-pointer ${bgHover} transition-colors`}
        onClick={onClick}
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <motion.div
              whileHover={{ rotate: [-5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <CareerImage
                type={type}
                className={`w-32 h-32 border-4 ${borderColor} shadow-lg`}
              />
            </motion.div>
          </div>

          <div className="text-center space-y-2">
            <div className={`flex items-center justify-center gap-2 ${color} font-semibold text-lg`}>
              <Icon className="w-5 h-5" />
              <h3>{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}