// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-20T16:58:30.444Z
// Section: services
// Category: services
// Template ID: services-c001
// Page: Services
// Component: Services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  ArrowRight
} from "lucide-react"

export default function ServicesCardGrid() {
  const services = [
    {
      id: "banking-as-a-service",
      title: "Banking as a Service",
      description: "Seamless integration of banking features and functionality into your digital platforms.",
      icon: Rocket,
      badge: "Featured",
      features: ["Flexible APIs", "Compliance & Regulation", "Scalable Infrastructure"],
      link: "/services/banking-as-a-service"
    },
    {
      id: "lending-solutions",
      title: "Lending Solutions",
      description: "Empower your customers with flexible and customizable lending options.",
      icon: BarChart3,
      features: ["Credit Decisioning", "Loan Origination", "Portfolio Management"],
      link: "/services/lending-solutions"
    },
    {
      id: "payment-processing",
      title: "Payment Processing",
      description: "Secure and reliable payment processing solutions to streamline your financial transactions.",
      icon: Globe,
      badge: "New",
      features: ["Multiple Payment Methods", "Fraud Protection", "Real-time Reporting"],
      link: "/services/payment-processing"
    },
    {
      id: "digital-wallets",
      title: "Digital Wallets",
      description: "Offer your customers a seamless and secure digital banking experience.",
      icon: Smartphone,
      features: ["Contactless Payments", "Loyalty Programs", "Personal Finance Management"],
      link: "/services/digital-wallets"
    },
    {
      id: "compliance-and-risk",
      title: "Compliance & Risk",
      description: "Comprehensive solutions to help you navigate the complex regulatory landscape.",
      icon: Shield,
      features: ["Regulatory Monitoring", "Audit & Reporting", "Cybersecurity"],
      link: "/services/compliance-and-risk"
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Unlock valuable insights from your financial data to drive informed decision-making.",
      icon: Cloud,
      features: ["Predictive Modeling", "Personalized Recommendations", "Business Intelligence"],
      link: "/services/data-analytics"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            BankX Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how BankX's comprehensive suite of financial services can help your business thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to take your business to the next level?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started with BankX
            </Button>
            <Button size="lg" variant="outline">
              Explore All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}