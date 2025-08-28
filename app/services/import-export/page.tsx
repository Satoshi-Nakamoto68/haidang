import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Ship, Truck, Plane, Package, FileText, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ImportExportPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Import-Export & Trading</h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Comprehensive international trade solutions connecting global markets with Hong Kong's strategic
                advantage as a premier trading hub.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get Trade Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Trade Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end international trade solutions designed to streamline your global commerce operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Ship className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Ocean Freight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cost-effective sea freight solutions for large volume shipments with full container and LCL options.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• FCL & LCL services</li>
                    <li>• Door-to-door delivery</li>
                    <li>• Customs clearance</li>
                    <li>• Insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Plane className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Air Freight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fast and reliable air cargo services for time-sensitive shipments with global coverage.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Express delivery options</li>
                    <li>• Temperature controlled</li>
                    <li>• Dangerous goods handling</li>
                    <li>• Real-time tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Truck className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Land Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Efficient overland transportation solutions connecting major trade routes across continents.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cross-border trucking</li>
                    <li>• Rail freight services</li>
                    <li>• Last-mile delivery</li>
                    <li>• Warehousing solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete trade documentation services ensuring compliance with international regulations.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bills of lading</li>
                    <li>• Commercial invoices</li>
                    <li>• Certificates of origin</li>
                    <li>• Export/import permits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Customs Clearance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Expert customs brokerage services ensuring smooth clearance at all major ports worldwide.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Duty optimization</li>
                    <li>• Regulatory compliance</li>
                    <li>• Classification services</li>
                    <li>• Audit support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Supply Chain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Integrated supply chain management optimizing your global logistics operations.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vendor management</li>
                    <li>• Quality control</li>
                    <li>• Inventory optimization</li>
                    <li>• Risk management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Incoterms Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Incoterms Expertise</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { term: "FOB", desc: "Free On Board" },
                  { term: "CIF", desc: "Cost, Insurance & Freight" },
                  { term: "EXW", desc: "Ex Works" },
                  { term: "DDP", desc: "Delivered Duty Paid" },
                  { term: "CFR", desc: "Cost & Freight" },
                  { term: "FCA", desc: "Free Carrier" },
                  { term: "CPT", desc: "Carriage Paid To" },
                  { term: "DAP", desc: "Delivered At Place" },
                ].map((incoterm) => (
                  <Card key={incoterm.term} className="text-center p-4">
                    <CardContent className="pt-4">
                      <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2 mb-2">{incoterm.term}</Badge>
                      <p className="text-sm text-muted-foreground">{incoterm.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Global Trade Network</h2>
                <p className="text-muted-foreground mb-6">
                  Our extensive network spans major trading hubs worldwide, providing seamless connectivity for your
                  international commerce needs.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Asia-Pacific Region</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">North America</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">European Union</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Middle East & Africa</span>
                  </div>
                </div>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Trading
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">25+</h3>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </Card>
                <Card className="text-center p-6">
                  <Ship className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">500+</h3>
                  <p className="text-sm text-muted-foreground">Shipments Monthly</p>
                </Card>
                <Card className="text-center p-6">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">24/7</h3>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </Card>
                <Card className="text-center p-6">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">99.8%</h3>
                  <p className="text-sm text-muted-foreground">On-Time Delivery</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
