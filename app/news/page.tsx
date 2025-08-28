"use client"

import { useState } from "react"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, Globe, Shirt, TrendingUp } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Global Trade Trends 2024: Navigating Supply Chain Disruptions",
    excerpt:
      "Explore the latest developments in international trade and how businesses can adapt to evolving supply chain challenges in the post-pandemic era.",
    category: "Import-Export",
    author: "HAI DANG Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?key=global-trade-trends",
    featured: true,
    icon: Globe,
  },
  {
    id: 2,
    title: "Sustainable Fashion: The Future of Retail",
    excerpt:
      "How sustainable practices are reshaping the fashion industry and what retailers need to know about eco-conscious consumer behavior.",
    category: "Fashion Retail",
    author: "Fashion Team",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/placeholder.svg?key=sustainable-fashion",
    featured: true,
    icon: Shirt,
  },
  {
    id: 3,
    title: "Digital Marketing ROI: Measuring Success in 2024",
    excerpt:
      "Advanced strategies for tracking and optimizing digital marketing performance with the latest analytics tools and methodologies.",
    category: "Digital Marketing",
    author: "Marketing Team",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "/placeholder.svg?key=digital-marketing-roi",
    featured: false,
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Hong Kong's Strategic Advantage in Asian Trade",
    excerpt:
      "Understanding Hong Kong's unique position as a gateway to Asian markets and how businesses can leverage this advantage.",
    category: "Import-Export",
    author: "Trade Specialists",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "/placeholder.svg?key=hong-kong-trade",
    featured: false,
    icon: Globe,
  },
  {
    id: 5,
    title: "E-commerce Fashion Trends: What's Driving Sales",
    excerpt:
      "Analysis of current e-commerce fashion trends and consumer preferences that are shaping online retail strategies.",
    category: "Fashion Retail",
    author: "E-commerce Team",
    date: "2024-01-03",
    readTime: "5 min read",
    image: "/placeholder.svg?key=ecommerce-fashion-trends",
    featured: false,
    icon: Shirt,
  },
  {
    id: 6,
    title: "AI in Digital Advertising: Automation and Personalization",
    excerpt:
      "How artificial intelligence is revolutionizing digital advertising through advanced automation and personalized customer experiences.",
    category: "Digital Marketing",
    author: "Tech Team",
    date: "2024-01-01",
    readTime: "8 min read",
    image: "/placeholder.svg?key=ai-digital-advertising",
    featured: false,
    icon: TrendingUp,
  },
]

const categories = ["All", "Import-Export", "Fashion Retail", "Digital Marketing"]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">News & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with the latest trends and insights in international trade, fashion retail, and digital
                marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => {
                  const IconComponent = post.icon
                  return (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <IconComponent className="w-4 h-4" />
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          <Link href={`/news/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Button variant="outline" asChild className="bg-transparent">
                          <Link href={`/news/${post.id}`} className="flex items-center gap-2">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => {
                const IconComponent = post.icon
                return (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                    <div className="aspect-video bg-background relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <IconComponent className="w-3 h-3" />
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                        <Link href={`/news/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.author}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/news/${post.id}`}>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on international trade, fashion trends, and digital
              marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-primary-foreground"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
