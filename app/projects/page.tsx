"use client"

import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, Shirt, ExternalLink, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Global Electronics Supply Chain",
    category: "Import-Export",
    description:
      "Established comprehensive supply chain network for consumer electronics across 15 countries, reducing costs by 30% and improving delivery times.",
    // image: "/placeholder.svg?key=electronics-supply-chain",
    image: "/XXL_height.webp?key=electronics-supply-chain",
    results: ["30% cost reduction", "15 countries served", "50% faster delivery", "$2M+ annual savings"],
    date: "2023",
    location: "Asia-Pacific",
    icon: Globe,
  },
  {
    id: 2,
    title: "Premium Fashion Brand Launch",
    category: "Fashion Retail",
    description:
      "Successfully launched and scaled a premium fashion brand from concept to $1M+ annual revenue through strategic sourcing and e-commerce optimization.",
    image: "/162356-detailp.jpeg?key=fashion-brand-launch",
    results: [
      "$1M+ annual revenue",
      "500% growth in 18 months",
      "25+ retail partnerships",
      "95% customer satisfaction",
    ],
    date: "2023",
    location: "Hong Kong & Europe",
    icon: Shirt,
  },
  {
    id: 3,
    title: "Digital Marketing Campaign - Tech Startup",
    category: "Digital Advertising",
    description:
      "Executed comprehensive digital marketing strategy for B2B tech startup, achieving 400% ROI and generating $5M+ in qualified leads.",
    image: "/Marketing-Campaign.jpg?key=digital-marketing-campaign",
    results: ["400% ROI achieved", "$5M+ in qualified leads", "250% increase in conversions", "60% reduction in CAC"],
    date: "2023",
    location: "North America",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Sustainable Textile Trading",
    category: "Import-Export",
    description:
      "Developed sustainable textile trading network connecting eco-friendly manufacturers with global fashion brands, promoting ethical sourcing.",
    image: "/Textile-Trading.jpg?key=sustainable-textile-trading",
    results: [
      "100% sustainable sourcing",
      "20+ eco-friendly suppliers",
      "Carbon footprint reduced 40%",
      "Ethical certification achieved",
    ],
    date: "2023-2024",
    location: "Global",
    icon: Globe,
  },
  // {
  //   id: 5,
  //   title: "Luxury Accessories E-commerce",
  //   category: "Fashion Retail",
  //   description:
  //     "Built and optimized luxury accessories e-commerce platform, achieving top-tier conversion rates and customer retention metrics.",
  //   image: "/placeholder.svg?key=luxury-accessories-ecommerce",
  //   results: ["8.5% conversion rate", "85% customer retention", "300% revenue growth", "Award-winning UX design"],
  //   date: "2023",
  //   location: "Hong Kong & Singapore",
  //   icon: Shirt,
  // },
  {
    id: 5,
    title: "Online Fashion Brand Development",
    category: "Fashion Retail",
    description:
      "Built and optimized an e-commerce platform for a fashion brand, focusing on market expansion and sustainable revenue growth.",
    image: "/Fashion-Brand.webp?key=online-fashion-brand",
    results: ["8.5% conversion rate", "85% customer return rate", "300% revenue growth", "Conversion-optimized UX/UI design"],
    date: "2023",
    location: "Southeast Asia Market",
    icon: Shirt,
  },
  {
    id: 6,
    title: "Multi-Channel Performance Marketing",
    category: "Digital Advertising",
    description:
      "Implemented integrated performance marketing strategy across multiple channels for retail client, maximizing ROAS and market penetration.",
    image: "/Performance-Marketing.jpg?key=multi-channel-marketing",
    results: ["650% ROAS achieved", "12 marketing channels", "2M+ qualified impressions", "Industry-leading CTR"],
    date: "2024-2025",
    location: "Asia-Pacific",
    icon: TrendingUp,
  },
]

const filters = ["All Projects", "Import-Export", "Fashion Retail", "Digital Advertising"] as const

type FilterType = typeof filters[number]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Projects")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Projects & Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Discover our successful projects across import-export, fashion retail, and digital advertising. Real
                results for real businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((f) => (
                <Button
                  key={f}
                  variant={activeFilter === f ? "default" : "outline"}
                  onClick={() => setActiveFilter(f)}
                  className={`${activeFilter === f ? "bg-accent text-accent-foreground" : ""} cursor-pointer`}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-sm text-muted-foreground text-center">
              Showing {filteredProjects.length} of {projects.length}
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => {
                const IconComponent = project.icon
                return (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-accent" />
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.results.map((result, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Case Study
                      </Button> */}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-primary-foreground/90">Measurable results across all our business divisions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-primary-foreground/90">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">$25M+</div>
                <div className="text-primary-foreground/90">Client Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-primary-foreground/90">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-primary-foreground/90">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven expertise in international trade, fashion retail,
              and digital marketing.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
