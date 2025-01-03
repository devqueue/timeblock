"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="flex gap-2"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit">Join Waitlist</Button>
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