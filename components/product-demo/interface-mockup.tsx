"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export function InterfaceMockup() {
  const tasks = [
    { id: 1, title: "Product Strategy Meeting", time: "09:00 - 10:30", completed: true },
    { id: 2, title: "Review Design Proposals", time: "11:00 - 12:00", completed: false },
    { id: 3, title: "Team Sync", time: "14:00 - 15:00", completed: false },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Today's Schedule</h3>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">March 20, 2024</span>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="divide-y divide-border">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <CheckCircle2 
                      className={`w-5 h-5 ${task.completed ? 'text-primary' : 'text-muted-foreground'}`}
                    />
                  </motion.div>
                  <div>
                    <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{task.time}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl"
      />
    </div>
  );
}