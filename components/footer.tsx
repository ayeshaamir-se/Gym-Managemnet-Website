import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg">FitZone</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your body, transform your life. Join FitZone for the ultimate fitness experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-accent transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@fitzone.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
