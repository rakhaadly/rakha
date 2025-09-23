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


import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"
import { InfiniteSlider } from '@/components/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

// ✅ Navbar
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
          <a href="#About" className="text-sm text-gray-700 hover:text-yellow-600 transition">About</a>
          <a href="#Portofolio" className="text-sm text-gray-700 hover:text-yellow-600 transition">Portofolio</a>
          <a href="#faq" className="text-sm text-gray-700 hover:text-yellow-600 transition">FAQ</a>
        </nav>

        <Button className="rounded-full px-5 shadow-md bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-white hover:shadow-lg hover:shadow-yellow-400/50">
          signup<ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}

// ✅ Hero
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

// ✅ IntegrationsSection dengan Tools
// ✅ IntegrationsSection dengan Tools warna gold + bg putih
// ✅ IntegrationsSection dengan Tools warna gold + gradasi putih
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
              className="shadow-black-950/10 size-20 bg-gradient-to-br from-white  shadow-xl border
              backdrop-blur-md backdrop-grayscale hover:scale-110 transition-all duration-300 dark:shadow-white/15"
              isCenter={true}
            >
              <LogoIcon className="text-gray-900" /> 
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
export function Footer() {
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
      <Hero />
      <IntegrationsSection />
      <LogoCloud />
    </main>
  );
}
