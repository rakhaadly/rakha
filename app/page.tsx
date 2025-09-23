"use client";

import {
  SiTailwindcss,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiBootstrap,
} from 'react-icons/si';

import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600">
            Rakha
          </span>
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#About" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            About
          </a>
          <a href="#Portofolio" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            Portofolio
          </a>
          <a href="#faq" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            FAQ
          </a>
        </nav>

        <Button className="rounded-full px-5 shadow-md bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-white hover:shadow-lg hover:shadow-yellow-400/50">
          Get<ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-700">
      <div className="absolute -top-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-200/40 via-yellow-300/30 to-yellow-400/40 blur-3xl" />

      <div className="container mx-auto px-4 py-24 text-center md:py-32">
        <motion.h1
          className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl text-gray-900"
          {...fadeUp(0)}
        >
          Rakha Adly<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600">
            Irsyad
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg text-gray-600"
          {...fadeUp(0.15)}
        >
          I’m Rakha Adly, a student at Boarding Rumah IT Imam Nafi, with a strong passion for web development and building clean, production-ready digital experiences.
        </motion.p>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Tailwind CSS", desc: "Utility-first CSS framework.", icon: <SiTailwindcss className="h-6 w-6 text-yellow-500" /> },
    { title: "MySQL", desc: "Reliable relational database.", icon: <SiMysql className="h-6 w-6 text-amber-500" /> },
    { title: "HTML5", desc: "Semantic markup for web pages.", icon: <SiHtml5 className="h-6 w-6 text-orange-500" /> },
    { title: "CSS3", desc: "Styling & layout for UIs.", icon: <SiCss3 className="h-6 w-6 text-yellow-400" /> },
    { title: "Python", desc: "Powerful programming language.", icon: <SiPython className="h-6 w-6 text-yellow-500" /> },
    { title: "React", desc: "Library for UI development.", icon: <SiReact className="h-6 w-6 text-amber-400" /> },
    { title: "Node.js", desc: "Runtime for scalable APIs.", icon: <SiNodedotjs className="h-6 w-6 text-yellow-600" /> },
    { title: "Next.js", desc: "React framework SSR/SSG.", icon: <SiNextdotjs className="h-6 w-6 text-gray-800" /> },
    { title: "Bootstrap", desc: "Popular CSS framework.", icon: <SiBootstrap className="h-6 w-6 text-yellow-500" /> },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20 text-gray-700">
      <motion.div className="mx-auto mb-10 max-w-2xl text-center" {...fadeUp(0)}>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-gray-900">
          About Me
        </h2>
        <p className="mt-2 text-gray-600">Tools and technologies I use daily:</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div key={it.title} {...fadeUp(0.05 * i)}>
            <Card className="h-full border border-yellow-200 bg-white shadow-md hover:shadow-lg hover:shadow-yellow-200/50 transition">
              <CardHeader className="pb-2">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-yellow-100 to-yellow-300">
                  {it.icon}
                </div>
                <CardTitle className="text-base text-gray-900">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">{it.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-yellow-200 text-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Build by Rakha Adly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/rakhaadly" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-yellow-600">
              <FaInstagram size={22} />
            </a>
            <a
  href="https://wa.me/6287885985010?text=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="transition hover:text-yellow-600"
>
  <FaWhatsapp size={22} />
</a>

            <a
  href="https://www.linkedin.com/in/rakhaadly"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="transition hover:text-yellow-600"
>
  <FaLinkedin size={22} />
</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
