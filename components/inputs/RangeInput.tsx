"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface RangeInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
}

export function RangeInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
}: RangeInputProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={min}
        max={max}
        step={step}
      />
      <p className="text-sm text-muted-foreground">{formatValue(value)}</p>
    </div>
  );
}