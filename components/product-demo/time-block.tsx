"use client";

import { motion } from "framer-motion";

export function TimeBlock() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <div className="grid grid-cols-1 gap-2 w-48">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.2 }}
            className="h-12 rounded-md bg-primary/10 relative overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
              className="absolute inset-0 bg-primary/20"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}