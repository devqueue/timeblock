"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TodoCalendarTab } from "./tabs/todo-calendar-tab";
import { CalendarSyncTab } from "./tabs/calendar-sync-tab";
import { SmartTasksTab } from "./tabs/smart-tasks-tab";
import { ListTodo, CalendarClock, Brain } from "lucide-react";

export function ProductDemoTabs() {
  return (
    <div className="w-full max-w-4xl mx-auto pt-8 md:px-6 md:pt-0">
      <Tabs defaultValue="todo" className="w-full space-y-8">
        <TabsList className="w-full flex flex-col md:flex-row gap-3 md:gap-4">
          <TabsTrigger
            value="todo"
            className="w-full text-base md:text-base px-6 py-5 md:py-3 h-full bg-transparent data-[state=active]:bg-primary/10 hover:bg-muted/50 transition-colors flex items-center justify-center space-x-3 border border-border rounded-lg md:rounded-md md:border-0"
          >
            <ListTodo className="w-5 h-5" />
            <span>Todo Calendar</span>
          </TabsTrigger>
          <TabsTrigger
            value="sync"
            className="w-full text-base md:text-base px-6 py-5 md:py-3 h-full bg-transparent data-[state=active]:bg-primary/10 hover:bg-muted/50 transition-colors flex items-center justify-center space-x-3 border border-border rounded-lg md:rounded-md md:border-0"
          >
            <CalendarClock className="w-5 h-5" />
            <span>Calendar Sync</span>
          </TabsTrigger>
          <TabsTrigger
            value="smart"
            className="w-full text-base md:text-base px-6 py-5 md:py-3 h-full bg-transparent data-[state=active]:bg-primary/10 hover:bg-muted/50 transition-colors flex items-center justify-center space-x-3 border border-border rounded-lg md:rounded-md md:border-0"
          >
            <Brain className="w-5 h-5" />
            <span>Smart Tasks</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-8 pt-8 md:pt-0">
          <TabsContent value="todo" className="m-0">
            <TodoCalendarTab />
          </TabsContent>

          <TabsContent value="sync" className="m-0">
            <CalendarSyncTab />
          </TabsContent>

          <TabsContent value="smart" className="m-0">
            <SmartTasksTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
