import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Dumbbell, Users, Trophy, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-20">
            <img src="/gym-workout-equipment-weights.jpg" alt="Gym background" className="w-full h-full object-cover" />
          </div>
          <div className="container relative py-24 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
                Join FitZone and experience world-class fitness facilities, expert trainers, and a supportive community
                dedicated to helping you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground bg-transparent"
                >
                  View Classes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FitZone?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to succeed on your fitness journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Dumbbell className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Modern Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    State-of-the-art machines and free weights for all fitness levels
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Expert Trainers</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified professionals to guide and motivate you every step
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Join thousands who have transformed their lives at FitZone
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Flexible Hours</h3>
                  <p className="text-sm text-muted-foreground">Open 24/7 to fit your busy schedule and lifestyle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Expert Trainers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Classes Weekly</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Your Fitness Journey?</h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Join FitZone today and get access to all our facilities, classes, and expert guidance. Your
                  transformation starts here.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Become a Member Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
