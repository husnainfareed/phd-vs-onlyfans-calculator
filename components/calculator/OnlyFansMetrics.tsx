"use client";

import { Camera } from "lucide-react";
import { RangeInput } from "../inputs/RangeInput";

interface OnlyFansMetricsProps {
  followers: number;
  setFollowers: (value: number) => void;
  contentComfort: number;
  setContentComfort: (value: number) => void;
  marketingSkills: number;
  setMarketingSkills: (value: number) => void;
  competitionLevel: number;
  setCompetitionLevel: (value: number) => void;
  projectedSubscribers: number;
}

export function OnlyFansMetrics({
  followers,
  setFollowers,
  contentComfort,
  setContentComfort,
  marketingSkills,
  setMarketingSkills,
  competitionLevel,
  setCompetitionLevel,
  projectedSubscribers,
}: OnlyFansMetricsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-pink-500">
        <Camera className="h-5 w-5" />
        <h3 className="font-semibold">OnlyFans Potential</h3>
      </div>

      <div className="space-y-4">
        <RangeInput
          label="Social Media Following"
          value={followers}
          onChange={setFollowers}
          min={1000}
          max={500000}
          step={1000}
          formatValue={(v) => `${v.toLocaleString()} followers`}
        />

        <RangeInput
          label="Content Comfort Level"
          value={contentComfort}
          onChange={setContentComfort}
          min={1}
          max={10}
          step={1}
          formatValue={(v) => `${v}/10 ${v >= 8 ? '🔥' : v >= 5 ? '😊' : '😳'}`}
        />

        <RangeInput
          label="Marketing Skills"
          value={marketingSkills}
          onChange={setMarketingSkills}
          min={1}
          max={10}
          step={1}
          formatValue={(v) => `${v}/10 ${v >= 8 ? '🚀' : v >= 5 ? '📈' : '📉'}`}
        />

        <RangeInput
          label="Competition Level in Your Niche"
          value={competitionLevel}
          onChange={setCompetitionLevel}
          min={1}
          max={10}
          step={1}
          formatValue={(v) => `${v}/10 ${v >= 8 ? '⚔️' : v >= 5 ? '🤼' : '👌'}`}
        />

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            Projected Subscribers: <span className="font-medium">{projectedSubscribers.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}