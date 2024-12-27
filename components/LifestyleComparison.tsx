"use client";

import { Coffee, Brain, Camera, Clock, Heart, Coins, Home, Pizza } from "lucide-react";

const ComparisonItem = ({ phd, of, icon: Icon, label }) => (
  <div className="grid grid-cols-3 gap-4 items-center p-4 hover:bg-muted/50 rounded-lg transition-colors">
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      <span className="font-medium">{label}</span>
    </div>
    <div className="text-center text-sm text-muted-foreground">{phd}</div>
    <div className="text-center text-sm text-muted-foreground">{of}</div>
  </div>
);

export default function LifestyleComparison() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4 font-semibold pb-2 border-b">
        <div>Daily Life</div>
        <div className="text-center text-purple-500">PhD Life</div>
        <div className="text-center text-pink-500">OnlyFans Life</div>
      </div>

      <ComparisonItem
        icon={Coffee}
        label="Coffee Intake"
        phd="IV Drip Required"
        of="Just for the aesthetic"
      />
      <ComparisonItem
        icon={Brain}
        label="Brain Usage"
        phd="Quantum Physics"
        of="Social Media Algorithm"
      />
      <ComparisonItem
        icon={Camera}
        label="Camera Time"
        phd="Annual Awkward Lab Photo"
        of="24/7 Ring Light Life"
      />
      <ComparisonItem
        icon={Clock}
        label="Working Hours"
        phd="What is Time?"
        of="When the Lighting is Good"
      />
      <ComparisonItem
        icon={Heart}
        label="Dating Life"
        phd="Lab Romance"
        of="DM Overflow"
      />
      <ComparisonItem
        icon={Coins}
        label="Side Hustle"
        phd="Tutoring Undergrads"
        of="Selling Merch"
      />
      <ComparisonItem
        icon={Home}
        label="Workspace"
        phd="Windowless Lab"
        of="Ring Light Paradise"
      />
      <ComparisonItem
        icon={Pizza}
        label="Diet"
        phd="Ramen & Despair"
        of="Protein Shakes & Açai"
      />
    </div>
  );
}