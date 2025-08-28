import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, BarChart3, Smartphone, Monitor, Search, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DigitalAdvertisingPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Digital Advertising</h1>
              <p className="text-xl mb-8 text-accent-foreground/90">
                Data-driven digital marketing strategies that deliver measurable results and accelerate your business
                growth in the digital landscape.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Start Your Campaign</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Digital Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions designed to maximize your online presence and ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Search Engine Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Strategic SEM campaigns that drive qualified traffic and maximize conversion rates across Google Ads
                    and Bing platforms.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Ads management</li>
                    <li>• Keyword research & optimization</li>
                    <li>• Landing page optimization</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Social Media Advertising</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Targeted social media campaigns across major platforms to build brand awareness and engage your
                    ideal customers.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Facebook & Instagram ads</li>
                    <li>• LinkedIn B2B campaigns</li>
                    <li>• YouTube video advertising</li>
                    <li>• Audience targeting & retargeting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive analytics and reporting solutions providing actionable insights for data-driven
                    decision making.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Analytics setup</li>
                    <li>• Custom dashboard creation</li>
                    <li>• Performance monitoring</li>
                    <li>• ROI analysis & reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Performance Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Results-focused performance marketing campaigns optimized for specific KPIs and business objectives.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CPA optimization</li>
                    <li>• Multi-channel attribution</li>
                    <li>• A/B testing & optimization</li>
                    <li>• Conversion rate optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>Mobile Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Mobile-first advertising strategies designed to reach customers on their preferred devices and
                    platforms.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• App install campaigns</li>
                    <li>• Mobile display advertising</li>
                    <li>• Location-based targeting</li>
                    <li>• Mobile-optimized creatives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Monitor className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Display Advertising</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Strategic display advertising campaigns across premium publisher networks to build brand awareness
                    and drive engagement.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Programmatic advertising</li>
                    <li>• Creative design & testing</li>
                    <li>• Audience segmentation</li>
                    <li>• Brand safety measures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Dashboard Preview */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Performance Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Real-time insights and comprehensive reporting to track your campaign performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">+245%</h3>
                <p className="text-sm text-muted-foreground">Average ROI Increase</p>
              </Card>
              <Card className="text-center p-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">3.2%</h3>
                <p className="text-sm text-muted-foreground">Average CTR</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">1M+</h3>
                <p className="text-sm text-muted-foreground">Monthly Impressions</p>
              </Card>
              <Card className="text-center p-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">24h</h3>
                <p className="text-sm text-muted-foreground">Campaign Launch Time</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive analysis and strategic planning tailored to your business goals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert campaign setup and launch across selected digital channels.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous monitoring and optimization for maximum performance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Reporting</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed performance reports and strategic recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let our digital marketing experts create a customized strategy that delivers measurable results for your
              business.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
