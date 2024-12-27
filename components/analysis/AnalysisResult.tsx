"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WinnerDisplay } from "./WinnerDisplay";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface AnalysisResultProps {
  phdScore: number;
  ofScore: number;
  analysis: {
    phd: string[];
    onlyfans: string[];
  };
}

export function AnalysisResult({ phdScore, ofScore, analysis }: AnalysisResultProps) {
  const winner = phdScore > ofScore ? "PhD" : "OnlyFans";
  const winnerScore = phdScore > ofScore ? phdScore : ofScore;
  const scoreDifference = Math.abs(phdScore - ofScore);

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WinnerDisplay winner={winner} score={winnerScore} />

      {scoreDifference < 10 && (
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <Badge variant="secondary">Close Call! Only {scoreDifference.toFixed(1)}% difference</Badge>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4">
            <h4 className="font-semibold text-purple-500 mb-2 flex items-center justify-between">
              PhD Path
              <Badge variant="outline">{Math.round(phdScore)}%</Badge>
            </h4>
            <ScrollArea className="h-[200px] pr-4">
              <ul className="space-y-2">
                {analysis.phd.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-sm flex items-start gap-2"
                  >
                    <span className="text-purple-500">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollArea>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4">
            <h4 className="font-semibold text-pink-500 mb-2 flex items-center justify-between">
              OnlyFans Path
              <Badge variant="outline">{Math.round(ofScore)}%</Badge>
            </h4>
            <ScrollArea className="h-[200px] pr-4">
              <ul className="space-y-2">
                {analysis.onlyfans.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-sm flex items-start gap-2"
                  >
                    <span className="text-pink-500">•</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollArea>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}