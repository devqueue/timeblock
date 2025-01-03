"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  ArrowLeftRight,
  ArrowUpDown,
  CalendarClock,
} from "lucide-react";

export function CalendarSyncTab() {
  const calendars = [
    {
      type: "work",
      icon: Briefcase,
      events: [
        { id: 1, title: "Team Meeting", time: "09:00" },
        { id: 2, title: "Client Call", time: "14:00" },
      ],
    },
    {
      type: "personal",
      icon: Home,
      events: [
        { id: 3, title: "Gym Session", time: "17:00" },
        { id: 4, title: "Dinner Plans", time: "19:00" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center space-x-2 text-primary p-4 sm:p-6">
        <CalendarClock className="w-5 h-5 sm:w-6 sm:h-6" />
        <h3 className="font-semibold text-sm sm:text-base">
          Connected Calendars
        </h3>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12 px-4 sm:px-6">
        {calendars.map((calendar) => {
          const Icon = calendar.icon;
          return (
            <motion.div
              key={calendar.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-border p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base capitalize">
                  {calendar.type} Calendar
                </h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {calendar.events.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-2 sm:p-2.5 bg-primary/5 rounded-md"
                  >
                    <p className="font-medium text-sm sm:text-base">
                      {event.title}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {event.time}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Sync Arrows */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-0">
          {/* Desktop: Horizontal Arrows */}
          <ArrowLeftRight className="hidden sm:block w-8 h-8 text-primary" />
          {/* Mobile: Vertical Arrows */}
          <ArrowUpDown className="sm:hidden w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
}
