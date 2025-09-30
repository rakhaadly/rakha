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

import { LogoIcon } from '@/components/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import * as React from "react"
import { type DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { InfiniteSlider } from '@/components/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});
import { Logo } from '@/components/logo'
import { Mail, Menu, SendHorizonal, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]

function HeroSection() {
  const [menuState, setMenuState] = useState(false)
  return (
    <section className="relative w-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 lg:py-20">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <Link
              href="/"
              className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0">
              <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
              <span className="text-sm">Introduction Tailark Html</span>
              <span className="bg-(--color-border) block h-4 w-px"></span>
              <ArrowRight className="size-4" />
            </Link>

            <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
              Rakha Adly Irsyad | High School Programmer
            </h1>
            <p className="mt-8">
              Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam.
              Quidem harum omnis beatae ipsum soluta!
            </p>

            <form
              action=""
              className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                <input
                  placeholder="Your mail address"
                  className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                />
                <div className="md:pr-1.5 lg:pr-0">
                  <Button aria-label="submit" className="rounded-(--radius)">
                    <span className="hidden md:block">Get Started</span>
                    <SendHorizonal
                      className="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/batik.jpg"
          alt="app illustration"
          width={2796}
          height={2008}
          priority
        />
      </div>

      {/* Overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  )
}







function Calendar04() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 9),
    to: new Date(2025, 5, 26),
  })

  const [time, setTime] = React.useState<string>("")

  React.useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    tick() // set waktu awal
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-8">
        {/* Kalender */}
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-lg border shadow-sm"
        />

        {/* Jam */}
        <div className="rounded-lg border shadow-sm p-6 text-center">
          <div className="text-sm text-muted-foreground">Waktu Sekarang</div>
          <div className="mt-2 text-3xl font-mono font-semibold">{time}</div>
        </div>
      </div>
    </div>
  )
}



function IntegrationsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mx-auto max-w-[28rem] space-y-6 sm:max-w-2xl">

          {/* Slider 1 */}
          <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
            <IntegrationCard><SiTailwindcss className="text-sky-400" /></IntegrationCard> {/* Tailwind biru */}
            <IntegrationCard><SiMysql className="text-[#00618A]" /></IntegrationCard> {/* MySQL biru tua */}
            <IntegrationCard><SiHtml5 className="text-orange-600" /></IntegrationCard> {/* HTML5 oranye */}
            <IntegrationCard><SiCss3 className="text-blue-600" /></IntegrationCard> {/* CSS3 biru */}
            <IntegrationCard><SiPython className="text-[#3776AB]" /></IntegrationCard> {/* Python biru */}
            <IntegrationCard><SiReact className="text-sky-500" /></IntegrationCard> {/* React biru muda */}
            <IntegrationCard><SiNodedotjs className="text-green-600" /></IntegrationCard> {/* Node hijau */}
            <IntegrationCard><SiNextdotjs className="text-gray-900" /></IntegrationCard> {/* Next hitam */}
            <IntegrationCard><SiBootstrap className="text-purple-600" /></IntegrationCard> {/* Bootstrap ungu */}
          </InfiniteSlider>

          {/* Slider 2 */}
          <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
            <IntegrationCard><SiBootstrap className="text-purple-600" /></IntegrationCard>
            <IntegrationCard><SiNextdotjs className="text-gray-900" /></IntegrationCard>
            <IntegrationCard><SiNodedotjs className="text-green-600" /></IntegrationCard>
            <IntegrationCard><SiReact className="text-sky-500" /></IntegrationCard>
            <IntegrationCard><SiPython className="text-[#FFD43B]" /></IntegrationCard> {/* Python kuning */}
            <IntegrationCard><SiCss3 className="text-blue-600" /></IntegrationCard>
            <IntegrationCard><SiHtml5 className="text-orange-600" /></IntegrationCard>
            <IntegrationCard><SiMysql className="text-[#E48E00]" /></IntegrationCard> {/* MySQL oranye */}
            <IntegrationCard><SiTailwindcss className="text-sky-400" /></IntegrationCard>
          </InfiniteSlider>

          {/* Slider 3 */}
          <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
            <IntegrationCard><SiReact className="text-sky-500" /></IntegrationCard>
            <IntegrationCard><SiPython className="text-[#3776AB]" /></IntegrationCard>
            <IntegrationCard><SiTailwindcss className="text-sky-400" /></IntegrationCard>
            <IntegrationCard><SiNextdotjs className="text-gray-900" /></IntegrationCard>
            <IntegrationCard><SiMysql className="text-[#E48E00]" /></IntegrationCard>
            <IntegrationCard><SiHtml5 className="text-orange-600" /></IntegrationCard>
            <IntegrationCard><SiCss3 className="text-blue-600" /></IntegrationCard>
            <IntegrationCard><SiNodedotjs className="text-green-600" /></IntegrationCard>
            <IntegrationCard><SiBootstrap className="text-purple-600" /></IntegrationCard>
          </InfiniteSlider>

          {/* Center Icon */}
          <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
           <IntegrationCard
  className="shadow-black-950/30 size-15 bg-gradient-to-br from-white shadow-xl border
  backdrop-blur-md backdrop-grayscale hover:scale-110 transition-all duration-300 dark:shadow-white/15"
  isCenter={true}
>
  <Image
    src="/logo-r.png"
    alt="Custom Logo"
    width={40}
    height={40}
    className="rounded-lg"
  />
</IntegrationCard>

          </div>
        </div>

        {/* Text */}
        <div className="mx-auto mt-16 max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-gray-900">
            Integrate with your favorite tools
          </h2>
          <p className="text-gray-600 text-lg">
            Connect seamlessly with the tools you already use every day.
          </p>
          
        </div>
      </div>
    </section>
  )
}





