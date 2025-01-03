"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[800px] md:min-h-[900px] flex items-center justify-center w-full overflow-hidden"
      id="why"
    >
      {/* Masking overlays */}
      <div className="absolute inset-x-0 -top-10 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-background via-background to-transparent z-30" />
      <div className="absolute inset-x-0 -bottom-10 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-background via-background to-transparent z-30 hidden sm:block md:block" />

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(var(--primary-rgb),0.15)_15%,rgb(var(--background-rgb),0.5)_78%,transparent)]" />

      {/* Orbital System Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-16 sm:-mt-24 md:-mt-32 z-20">
        {/* Central Planet */}
        <div className="relative flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-100">
          {/* <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-[radial-gradient(50%_50%_at_16.8%_18.3%,hsl(var(--primary-foreground))_0%,hsl(var(--primary))_37.7%,hsl(var(--background)))] shadow-[-20px_-20px_50px_hsl(var(--primary-foreground)/.5),-20px_-20px_80px_hsl(var(--primary-foreground)/.1),0_0_50px_hsl(var(--primary))]" /> */}

          {/* Ring 1 */}
          <motion.div
            animate={{ rotate: "360deg" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] border border-primary/20 rounded-full"
          >
            <div className="absolute h-2 w-2 bg-primary rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute h-2 w-2 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute h-4 w-4 border border-primary rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="h-1.5 w-1.5 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Ring 2 */}
          <motion.div
            animate={{ rotate: "-360deg" }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute w-[550px] h-[550px] md:w-[750px] md:h-[750px] border border-primary/20 rounded-full border-dashed"
          />

          {/* Ring 3 */}
          <motion.div
            animate={{ rotate: "360deg" }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute w-[650px] h-[650px] md:w-[900px] md:h-[900px] border border-primary/20 rounded-full"
          >
            <div className="absolute h-2 w-2 bg-primary rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute h-2 w-2 bg-primary rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 sm:px-6 md:px-8 mt-4 sm:mt-12 md:mt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-5 md:mb-6 leading-[1.2] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Transform Your Day with
          <br />
          Intelligent Time Blocking
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-7 md:mb-8 sm:max-w-xl md:max-w-2xl mx-auto"
        >
          Seamlessly manage tasks, sync calendars, and optimize your
          productivity with AI-powered scheduling.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md items-center justify-center"
        >
          <WaitlistForm />
        </motion.div> */}
      </div>
    </section>
  );
}
