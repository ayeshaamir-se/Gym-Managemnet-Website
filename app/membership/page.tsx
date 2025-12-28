import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function MembershipPage() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      description: "Perfect for getting started",
      features: ["Access to gym equipment", "Locker room access", "24/7 gym access", "Free Wi-Fi", "Mobile app access"],
    },
    {
      name: "Premium",
      price: "59",
      description: "Most popular choice",
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Free guest passes (2/month)",
        "Nutritional guidance",
        "Access to all locations",
        "Discount on personal training",
      ],
    },
    {
      name: "Elite",
      price: "99",
      description: "For serious athletes",
      features: [
        "Everything in Premium",
        "4 personal training sessions/month",
        "Priority class booking",
        "Free protein shakes",
        "Spa & sauna access",
        "Customized meal plans",
        "Recovery room access",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Membership Plans</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Choose the perfect plan for your fitness goals. All plans include access to our world-class facilities
                and expert support.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.popular ? "border-2 border-accent shadow-lg relative" : ""}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your membership with our premium services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Personal Training",
                  price: "60",
                  description: "One-on-one sessions with expert trainers",
                  unit: "per session",
                },
                {
                  name: "Nutrition Coaching",
                  price: "150",
                  description: "Customized meal plans and guidance",
                  unit: "per month",
                },
                {
                  name: "Massage Therapy",
                  price: "80",
                  description: "Sports and recovery massages",
                  unit: "per session",
                },
                {
                  name: "Group Classes",
                  price: "15",
                  description: "Drop-in classes for non-members",
                  unit: "per class",
                },
              ].map((service) => (
                <Card key={service.name}>
                  <CardContent className="pt-6 space-y-4 text-center">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <div>
                      <span className="text-3xl font-bold text-accent">${service.price}</span>
                      <span className="text-sm text-muted-foreground block mt-1">{service.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Can I cancel my membership anytime?",
                  answer:
                    "Yes, all our plans are month-to-month with no long-term commitment. You can cancel anytime with 30 days notice.",
                },
                {
                  question: "Is there a joining fee?",
                  answer:
                    "We occasionally waive joining fees during promotions. Contact us to learn about current offers.",
                },
                {
                  question: "Can I freeze my membership?",
                  answer:
                    "Yes, you can freeze your membership for up to 3 months per year for a small fee of $10/month.",
                },
                {
                  question: "Do you offer student or military discounts?",
                  answer:
                    "Yes! We offer 20% off any membership plan for students and military personnel with valid ID.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-2">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Join FitZone?</h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Start your fitness journey today with a 7-day free trial. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Start Free Trial
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
