"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Home, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CalendarSyncDemo() {
  const events = [
    { id: 1, title: "Team Meeting", time: "09:00", calendar: "work" },
    { id: 2, title: "Gym Session", time: "17:00", calendar: "personal" },
    { id: 3, title: "Project Review", time: "14:00", calendar: "work" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <Tabs defaultValue="sync" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
          <TabsTrigger value="sync" className="text-sm sm:text-base">
            Calendar Sync
          </TabsTrigger>
          <TabsTrigger value="timeblock" className="text-sm sm:text-base">
            Time Blocking
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sync" className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Work Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg border border-border p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base">
                  Work Calendar
                </h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {events
                  .filter((e) => e.calendar === "work")
                  .map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
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

            {/* Personal Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg border border-border p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base">
                  Personal Calendar
                </h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {events
                  .filter((e) => e.calendar === "personal")
                  .map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
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
          </div>

          {/* Sync Indicator */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mt-4 text-primary"
          >
            <Calendar className="w-full h-full" />
          </motion.div>
        </TabsContent>

        <TabsContent value="timeblock">
          <div className="rounded-lg border border-border p-3 sm:p-4">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-3">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-md bg-primary/5 p-1.5 sm:p-2"
                >
                  <div className="h-full flex flex-col">
                    <span className="text-[10px] sm:text-xs text-muted-foreground mb-1">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                    {i < 5 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        className="flex-grow bg-primary/10 rounded-sm"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
