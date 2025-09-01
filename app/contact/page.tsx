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
import { MapPin, Mail, Clock, Building2, Globe, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    service: "",
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
      const ref = `MSG-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
      console.log("Contact form submitted:", formData, ref)
      setIsSubmitting(false)
      setSubmitSuccess({ ref })
      setFormData({ name: "", email: "", company: "", subject: "", service: "", message: "" })
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
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team for international trade, fashion retail, or digital marketing inquiries.
                We're here to help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Office</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="font-medium">HAI DANG IMPORT AND EXPORT LIMITED</p>
                    <p>8/F., China Hong Kong Tower</p>
                    <p>8-12 Hennessy Road</p>
                    <p>Wan Chai, Hong Kong</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Email Us</h3>
                  <div className="text-muted-foreground space-y-2">
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <a href="mailto:info@haidangimex.com" className="text-accent hover:underline">
                        info@haidangimex.com
                        {/* xnkbaonhi@gmail.com */}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Business Development</p>
                      <a href="mailto:xnkbaonhi@gmail.com" className="text-accent hover:underline">
                        xnkbaonhi@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday</p>
                    <p className="font-medium">9:00 AM - 6:00 PM</p>
                    <p>Hong Kong Time (GMT+8)</p>
                    <p className="text-sm mt-2">Weekend inquiries will be responded to on the next business day</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-6 h-6 text-accent" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Inline Success Banner */}
                    {submitSuccess && (
                      <div className="mb-6 rounded-lg border border-green-600/30 bg-green-600/10 p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium text-green-700">Your message has been sent successfully</p>
                            <p className="text-green-700/80">Reference: <span className="font-mono">{submitSuccess.ref}</span>. Our team will respond within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-accent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="import-export">Import-Export & Trading</SelectItem>
                            <SelectItem value="fashion">Fashion Retail</SelectItem>
                            <SelectItem value="digital">Digital Advertising</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="min-h-32 transition-all duration-200 focus:ring-2 focus:ring-accent"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-6">
                {/* Google Maps Embed */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-accent" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                      <iframe
                        src="https://www.google.com/maps?q=8/F.,%20China%20Hong%20Kong%20Tower,%208-12%20Hennessy%20Road,%20Wan%20Chai,%20Hong%20Kong&output=embed"
                        title="Google Maps - HAI DANG IMPORT AND EXPORT LIMITED"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">8/F., China Hong Kong Tower, 8-12 Hennessy Road, Wan Chai, Hong Kong</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=8/F.,%20China%20Hong%20Kong%20Tower,%208-12%20Hennessy%20Road,%20Wan%20Chai,%20Hong%20Kong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-accent hover:underline cursor-pointer"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <CardContent className="pt-0">
                      <Building2 className="w-8 h-8 text-primary mb-2" />
                      <h4 className="font-semibold text-foreground mb-1">Import-Export</h4>
                      <p className="text-xs text-muted-foreground">Trade inquiries and logistics</p>
                    </CardContent>
                  </Card>
                  <Card className="p-4">
                    <CardContent className="pt-0">
                      <Globe className="w-8 h-8 text-accent mb-2" />
                      <h4 className="font-semibold text-foreground mb-1">Fashion Retail</h4>
                      <p className="text-xs text-muted-foreground">Product sourcing and retail</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Response Time */}
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-8 h-8 text-accent" />
                      <div>
                        <h4 className="font-semibold text-foreground">Quick Response</h4>
                        <p className="text-sm text-muted-foreground">
                          We typically respond to all inquiries within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What services do you offer?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      We specialize in three main areas: Import-Export & Trading, Fashion Retail (online store), and
                      Digital Advertising services. Each division offers comprehensive solutions tailored to your
                      business needs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How can I verify your company credentials?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Visit our Compliance & Verification page to request official documentation including our
                      Certificate of Incorporation, Business Registration, and other legal documents for banking or KYC
                      purposes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What are your minimum order requirements?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Minimum order requirements vary by service and product category. For import-export services, we
                      work with businesses of all sizes. Contact us to discuss your specific needs and get a customized
                      quote.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer international shipping?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Yes, we provide comprehensive international shipping solutions including ocean freight, air
                      freight, and land transport. Our fashion retail division ships globally with various delivery
                      options.
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
