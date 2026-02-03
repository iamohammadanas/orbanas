"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const heroImages = [
  "/images/19.png",
  "/images/untitled-1280-c3-97-980-px-1.png",
  "/images/3.jpeg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt="Industrial construction background"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p 
          className={`text-primary-foreground/90 text-sm font-medium tracking-widest uppercase mb-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Since 2010 in Saudi Arabia
        </p>
        <h1 
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance max-w-5xl mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          Industrial & Construction Solutions with{" "}
          <span className="text-accent">Excellence</span>
        </h1>
        <p 
          className={`mt-8 text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed text-pretty ${
            isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
          }`}
        >
          Ranin International Company is a leading provider of industrial and construction services, delivering high-quality solutions tailored to the unique needs of our clients across the Kingdom.
        </p>
        <div 
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 h-14 text-base transition-all hover:scale-105"
          >
            <Link href="#services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 bg-transparent h-14 text-base transition-all hover:scale-105"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Projects Done" },
            { number: "1000+", label: "Workers" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className={`${isVisible ? `animate-count-up animation-delay-${(index + 1) * 100}` : "opacity-0"}`}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">{stat.number}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </Link>
    </section>
  )
}
