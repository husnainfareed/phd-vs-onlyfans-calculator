"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AcademicMetrics } from "./calculator/AcademicMetrics";
import { OnlyFansMetrics } from "./calculator/OnlyFansMetrics";
import { EarningsChart } from "./charts/EarningsChart";
import { AnalysisResult } from "./analysis/AnalysisResult";
import { calculateFinancialProjections } from "@/lib/calculations";
import { analyzeCareerPaths } from "@/lib/analysis";

export default function FinancialCalculator() {
  // Academic metrics
  const [stipend, setStipend] = useState(30000);
  const [yearsLeft, setYearsLeft] = useState(3);
  const [stressLevel, setStressLevel] = useState(8);
  const [publicationCount, setPublicationCount] = useState(2);
  
  // OnlyFans metrics
  const [followers, setFollowers] = useState(5000);
  const [contentComfort, setContentComfort] = useState(7);
  const [marketingSkills, setMarketingSkills] = useState(6);
  const [competitionLevel, setCompetitionLevel] = useState(8);

  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const projectedSubscribers = Math.round(followers * (contentComfort / 10) * (marketingSkills / 10));
  const subscriptionPrice = 15;

  const data = calculateFinancialProjections(stipend, projectedSubscribers, subscriptionPrice);

  const handleCalculate = () => {
    const result = analyzeCareerPaths({
      stipend,
      yearsLeft,
      stressLevel,
      publicationCount,
      followers,
      contentComfort,
      marketingSkills,
      competitionLevel
    });
    setAnalysis(result);
    setShowAnalysis(true);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <AcademicMetrics
          stipend={stipend}
          setStipend={setStipend}
          yearsLeft={yearsLeft}
          setYearsLeft={setYearsLeft}
          stressLevel={stressLevel}
          setStressLevel={setStressLevel}
          publicationCount={publicationCount}
          setPublicationCount={setPublicationCount}
        />
        
        <OnlyFansMetrics
          followers={followers}
          setFollowers={setFollowers}
          contentComfort={contentComfort}
          setContentComfort={setContentComfort}
          marketingSkills={marketingSkills}
          setMarketingSkills={setMarketingSkills}
          competitionLevel={competitionLevel}
          setCompetitionLevel={setCompetitionLevel}
          projectedSubscribers={projectedSubscribers}
        />
      </div>

      <div className="flex justify-center">
        <Button 
          size="lg"
          onClick={handleCalculate}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          Calculate Your Career Path
        </Button>
      </div>

      {showAnalysis && analysis && (
        <AnalysisResult
          phdScore={analysis.phdScore}
          ofScore={analysis.ofScore}
          analysis={analysis.analysis}
        />
      )}

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">5-Year Earnings Projection</h3>
        <EarningsChart data={data} />
      </div>
    </div>
  );
}