const IntegrationCard = ({ children, className, isCenter = false }: 
  { children: React.ReactNode; className?: string; isCenter?: boolean }) => {
  return (
    <div className={cn('bg-background relative z-20 flex size-12 rounded-full border', className)}>
      <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>
        {children}
      </div>
    </div>
  )
}

// ✅ Footer
 function Footer() {
  return (
    <footer className="bg-white border-t border-yellow-200 text-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Build by Rakha Adly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/rakhaadly" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
              <FaInstagram size={22} />
            </a>
            <a href="https://wa.me/6287885985010?text=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda"
              target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
              <FaWhatsapp size={22} />
            </a>
            <a href="https://www.linkedin.com/in/rakhaadly" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
 
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

 function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Customizable</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">You have full control</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Powered By AI</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
      <div className="flex">
                                <img
                                   className="mx-auto h-16 w-auto"
    src="/darzan.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
                                />
                            </div>

                             <div className="flex">
                                <img
                                    className="mx-auto h-25 w-auto"
    src="/diva.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
                                />
                            </div>
                         <div className="flex">
  <img
    className="mx-auto h-16 w-auto"
    src="/darzan.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
  />
</div>
                            <div className="flex">
                                <img
                                     className="mx-auto h-25 w-auto"
    src="/diva.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
                                />
                            </div>
                          <div className="flex">
  <img
     className="mx-auto h-16 w-auto"
    src="/darzan.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
  />
</div>

                            <div className="flex">
                                <img
                                      className="mx-auto h-25 w-auto"
    src="/diva.png"
    alt="Darzan Frozen Food Logo"
    height="64"
    width="auto"
                                />
                            </div>
                           <div className="flex">
                                  <img
                                    className="mx-auto h-16 w-auto"
                                    src="/darzan.png"
                                    alt="Darzan Frozen Food Logo"
                                    height="64"
                                    width="auto"
                                  />
                                </div>
                             <div className="flex">
                                <img
                                     className="mx-auto h-25 w-auto"
                                  src="/diva.png"
                                  alt="Darzan Frozen Food Logo"
                                  height="64"
                                  width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
// ✅ Page
export default function Page() {
  return (
    <main className="bg-white">
     <HeroSection />
       <Features />
       <Calendar04 />
      <IntegrationsSection />
      <LogoCloud />
      <Footer />
    </main>
  );
}
