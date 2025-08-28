import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Globe, Users, Award, Shield, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About HAI DANG</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A trusted Hong Kong-based company specializing in international trade, premium fashion retail, and
                innovative digital marketing solutions since our establishment.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    HAI DANG IMPORT AND EXPORT LIMITED was founded with a vision to bridge global markets through
                    reliable trade partnerships and exceptional service quality. Based in the heart of Hong Kong's
                    business district, we have established ourselves as a trusted partner for international commerce.
                  </p>
                  <p>
                    Our journey began with import-export operations, leveraging Hong Kong's strategic position as a
                    global trade hub. Over the years, we have expanded our expertise to include premium fashion retail
                    and cutting-edge digital advertising services.
                  </p>
                  <p>
                    Today, we serve clients across multiple continents, maintaining the highest standards of
                    transparency, compliance, and customer satisfaction that have become our hallmark.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Operating across 25+ countries</p>
                </Card>
                <Card className="text-center p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">50+ professionals worldwide</p>
                </Card>
                <Card className="text-center p-6">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">ISO certified operations</p>
                </Card>
                <Card className="text-center p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
                  <p className="text-sm text-muted-foreground">Full regulatory adherence</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Mission & Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8">
                  <CardContent className="pt-6">
                    <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To facilitate global commerce through innovative solutions, exceptional service, and unwavering
                      commitment to transparency and quality.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center p-8">
                  <CardContent className="pt-6">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Integrity</h3>
                    <p className="text-muted-foreground">
                      We conduct all business with the highest ethical standards, ensuring complete transparency in
                      every transaction and relationship.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center p-8">
                  <CardContent className="pt-6">
                    <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                    <p className="text-muted-foreground">
                      We embrace cutting-edge technologies and methodologies to deliver superior results for our clients
                      in an ever-evolving global marketplace.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <Badge className="bg-accent text-accent-foreground min-w-16 text-center">2020</Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Company Establishment</h3>
                    <p className="text-muted-foreground">
                      HAI DANG IMPORT AND EXPORT LIMITED was officially registered in Hong Kong, establishing our
                      headquarters in Wan Chai's prestigious business district.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Badge className="bg-primary text-primary-foreground min-w-16 text-center">2021</Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Global Expansion</h3>
                    <p className="text-muted-foreground">
                      Expanded operations to serve clients across Asia-Pacific, establishing key partnerships and supply
                      chain networks in major trading hubs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Badge className="bg-accent text-accent-foreground min-w-16 text-center">2022</Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Fashion Division Launch</h3>
                    <p className="text-muted-foreground">
                      Launched our premium fashion retail division, curating high-quality collections from international
                      designers and manufacturers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Badge className="bg-primary text-primary-foreground min-w-16 text-center">2023</Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Digital Innovation</h3>
                    <p className="text-muted-foreground">
                      Introduced comprehensive digital advertising services, helping businesses achieve measurable
                      growth through data-driven marketing strategies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Badge className="bg-accent text-accent-foreground min-w-16 text-center">2024</Badge>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Continued Growth</h3>
                    <p className="text-muted-foreground">
                      Achieved significant milestones in all business divisions while maintaining our commitment to
                      excellence, transparency, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Transparency & Compliance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We maintain the highest standards of corporate governance and regulatory compliance, ensuring complete
                transparency for our clients, partners, and financial institutions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Legal Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Fully registered and compliant with Hong Kong Companies Registry and all relevant regulatory
                      bodies.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Financial Transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular audits and financial reporting ensure complete transparency for banking and verification
                      purposes.
                    </p>
                  </CardContent>
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
