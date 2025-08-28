import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, Globe } from "lucide-react"
import Link from "next/link"

// Mock article data - in real app this would come from API/database
const article = {
  id: 1,
  title: "Global Trade Trends 2024: Navigating Supply Chain Disruptions",
  content: `
    <p>The global trade landscape continues to evolve rapidly in 2024, with businesses facing unprecedented challenges and opportunities in supply chain management. As international commerce adapts to post-pandemic realities, companies must develop resilient strategies to navigate ongoing disruptions.</p>

    <h2>Key Trends Shaping Global Trade</h2>
    
    <p>Several critical trends are defining the current trade environment:</p>
    
    <ul>
      <li><strong>Supply Chain Diversification:</strong> Companies are moving away from single-source dependencies, creating more resilient multi-regional supply networks.</li>
      <li><strong>Digital Transformation:</strong> Advanced technologies including AI, IoT, and blockchain are revolutionizing trade operations and transparency.</li>
      <li><strong>Sustainability Focus:</strong> Environmental considerations are becoming central to trade decisions, with carbon footprint reduction driving logistics choices.</li>
      <li><strong>Nearshoring and Friendshoring:</strong> Businesses are relocating production closer to end markets or to politically aligned countries.</li>
    </ul>

    <h2>Strategies for Success</h2>
    
    <p>To thrive in this dynamic environment, businesses should consider:</p>
    
    <p><strong>1. Building Flexible Supply Networks</strong><br>
    Develop relationships with multiple suppliers across different regions to reduce dependency risks and ensure continuity of operations.</p>
    
    <p><strong>2. Investing in Technology</strong><br>
    Implement advanced tracking systems, predictive analytics, and automated processes to improve efficiency and visibility across the supply chain.</p>
    
    <p><strong>3. Strengthening Partnerships</strong><br>
    Work closely with experienced trade partners who understand regional markets and can provide local expertise and support.</p>

    <h2>The Hong Kong Advantage</h2>
    
    <p>Hong Kong continues to serve as a crucial gateway for Asian trade, offering unique advantages:</p>
    
    <ul>
      <li>Strategic location connecting East and West</li>
      <li>World-class logistics infrastructure</li>
      <li>Established financial and legal systems</li>
      <li>Free trade policies and minimal restrictions</li>
    </ul>

    <p>As we move through 2024, businesses that embrace flexibility, invest in technology, and partner with experienced trade specialists will be best positioned to capitalize on emerging opportunities while managing ongoing challenges.</p>
  `,
  category: "Import-Export",
  author: "HAI DANG Team",
  date: "2024-01-15",
  readTime: "5 min read",
  image: "/placeholder.svg?key=global-trade-article",
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Article Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/news" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to News
                </Link>
              </Button>

              <div className="mb-6">
                <Badge className="bg-accent text-accent-foreground mb-4">{article.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{article.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">HAI DANG IMPORT AND EXPORT LIMITED</p>
                      <p className="text-sm text-muted-foreground">Your trusted partner in global trade</p>
                    </div>
                  </div>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Badge variant="secondary" className="mb-3">
                    Import-Export
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Hong Kong's Strategic Advantage in Asian Trade
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Understanding Hong Kong's unique position as a gateway to Asian markets...
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Badge variant="secondary" className="mb-3">
                    Digital Marketing
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Digital Marketing ROI: Measuring Success in 2024
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Advanced strategies for tracking and optimizing digital marketing performance...
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
