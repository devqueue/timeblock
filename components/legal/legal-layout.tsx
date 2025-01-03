"use client";

import { motion } from "framer-motion";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {lastUpdated}
          </p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
