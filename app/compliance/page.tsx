"use client"

import type React from "react"

import { useState } from "react"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, FileText, Download, Building2, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function CompliancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<null | { ref: string }>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitSuccess(null)

    // Simulate async submission
    setTimeout(() => {
      const ref = `REF-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
      console.log("Verification request submitted:", formData, ref)
      setIsSubmitting(false)
      setSubmitSuccess({ ref })
      setFormData({ name: "", email: "", company: "", purpose: "", message: "" })
    }, 900)
  }

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Compliance & Verification</h1>
              <p className="text-xl text-muted-foreground">
                Complete transparency and regulatory compliance documentation for banking, KYC verification, and
                business partnership requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Company Information</h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-accent" />
                    Legal Entity Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Company Name</h3>
                      <p className="text-muted-foreground">HAI DANG IMPORT AND EXPORT LIMITED</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Registration Number</h3>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Incorporation Date</h3>
                      <p className="text-muted-foreground">2023</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Jurisdiction</h3>
                      <p className="text-muted-foreground">Hong Kong SAR</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      Registered Address
                    </h3>
                    <p className="text-muted-foreground">
                      8/F., China Hong Kong Tower
                      <br />
                      8-12 Hennessy Road
                      <br />
                      Wan Chai, Hong Kong
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Contact Information
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Primary: info@haidangimex.com</p>
                      <p>Secondary: xnkbaonhi@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Activities */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Business Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Import-Export & Trading</h3>
                      <p className="text-sm text-muted-foreground">
                        International trade facilitation and supply chain management
                      </p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Fashion Retail</h3>
                      <p className="text-sm text-muted-foreground">Online fashion retail and e-commerce operations</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Digital Advertising</h3>
                      <p className="text-sm text-muted-foreground">Digital marketing and advertising services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Legal Documentation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-accent" />
                      Certificate of Incorporation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Official certificate of incorporation issued by the Hong Kong Companies Registry.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Business Registration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Current business registration certificate with Hong Kong authorities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-accent" />
                      Proof of Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Official documentation confirming registered business address.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Financial Statements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Audited financial statements and annual returns as required.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-accent" />
                      Trade Licenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Import-export licenses and trade permits for international operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Insurance Certificates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional indemnity and public liability insurance documentation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Document Access Policy</h3>
                    <p className="text-muted-foreground text-sm">
                      All legal documents are available for verification purposes to legitimate business partners,
                      financial institutions, and regulatory authorities. Please submit a verification request below
                      with your specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Request Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Request Verification Pack</h2>

              <Card>
                <CardHeader>
                  <CardTitle>Verification Request Form</CardTitle>
                  <p className="text-muted-foreground">
                    Submit your request for official documentation and verification materials.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Inline Success Banner */}
                  {submitSuccess && (
                    <div className="mb-6 rounded-lg border border-green-600/30 bg-green-600/10 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-green-700">Request submitted successfully</p>
                          <p className="text-green-700/80">Reference: <span className="font-mono">{submitSuccess.ref}</span>. Our compliance team will reach out within 2-3 business days.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company/Organization *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="purpose">Purpose of Verification *</Label>
                      <Select
                        value={formData.purpose}
                        onValueChange={(value) => setFormData({ ...formData, purpose: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="banking">Banking/Financial Services</SelectItem>
                          <SelectItem value="kyc">KYC/Due Diligence</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                          <SelectItem value="regulatory">Regulatory Compliance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Please specify which documents you require and any additional context..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Verification Request"}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div className="text-sm">
                        <p className="font-medium text-foreground mb-1">Processing Time</p>
                        <p className="text-muted-foreground">
                          Verification requests are typically processed within 2-3 business days. You will receive an
                          email confirmation with the requested documentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
