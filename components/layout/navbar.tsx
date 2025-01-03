"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Clock className="w-6 h-6" />
          <span className="font-semibold text-lg">TimeBlock</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#demo"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </Link>
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
        </div>

        <Button variant="default" size="sm">
          Join Waitlist
        </Button>
      </nav>
    </motion.header>
  );
}
