"use client";

import { Book } from "lucide-react";
import { RangeInput } from "../inputs/RangeInput";

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
        <RangeInput
          label="Annual Stipend"
          value={stipend}
          onChange={setStipend}
          min={20000}
          max={45000}
          step={1000}
          formatValue={(v) => `$${v.toLocaleString()}`}
        />

        <RangeInput
          label="Years Left in Program"
          value={yearsLeft}
          onChange={setYearsLeft}
          min={1}
          max={6}
          step={1}
          formatValue={(v) => `${v} year${v === 1 ? '' : 's'}`}
        />

        <RangeInput
          label="Current Stress Level"
          value={stressLevel}
          onChange={setStressLevel}
          min={1}
          max={10}
          step={1}
          formatValue={(v) => `${v}/10 ${v >= 8 ? '😰' : v >= 5 ? '😅' : '😌'}`}
        />

        <RangeInput
          label="Publications This Year"
          value={publicationCount}
          onChange={setPublicationCount}
          min={0}
          max={10}
          step={1}
          formatValue={(v) => `${v} paper${v === 1 ? '' : 's'}`}
        />
      </div>
    </div>
  );
}