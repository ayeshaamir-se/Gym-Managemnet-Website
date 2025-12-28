import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="h-6 w-6 text-accent" />
          <span>FitZone</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About Us
          </Link>
          <Link href="/membership" className="text-sm font-medium hover:text-accent transition-colors">
            Membership
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
            Sign In
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}
