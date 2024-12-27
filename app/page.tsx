"use client";

import { Calculator, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CareerPath } from "@/components/CareerPath";
import { FinancialCalculator } from "@/components/FinancialCalculator";
import { LifestyleComparison } from "@/components/LifestyleComparison";
import { DecisionMatrix } from "@/components/DecisionMatrix";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.3,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          {/* <div className="flex justify-center gap-8 items-center">
            <motion.div
              whileHover="hover"
              variants={iconVariants}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-16 h-16 text-purple-500" />
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              vs
            </motion.h1>

            <motion.div
              whileHover="hover"
              variants={iconVariants}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Camera className="w-16 h-16 text-pink-500" />
            </motion.div>
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              PhD vs OnlyFans
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              Because sometimes life&apos;s biggest decisions need a spreadsheet 📊
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <CareerPath type="phd" />
            <CareerPath type="onlyfans" />
          </div>
        </div>

        <Tabs defaultValue="calculator" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Show Me The Money
            </TabsTrigger>
            <TabsTrigger value="lifestyle">
              <Calendar className="mr-2 h-4 w-4" />
              Daily Life
            </TabsTrigger>
            <TabsTrigger value="matrix">
              <GraduationCap className="mr-2 h-4 w-4" />
              Final Decision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <Card className="p-6">
              <FinancialCalculator />
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle">
            <Card className="p-6">
              <LifestyleComparison />
            </Card>
          </TabsContent>

          <TabsContent value="matrix">
            <Card className="p-6">
              <DecisionMatrix />
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            This is a satirical tool. Please make life decisions responsibly! 🎓📸
          </p>
          <p className="text-xs text-muted-foreground">
            No academics or content creators were harmed in the making of this calculator.
          </p>
        </footer>
      </div>
    </main>
  );
}