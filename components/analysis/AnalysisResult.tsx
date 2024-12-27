"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WinnerDisplay } from "./WinnerDisplay";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-8">
      <WinnerDisplay winner={winner} score={winnerScore} />

      {scoreDifference < 10 && (
        <div className="text-center">
          <Badge variant="secondary">Close Call! Only {scoreDifference.toFixed(1)}% difference</Badge>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h4 className="font-semibold text-purple-500 mb-2 flex items-center justify-between">
            PhD Path
            <Badge variant="outline">{Math.round(phdScore)}%</Badge>
          </h4>
          <ScrollArea className="h-[200px] pr-4">
            <ul className="space-y-2">
              {analysis.phd.map((point, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold text-pink-500 mb-2 flex items-center justify-between">
            OnlyFans Path
            <Badge variant="outline">{Math.round(ofScore)}%</Badge>
          </h4>
          <ScrollArea className="h-[200px] pr-4">
            <ul className="space-y-2">
              {analysis.onlyfans.map((point, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span className="text-pink-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}