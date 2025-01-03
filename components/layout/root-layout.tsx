"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-grow pt-16"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}