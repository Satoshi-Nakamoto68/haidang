import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="javascript:history.back()" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
