"use client"

import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Shield, Lock, FileText, Globe, UserCheck, Database, Cookie, Mail, Timer, Building2, CheckCircle2 } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                We respect your privacy. This policy explains what data we collect, how we use it, and your rights.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">Transparent</Badge>
                <Badge variant="secondary">GDPR-ready</Badge>
                <Badge variant="secondary">CCPA-aware</Badge>
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
                  <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5 text-accent" /> Our Commitment</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  We protect your personal data using reasonable technical and organizational safeguards aligned with industry practices.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-accent" /> Your Control</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  You can access, correct, or delete your data, and opt out of certain processing, subject to applicable law.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5 text-accent" /> Global Use</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  We operate internationally while maintaining strong privacy standards and cross-border safeguards.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Policy Sections */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left rail summary */}
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">At a glance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>We collect contact and interaction data to provide services and support.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>We never sell personal data. Limited sharing with processors under contracts.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>You can request access or deletion at any time.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                      <p>Questions? <Link href="/contact" className="text-accent hover:underline">Contact our team</Link>.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Data Controller</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-accent" /> HAI DANG IMPORT AND EXPORT LIMITED</div>
                    <p>8/F., China Hong Kong Tower<br/>8-12 Hennessy Road<br/>Wan Chai, Hong Kong</p>
                    <p>Primary: <a href="mailto:info@haidangimex.com" className="text-accent hover:underline">info@haidangimex.com</a></p>
                    {/* <p>Primary: <a href="mailto:xnkbaonhi@gmail.com" className="text-accent hover:underline">xnkbaonhi@gmail.com</a></p> */}
                  </CardContent>
                </Card>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Database className="w-5 h-5 text-accent" /> Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Contact details (name, email, company) when you submit forms.</li>
                      <li>Interaction data (messages, preferences, service interests).</li>
                      <li>Device and usage data (browser, pages visited) in aggregate for improvements.</li>
                    </ul>
                    <p>We collect data directly from you and through limited cookies (see Cookies section).</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-accent" /> How We Use Data</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provide and improve our services and support.</li>
                      <li>Respond to inquiries and manage business relationships.</li>
                      <li>Ensure site functionality, security, and compliance.</li>
                      <li>Send service-related communications (no spam).</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5 text-accent" /> Legal Bases</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>We process data based on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Legitimate interests (operate and secure our services).</li>
                      <li>Contract performance (responding to requests, onboarding).</li>
                      <li>Consent where required (e.g., marketing preferences).</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5 text-accent" /> Sharing & Transfers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>We do not sell personal data. We may share limited data with:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Service providers under data processing agreements.</li>
                      <li>Authorities when required by law.</li>
                    </ul>
                    <p>Cross-border transfers include appropriate safeguards such as contractual clauses.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Timer className="w-5 h-5 text-accent" /> Data Retention</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    We retain data only as long as necessary for the purposes outlined, unless a longer period is required by law.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-accent" /> Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="access">
                        <AccordionTrigger className="cursor-pointer">Access & Correction</AccordionTrigger>
                        <AccordionContent>
                          Request a copy of your data and ask us to correct inaccuracies.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="erasure">
                        <AccordionTrigger className="cursor-pointer">Deletion</AccordionTrigger>
                        <AccordionContent>
                          Ask us to delete your personal data, subject to legal obligations.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="restrict">
                        <AccordionTrigger className="cursor-pointer">Restriction & Objection</AccordionTrigger>
                        <AccordionContent>
                          Object to or restrict processing in certain circumstances.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="portability">
                        <AccordionTrigger className="cursor-pointer">Data Portability</AccordionTrigger>
                        <AccordionContent>
                          Obtain your data in a portable format where applicable.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <p className="mt-3">To exercise your rights, please <Link href="/contact" className="text-accent hover:underline">contact us</Link>.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Cookie className="w-5 h-5 text-accent" /> Cookies</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>We use essential and limited analytics cookies to ensure site functionality and improve performance. You can control cookies via your browser settings.</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Security</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    We employ reasonable safeguards to protect data against unauthorized access, alteration, and loss.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-accent" /> Third-Party Links</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Our site may include links to third-party sites. Their privacy practices are governed by their own policies.
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-accent" /> Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-3">
                    <p>Questions about this policy? Reach our privacy team at <a href="mailto:info@haidangimex.com" className="text-accent hover:underline">info@haidangimex.com</a>.</p>
                    {/* <p>Questions about this policy? Reach our privacy team at <a href="mailto:xnkbaonhi@gmail.com" className="text-accent hover:underline">xnkbaonhi@gmail.com</a>.</p> */}
                    <div className="flex gap-3">
                      <Button asChild variant="outline"><Link href="/compliance">Compliance & Verification</Link></Button>
                      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link href="/contact">Contact Us</Link></Button>
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
