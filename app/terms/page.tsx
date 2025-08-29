"use client"

import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Scale, Shield, FileText, UserCheck, Building2, Globe, Handshake, Info, AlertTriangle, Mail, CheckCircle2 } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms & Conditions</h1>
              <p className="text-lg text-muted-foreground">
                Clear terms for a transparent partnership. Please read this agreement carefully before using our services.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">Transparent</Badge>
                <Badge variant="secondary">Fair Use</Badge>
                <Badge variant="secondary">Global</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Handshake className="w-5 h-5 text-accent" /> Mutual Trust</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  We build long-term relationships grounded in honesty, reliability, and clarity of expectations.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-accent" /> Responsible Use</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Users agree to provide accurate information and use our services lawfully and respectfully.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5 text-accent" /> International Scope</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Operations may span multiple jurisdictions; we uphold applicable laws in each region.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>Using our site signifies agreement with these Terms & Conditions.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>We may update terms; continued use means acceptance of changes.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>Contact us for clarifications before placing orders or sharing data.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Company</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-accent" /> HAI DANG IMPORT AND EXPORT LIMITED</div>
                    <p>8/F., China Hong Kong Tower<br/>8-12 Hennessy Road<br/>Wan Chai, Hong Kong</p>
                    {/* <p>Primary: <a href="mailto:info@haidangimex.com" className="text-accent hover:underline">info@haidangimex.com</a></p> */}
                    <p>Primary: <a href="mailto:xnkbaonhi@gmail.com" className="text-accent hover:underline">xnkbaonhi@gmail.com</a></p>
                  </CardContent>
                </Card>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-accent" /> Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions and all applicable laws. If you do not agree, please discontinue use.</p>
                    <p>These terms complement our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link> and any service-specific agreements.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Info className="w-5 h-5 text-accent" /> Services & Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>We provide import-export, fashion retail, and digital advertising services. We may modify, suspend, or discontinue features with reasonable notice where practicable.</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="trading">
                        <AccordionTrigger className="cursor-pointer">Import-Export & Trading</AccordionTrigger>
                        <AccordionContent>
                          Terms may include minimum order quantities, customs compliance, and logistics arrangements agreed in writing.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="fashion">
                        <AccordionTrigger className="cursor-pointer">Fashion Retail</AccordionTrigger>
                        <AccordionContent>
                          Product availability, sizing, imagery, and prices are subject to change. Returns are handled per our store policy.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="digital">
                        <AccordionTrigger className="cursor-pointer">Digital Advertising</AccordionTrigger>
                        <AccordionContent>
                          Campaign objectives, budgets, and deliverables are defined in proposals or insertion orders.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-accent" /> User Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    You agree not to misuse our services, infringe intellectual property, or violate laws. Provide accurate information and keep account details secure where applicable.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Intellectual Property</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Content on this site (logos, text, images) is owned by us or our licensors and protected by law. Do not copy or redistribute without permission.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-accent" /> Disclaimers & Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>Services are provided "as is" without warranties unless expressly stated. We do not guarantee uninterrupted or error-free operation.</p>
                    <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from use of our services.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Scale className="w-5 h-5 text-accent" /> Governing Law</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    These terms are governed by the laws applicable in Hong Kong SAR, without regard to conflict of law principles.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-accent" /> Changes to Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    We may update these Terms & Conditions from time to time. Updates will be posted here with a revised date. Continued use signifies acceptance.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-accent" /> Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    {/* <p>Questions about these Terms? Email us at <a href="mailto:info@haidangimex.com" className="text-accent hover:underline">info@haidangimex.com</a>.</p> */}
                    <p>Questions about these Terms? Email us at <a href="mailto:xnkbaonhi@gmail.com" className="text-accent hover:underline">xnkbaonhi@gmail.com</a>.</p>
                    <div className="flex gap-3">
                      <Button asChild variant="outline"><Link href="/privacy">Privacy Policy</Link></Button>
                      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link href="/compliance">Compliance</Link></Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
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
