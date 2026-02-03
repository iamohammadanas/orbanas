import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const services = [
  "Manpower Services",
  "Materials Supply",
  "Operation & Maintenance",
  "Fabrication Work",
  "Surface Treatment",
  "Printing Services",
]

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/19.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Ranin International"
              width={160}
              height={53}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-primary-foreground/80 text-sm leading-relaxed">
              A leading industrial and construction services provider in Saudi Arabia, delivering excellence since 2010.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="mailto:info@ranininternational.com" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+966508011632" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Find us"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:info@ranininternational.com" className="hover:text-primary-foreground transition-colors block">
                  info@ranininternational.com
                </a>
              </li>
              <li>
                <a href="tel:+966508011632" className="hover:text-primary-foreground transition-colors block">
                  +966 50 801 1632
                </a>
              </li>
              <li>
                <a href="tel:+966133592318" className="hover:text-primary-foreground transition-colors block">
                  +966 13 359 2318
                </a>
              </li>
              <li className="pt-2">
                Al Aas Ibn Hisham St., Al Safat Dist,<br />
                Al Jubail, 35514,<br />
                Kingdom of Saudi Arabia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              {new Date().getFullYear()} Ranin International Company. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              <a href="https://www.ranininternational.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                www.ranininternational.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
