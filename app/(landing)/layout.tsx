import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootLayout } from "@/components/layout/root-layout";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeBlock - Intelligent Task Management",
  description:
    "Master your time with smart task management and calendar integration",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
        <Toaster />
      </body>
    </html>
  );
}
