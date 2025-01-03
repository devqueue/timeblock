"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      });

      const data = await response.json();
      console.log(data.errors?.[0]?.message);
      if (response.ok) {
        setSubmitted(true);
        toast.success("Successfully joined the waitlist!");
      } else {
        if (data.errors?.[0]?.message?.includes("invalid: email")) {
          toast.error("This email is already on the waitlist!");
        } else {
          toast.error("Failed to join waitlist. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 min-w-0"
            required
          />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0"
            required
          />
          <Button
            type="submit"
            className="md:w-auto w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-2"
        >
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
          <p className="text-lg font-medium">You're on the list!</p>
          <p className="text-sm text-muted-foreground">
            We'll notify you when we launch.
          </p>
        </motion.div>
      )}
    </div>
  );
}
