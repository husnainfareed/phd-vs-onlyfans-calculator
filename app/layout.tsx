import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils"
import { type ThemeConfig, themeConfig } from "@/lib/theme"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhD vs OnlyFans Calculator',
  description: 'A satirical tool to compare career paths',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          themeConfig.light.background,
          "dark:bg-gradient-to-b dark:from-slate-950 dark:to-purple-950"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}