"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface EarningsChartProps {
  data: Array<{
    year: string;
    PhD: number;
    OnlyFans: number;
  }>;
}

export function EarningsChart({ data }: EarningsChartProps) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="year"
            padding={{ left: 30, right: 30 }}
            tick={{ fill: 'currentColor' }}
          />
          <YAxis
            tick={{ fill: 'currentColor' }}
            tickFormatter={(value) => `$${(value / 1000)}k`}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)',
              color: 'hsl(var(--popover-foreground))'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="PhD"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="OnlyFans"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}