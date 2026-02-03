"use client"

import Image from "next/image"
import { Target, Eye } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/16.jpeg"
                alt="Team of professional workers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
              <Image
                src="/images/14.png"
                alt="Engineering planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Building the Future of Saudi Arabia
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              Ranin International Company is a leading industrial and construction services provider operating in Saudi Arabia since 2010. Over the past decade, we have established ourselves as a trusted partner for industrial, commercial, and infrastructure projects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Our operations are aligned with Saudi Arabia&apos;s Vision 2030, reflecting our commitment to supporting economic growth, sustainable development, and infrastructure modernization in the Kingdom.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide safe, sustainable, and high-quality industrial services that empower our clients to achieve their goals.
                </p>
              </div>

              <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be recognized as a leading industrial and construction services provider in Saudi Arabia and the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
