"use client";

import { Camera } from "lucide-react";
import { RangeInput } from "../inputs/RangeInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OnlyFansMetricsProps {
  followers: number;
  setFollowers: (value: number) => void;
  contentComfort: number;
  setContentComfort: (value: number) => void;
  attractiveness: number;
  setAttractiveness: (value: number) => void;
  competitionLevel: number;
  setCompetitionLevel: (value: number) => void;
  projectedSubscribers: number;
}

export function OnlyFansMetrics({
  followers,
  setFollowers,
  contentComfort,
  setContentComfort,
  attractiveness,
  setAttractiveness,
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Social Media Following"
                  value={followers}
                  onChange={setFollowers}
                  min={1000}
                  max={500000}
                  step={1000}
                  formatValue={(v) => `${v.toLocaleString()} ${v >= 100000 ? '🦋 Influencer Status' : v >= 50000 ? '🌟 Rising Star' : '🌱 Growing'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "My mom follows me" to "Breaking the internet"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Content Comfort Level"
                  value={contentComfort}
                  onChange={setContentComfort}
                  min={1}
                  max={10}
                  step={1}
                  formatValue={(v) => `${v}/10 ${v >= 8 ? '🔥 Spicy' : v >= 5 ? '😊 Cozy' : '😳 Shy'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "Fully clothed book reviews" to "Spicy cooking tutorials"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Self-Rated Attractiveness"
                  value={attractiveness}
                  onChange={setAttractiveness}
                  min={1}
                  max={10}
                  step={1}
                  formatValue={(v) => `${v}/10 ${v >= 8 ? '✨ Supermodel Status' : v >= 5 ? '💫 Instagram Ready' : '🌟 Work in Progress'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "I just woke up" to "Is that a Kardashian?"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Competition Level in Your Niche"
                  value={competitionLevel}
                  onChange={setCompetitionLevel}
                  min={1}
                  max={10}
                  step={1}
                  formatValue={(v) => `${v}/10 ${v >= 8 ? '⚔️ Battlefield' : v >= 5 ? '🤼 Crowded' : '👌 Unique'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "One of a kind" to "Everyone and their cat"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            Projected Subscribers: <span className="font-medium">{projectedSubscribers.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}