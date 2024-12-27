"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComparisonItem {
  aspect: string;
  phd: string;
  onlyfans: string;
  phdEmoji: string;
  ofEmoji: string;
}

const comparisons: ComparisonItem[] = [
  {
    aspect: "Work Schedule",
    phd: "Eternal deadlines",
    onlyfans: "Be your own boss",
    phdEmoji: "⏰",
    ofEmoji: "🌅",
  },
  {
    aspect: "Dress Code",
    phd: "Business casual",
    onlyfans: "Optional",
    phdEmoji: "👔",
    ofEmoji: "👙",
  },
  {
    aspect: "Career Length",
    phd: "Until retirement",
    onlyfans: "Strike while hot",
    phdEmoji: "👴",
    ofEmoji: "🔥",
  },
  {
    aspect: "Work Location",
    phd: "Dusty library",
    onlyfans: "Anywhere aesthetic",
    phdEmoji: "📚",
    ofEmoji: "🏖️",
  },
  {
    aspect: "Success Metric",
    phd: "Citation count",
    onlyfans: "Subscriber count",
    phdEmoji: "📊",
    ofEmoji: "💫",
  },
  {
    aspect: "Daily Companions",
    phd: "Coffee & anxiety",
    onlyfans: "Ring light & filters",
    phdEmoji: "☕",
    ofEmoji: "📸",
  },
];

export function DecisionMatrix() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">Lifestyle Comparison</h3>
        <p className="text-muted-foreground">
          Choose your daily struggles wisely 😅
        </p>
      </div>

      <div className="grid gap-4">
        {comparisons.map((item, index) => (
          <motion.div
            key={item.aspect}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4">
              <div className="grid grid-cols-[1fr,2px,1fr] gap-4">
                <motion.div
                  className="text-center space-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <Badge
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-950/50 dark:text-purple-100 dark:border-purple-800"
                  >
                    {item.phdEmoji} {item.phd}
                  </Badge>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Badge
                      variant="secondary"
                      className="whitespace-nowrap dark:bg-slate-800"
                    >
                      {item.aspect}
                    </Badge>
                  </div>
                  <div className="w-full h-full bg-muted" />
                </div>

                <motion.div
                  className="text-center space-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <Badge
                    variant="outline"
                    className="bg-pink-50 dark:bg-pink-950/50 dark:text-pink-100 dark:border-pink-800"
                  >
                    {item.ofEmoji} {item.onlyfans}
                  </Badge>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground italic">
        * Results may vary. Past performance does not guarantee future results.
        Not financial advice. 😉
      </div>
    </div>
  );
}