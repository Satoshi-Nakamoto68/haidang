import Link from "next/link"
import Image from "next/image"
import { Building2, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="inline-flex items-center" aria-label="HAI DANG Home">
                <div className="rounded-lg bg-white/95 border border-border/30 shadow-md px-4 py-3 md:px-5 md:py-4 transition-transform transition-shadow duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  <Image
                    src="/placeholder-logo-web.jpg"
                    alt="HAI DANG"
                    width={260}
                    height={72}
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
              </Link>
              <p className="mt-2 text-xs text-primary-foreground/80">Registered in Hong Kong · Est. 2023</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span>8/F., China Hong Kong Tower, 8-12 Hennessy Road, Wan Chai, Hong Kong</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@haidangimex.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>xnkbaonhi@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Main Menu</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/services/import-export" className="block hover:text-accent transition-colors">
                Import-Export
              </Link>
              <Link href="/services/digital-advertising" className="block hover:text-accent transition-colors">
                Digital Advertising
              </Link>
              <Link href="/fashion" className="block hover:text-accent transition-colors">
                Fashion Store
              </Link>
              <Link href="/projects" className="block hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/compliance" className="block hover:text-accent transition-colors">
                Compliance
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/compliance" className="block hover:text-accent transition-colors">
                Compliance
              </Link>
              <Link href="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 HAI DANG IMPORT AND EXPORT LIMITED. All rights reserved. Registered in Hong Kong.</p>
        </div>
      </div>
    </footer>
  )
}
