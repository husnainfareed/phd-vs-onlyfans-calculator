"use client";

import { Book } from "lucide-react";
import { RangeInput } from "../inputs/RangeInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AcademicMetricsProps {
  stipend: number;
  setStipend: (value: number) => void;
  yearsLeft: number;
  setYearsLeft: (value: number) => void;
  stressLevel: number;
  setStressLevel: (value: number) => void;
  publicationCount: number;
  setPublicationCount: (value: number) => void;
}

export function AcademicMetrics({
  stipend,
  setStipend,
  yearsLeft,
  setYearsLeft,
  stressLevel,
  setStressLevel,
  publicationCount,
  setPublicationCount,
}: AcademicMetricsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-purple-500">
        <Book className="h-5 w-5" />
        <h3 className="font-semibold">Current Academic Situation</h3>
      </div>

      <div className="space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Annual Stipend"
                  value={stipend}
                  onChange={setStipend}
                  min={20000}
                  max={45000}
                  step={1000}
                  formatValue={(v) => `$${v.toLocaleString()} ${v >= 40000 ? '🎉 Living Large' : v >= 30000 ? '☕ Coffee Money' : '🍜 Ramen Budget'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "Instant noodles" to "Organic produce"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Years Left in Program"
                  value={yearsLeft}
                  onChange={setYearsLeft}
                  min={1}
                  max={6}
                  step={1}
                  formatValue={(v) => `${v} year${v === 1 ? '' : 's'} ${v <= 2 ? '🏃 Sprint' : v <= 4 ? '🚶 Marathon' : '🐌 Eternal'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "Almost there!" to "What year is it?"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Current Stress Level"
                  value={stressLevel}
                  onChange={setStressLevel}
                  min={1}
                  max={10}
                  step={1}
                  formatValue={(v) => `${v}/10 ${v >= 8 ? '🤯 Meltdown' : v >= 5 ? '😅 Hanging in' : '😌 Zen'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "Meditation master" to "Coffee IV required"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <RangeInput
                  label="Publications This Year"
                  value={publicationCount}
                  onChange={setPublicationCount}
                  min={0}
                  max={10}
                  step={1}
                  formatValue={(v) => `${v} paper${v === 1 ? '' : 's'} ${v >= 5 ? '🚀 Prolific' : v >= 2 ? '📚 Steady' : '🌱 Growing'}`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>From "What's a journal?" to "Nature on speed dial"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}