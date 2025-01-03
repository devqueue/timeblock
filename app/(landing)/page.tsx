"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { FeatureCard } from "@/components/feature-card";
import { ProductDemoTabs } from "@/components/product-demo/product-demo-tabs";
import {
  Calendar,
  Clock,
  Repeat,
  CalendarClock,
  ListTodo,
  Zap,
} from "lucide-react";
import { WaitlistSection } from "@/components/waitlist-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Product Demo Section */}
      <section className="w-full bg-muted/30 py-16 z-40" id="demo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 px-4">
            Experience Seamless Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover how our intelligent system adapts to your workflow and
            enhances your productivity
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <ProductDemoTabs />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Everything You Need to Master Your Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform your daily productivity and
            time management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Smart Calendar Integration"
            description="Seamlessly sync your calendars and manage all your events in one place."
            icon={Calendar}
          />
          <FeatureCard
            title="Intelligent Time Blocking"
            description="Optimize your schedule with AI-powered time blocking suggestions."
            icon={Clock}
          />
          <FeatureCard
            title="Cross-Platform Sync"
            description="Access your schedule from any device with real-time synchronization."
            icon={Repeat}
          />
          <FeatureCard
            title="Automated Scheduling"
            description="Let AI handle the complexities of scheduling your tasks and meetings."
            icon={CalendarClock}
          />
          <FeatureCard
            title="Task Management"
            description="Keep track of your tasks and never miss a deadline."
            icon={ListTodo}
          />
          <FeatureCard
            title="Energy-Based Planning"
            description="Plan your day based on your energy levels for maximum productivity."
            icon={Zap}
          />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist">
        <WaitlistSection />
      </section>
    </div>
  );
}
