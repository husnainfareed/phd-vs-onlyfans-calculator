"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const FACTORS = [
  {
    name: "Financial Security",
    phd: "Long-term stability, but initial struggle",
    of: "Potentially high short-term, uncertain long-term",
  },
  {
    name: "Career Growth",
    phd: "Clear academic progression",
    of: "Entertainment industry opportunities",
  },
  {
    name: "Work-Life Balance",
    phd: "High pressure, deadline-driven",
    of: "Flexible schedule, but constant content creation",
  },
  {
    name: "Social Impact",
    phd: "Contributing to human knowledge",
    of: "Entertainment and personal connection",
  },
  {
    name: "Future Opportunities",
    phd: "Academia, research, industry",
    of: "Media, entertainment, influencing",
  },
];

export default function DecisionMatrix() {
  const [weights, setWeights] = useState(FACTORS.map(() => 5));
  const [phdScores] = useState([7, 8, 4, 9, 8]);
  const [ofScores] = useState([8, 6, 7, 4, 6]);

  const calculateScore = (scores) => {
    return scores.reduce((acc, score, i) => acc + score * weights[i], 0) / 
           weights.reduce((a, b) => a + b, 0);
  };

  const phdTotal = calculateScore(phdScores);
  const ofTotal = calculateScore(ofScores);

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {FACTORS.map((factor, i) => (
          <div key={factor.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{factor.name}</span>
              <span className="text-sm text-muted-foreground">
                Importance: {weights[i]}/10
              </span>
            </div>
            <Slider
              value={[weights[i]]}
              onValueChange={(value) => {
                const newWeights = [...weights];
                newWeights[i] = value[0];
                setWeights(newWeights);
              }}
              min={1}
              max={10}
              step={1}
            />
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>PhD: {factor.phd}</div>
              <div>OF: {factor.of}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4 border-t">
        <h3 className="font-semibold text-lg">Final Score</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>PhD Path</span>
            <span>{Math.round(phdTotal * 10)}%</span>
          </div>
          <Progress value={phdTotal * 10} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>OnlyFans Path</span>
            <span>{Math.round(ofTotal * 10)}%</span>
          </div>
          <Progress value={ofTotal * 10} className="h-2" />
        </div>
      </div>
    </div>
  );
}