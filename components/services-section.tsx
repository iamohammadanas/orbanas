"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Industrial & Construction Manpower",
    description: "Expert manpower solutions delivering skilled, certified, and safety-conscious personnel for large-scale projects.",
    image: "/images/16.jpeg",
    highlights: ["Piping & Structural", "Quality Control", "Mechanical & GRE", "Electrical", "Welding & Rigging"],
  },
  {
    title: "Materials Supply",
    description: "Quality-assured industrial and construction materials for electrical, mechanical, and infrastructure projects.",
    image: "/images/7.jpeg",
    highlights: ["Electrical Systems", "SS & CS Piping", "Power Tools", "Piping Systems", "Safety PPE"],
  },
  {
    title: "Operation & Maintenance",
    description: "Reliable O&M solutions for industrial, commercial, and infrastructure facilities ensuring safe operation.",
    image: "/images/8.jpeg",
    highlights: ["Preventive Maintenance", "Corrective Maintenance", "HVAC Systems", "Firefighting", "Building Services"],
  },
  {
    title: "Fabrication Work",
    description: "Comprehensive fabrication services using modern machinery, certified welding procedures, and skilled manpower.",
    image: "/images/11.jpeg",
    highlights: ["Structural Steel", "Piping Fabrication", "Housing Fabrication", "Quality Control", "Dimensional Inspection"],
  },
  {
    title: "Surface Treatment",
    description: "Finishing services designed to enhance surface quality, durability, and corrosion resistance.",
    image: "/images/3.jpeg",
    highlights: ["Sand Blasting", "Hot-Dip Galvanizing", "Spray Painting", "Surface Inspection", "Quality Assurance"],
  },
  {
    title: "Printing Press Services",
    description: "Professional printing solutions for commercial, industrial, and institutional clients.",
    image: "/images/13.jpeg",
    highlights: ["Technical Drawings", "Reports & Manuals", "Marketing Materials", "Digital & Offset", "Finishing Services"],
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 bg-secondary overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive industrial and construction services designed to support projects across various sectors in Saudi Arabia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              <div className="relative p-6 -mt-12">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent mr-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
