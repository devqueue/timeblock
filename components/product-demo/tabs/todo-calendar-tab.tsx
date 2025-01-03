"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ListTodo, Zap } from "lucide-react";

export function TodoCalendarTab() {
  const tasks = [
    {
      id: 1,
      title: "Team Standup",
      time: "09:00",
      energy: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Project Planning",
      time: "11:00",
      energy: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Email Responses",
      time: "14:00",
      energy: "low",
      completed: true,
    },
  ];

  const getEnergyIcons = (energy: string) => {
    const count = energy === "high" ? 3 : energy === "medium" ? 2 : 1;
    return Array(count)
      .fill(null)
      .map((_, i) => <Zap key={i} className="w-4 h-4 text-primary" />);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center space-x-2 text-primary p-4 sm:p-6">
        <ListTodo className="w-5 h-5 sm:w-6 sm:h-6" />
        <h3 className="font-semibold text-sm sm:text-base">
          Daily Task Overview
        </h3>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h3 className="font-semibold">Today's Tasks</h3>
            <Clock className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="space-y-3">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50"
              >
                <CheckCircle2
                  className={`w-5 h-5 ${
                    task.completed ? "text-muted-foreground" : "text-primary"
                  }`}
                />
                <div className="flex-grow">
                  <p
                    className={`font-medium ${
                      task.completed ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {task.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{task.time}</p>
                </div>
                <div className="flex items-center space-x-0.5">
                  {getEnergyIcons(task.energy)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
