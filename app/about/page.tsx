import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About FitZone</h1>
              <p className="text-lg text-muted-foreground text-balance">
                We are more than just a gym. We are a community dedicated to helping you achieve your fitness goals and
                live a healthier, happier life.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At FitZone, our mission is to empower individuals to reach their full potential through fitness,
                  health, and wellness. We believe that everyone deserves access to world-class facilities, expert
                  guidance, and a supportive community.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We strive to create an environment where members of all fitness levels feel welcome, motivated, and
                  inspired to achieve their personal best.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img src="/people-exercising-in-modern-gym.jpg" alt="Our mission" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl">Community</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive and inclusive environment where everyone feels like they belong. Together, we
                    are stronger.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl">Excellence</h3>
                  <p className="text-muted-foreground">
                    We are committed to providing the highest quality facilities, equipment, and services to help you
                    succeed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve and incorporate the latest fitness trends and technologies to keep you
                    engaged.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certified trainers and staff are here to support you every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Sarah Johnson", role: "Head Trainer", image: "professional female fitness trainer" },
                { name: "Mike Chen", role: "Strength Coach", image: "professional male strength coach" },
                { name: "Emily Rodriguez", role: "Yoga Instructor", image: "professional yoga instructor" },
                { name: "David Kim", role: "Nutrition Expert", image: "professional nutrition coach" },
              ].map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted">
                      <img
                        src={`/.jpg?height=128&width=128&query=${member.image}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art equipment and amenities designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cardio Zone",
                  description: "Premium treadmills, bikes, and ellipticals with entertainment systems",
                  image: "modern cardio gym equipment",
                },
                {
                  title: "Strength Training",
                  description: "Complete selection of free weights and resistance machines",
                  image: "gym weights and strength equipment",
                },
                {
                  title: "Group Classes",
                  description: "Spacious studios for yoga, spin, HIIT, and more",
                  image: "group fitness class studio",
                },
                {
                  title: "Functional Training",
                  description: "Battle ropes, kettlebells, and TRX suspension systems",
                  image: "functional training equipment",
                },
                {
                  title: "Locker Rooms",
                  description: "Clean, spacious facilities with showers and amenities",
                  image: "modern gym locker room",
                },
                {
                  title: "Juice Bar",
                  description: "Healthy smoothies and snacks to fuel your workouts",
                  image: "healthy juice bar counter",
                },
              ].map((facility) => (
                <Card key={facility.title} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={`/.jpg?height=192&width=384&query=${facility.image}`}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 space-y-2">
                    <h3 className="font-semibold text-lg">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Experience the FitZone Difference</h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Visit us today for a free tour and see why thousands choose FitZone for their fitness journey.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Schedule a Tour
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
