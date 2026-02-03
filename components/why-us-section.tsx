"use client"

import Image from "next/image"
import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We follow all regulatory and industry standards, ensuring the safety and well-being of our staff and clients.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Consistently delivering high-quality services that meet or exceed client expectations and international standards.",
  },
  {
    icon: Clock,
    title: "Since 2010",
    description: "Over a decade of experience serving industrial, commercial, and infrastructure projects in Saudi Arabia.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Trained personnel with innovative processes and the right equipment for every project requirement.",
  },
  {
    icon: CheckCircle,
    title: "Full Compliance",
    description: "Operations aligned with Saudi Arabia's Vision 2030 and all local and international regulations.",
  },
  {
    icon: Zap,
    title: "End-to-End Solutions",
    description: "Comprehensive services from inception to completion, supporting projects throughout their lifecycle.",
  },
]

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = end / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, hasAnimated])

  return (
    <p ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground">
      {count}{suffix}
    </p>
  )
}

export function WhyUsSection() {
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
    <section id="why-us" className="py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Our Strengths</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Why Choose Ranin International</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Built on professionalism, reliability, and a commitment to excellence that has earned us the trust of leading organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/19.png"
              alt="Construction cranes at sunset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <AnimatedCounter end={15} suffix="+" />
                <p className="mt-2 text-primary-foreground/80">Years of Experience</p>
              </div>
              <div>
                <AnimatedCounter end={500} suffix="+" />
                <p className="mt-2 text-primary-foreground/80">Projects Completed</p>
              </div>
              <div>
                <AnimatedCounter end={1000} suffix="+" />
                <p className="mt-2 text-primary-foreground/80">Skilled Workers</p>
              </div>
              <div>
                <AnimatedCounter end={100} suffix="%" />
                <p className="mt-2 text-primary-foreground/80">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
