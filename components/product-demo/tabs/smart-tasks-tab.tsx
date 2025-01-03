"use client";

import { motion } from "framer-motion";
import { Brain, Battery, BatteryLow, BatteryMedium } from "lucide-react";

export function SmartTasksTab() {
  const energyLevels = [
    {
      level: "High Energy",
      icon: Battery,
      tasks: ["Strategic Planning", "Creative Work"],
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      level: "Medium Energy",
      icon: BatteryMedium,
      tasks: ["Team Meetings", "Email Management"],
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      level: "Low Energy",
      icon: BatteryLow,
      tasks: ["Documentation", "Routine Updates"],
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center space-x-2 text-primary p-4 sm:p-6">
        <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
        <h3 className="font-semibold text-sm sm:text-base">
          Smart Task Distribution
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6">
        {energyLevels.map((level, index) => {
          const Icon = level.icon;
          return (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg border border-border p-3 sm:p-4 ${level.bg} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${level.color}`} />
                <h4 className="font-medium text-sm sm:text-base">
                  {level.level}
                </h4>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {level.tasks.map((task, i) => (
                  <motion.li
                    key={task}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="text-xs sm:text-sm text-muted-foreground"
                  >
                    • {task}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
