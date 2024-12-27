"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface DaySchedule {
  time: string;
  phd: {
    activity: string;
    emoji: string;
  };
  onlyfans: {
    activity: string;
    emoji: string;
  };
}

const schedule: DaySchedule[] = [
  {
    time: "7 AM",
    phd: { activity: "Hit snooze button", emoji: "😴" },
    onlyfans: { activity: "Morning selfie routine", emoji: "🤳" },
  },
  {
    time: "9 AM",
    phd: { activity: "Check rejected papers", emoji: "📝" },
    onlyfans: { activity: "Check engagement stats", emoji: "📊" },
  },
  {
    time: "11 AM",
    phd: { activity: "Pretend to understand paper", emoji: "🤔" },
    onlyfans: { activity: "Content planning meeting", emoji: "💭" },
  },
  {
    time: "1 PM",
    phd: { activity: "Ramen for lunch", emoji: "🍜" },
    onlyfans: { activity: "Avocado toast photo shoot", emoji: "🥑" },
  },
  {
    time: "3 PM",
    phd: { activity: "Debug code/life choices", emoji: "💻" },
    onlyfans: { activity: "Edit content/life choices", emoji: "🎬" },
  },
  {
    time: "5 PM",
    phd: { activity: "Existential crisis", emoji: "😱" },
    onlyfans: { activity: "Filter crisis", emoji: "📸" },
  },
  {
    time: "7 PM",
    phd: { activity: "Write thesis (attempt #42)", emoji: "📚" },
    onlyfans: { activity: "Engage with fans", emoji: "💌" },
  },
  {
    time: "9 PM",
    phd: { activity: "Coffee & regrets", emoji: "☕" },
    onlyfans: { activity: "Wine & analytics", emoji: "🍷" },
  },
];

export function LifestyleComparison() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">A Day in the Life</h3>
        <p className="text-muted-foreground">
          Same 24 hours, different struggles 🎭
        </p>
      </div>

      <div className="grid gap-4">
        {schedule.map((slot, index) => (
          <motion.div
            key={slot.time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4">
              <div className="grid grid-cols-[1fr,auto,1fr] gap-4">
                <motion.div
                  className="text-right space-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <Badge variant="outline" className="bg-purple-50">
                    {slot.phd.emoji} {slot.phd.activity}
                  </Badge>
                </motion.div>

                <div className="flex items-center justify-center">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {slot.time}
                  </Badge>
                </div>

                <motion.div
                  className="text-left space-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <Badge variant="outline" className="bg-pink-50">
                    {slot.onlyfans.emoji} {slot.onlyfans.activity}
                  </Badge>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground italic">
        * Individual experiences may vary. Time is a social construct anyway. ⏳
      </div>
    </div>
  );
}