import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let's Talk About Your Project
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your operations with drone technology? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "info@etherspace.com",
                link: "mailto:info@etherspace.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                link: "tel:+15551234567",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Innovation Drive, Tech City, TC 12345",
                link: "#",
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: "Mon-Fri: 9AM-6PM EST",
                link: "#",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <a href={item.link} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.content}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl animate-fade-in-up">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We serve agriculture, construction, energy, logistics, real estate, mining, and emergency services with specialized drone solutions for each sector.",
              },
              {
                question: "How quickly can you deploy a drone solution?",
                answer:
                  "Depending on project complexity, we can typically deploy within 1-2 weeks after initial consultation and site assessment.",
              },
              {
                question: "Do you provide training for our team?",
                answer:
                  "Yes, we offer comprehensive training programs for your staff, including pilot certification, data analysis, and maintenance procedures.",
              },
              {
                question: "What's included in your service packages?",
                answer:
                  "Our packages include drone hardware, software licenses, data processing, regular maintenance, technical support, and compliance management.",
              },
              {
                question: "Are your services compliant with regulations?",
                answer:
                  "Absolutely. We maintain full compliance with FAA regulations and work closely with local authorities to ensure all operations meet legal requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
