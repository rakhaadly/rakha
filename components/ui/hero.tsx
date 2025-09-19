"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-sky-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto grid place-items-center px-4 py-24 text-center">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Craft sites that feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">premium</span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A curated Next.js + shadcn/ui starter with tasteful motion, clean spacing, and real-world layout.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Button className="rounded-full px-6 shadow-md">Start building</Button>
          <Button variant="outline" className="rounded-full px-6">Live demo</Button>
        </motion.div>
      </div>
    </section>
  );
}
