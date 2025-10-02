import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogSection } from "@/components/blog-section"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Autonomous Drones in Urban Logistics",
    excerpt:
      "Exploring how AI-powered drones are revolutionizing last-mile delivery in cities worldwide, with insights from our latest deployments.",
    image: "/autonomous-delivery-drone-city.jpg",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Innovation",
  }

  const allPosts = [
    {
      title: "5 Ways Drones Are Transforming Agriculture",
      excerpt:
        "From precision spraying to crop health monitoring, discover how farmers are leveraging drone technology.",
      image: "/agricultural-drone-farming.jpg",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Agriculture",
    },
    {
      title: "Safety First: Best Practices for Industrial Drone Inspections",
      excerpt: "Essential guidelines for conducting safe and effective drone inspections in industrial environments.",
      image: "/industrial-drone-inspection-safety.jpg",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Safety",
    },
    {
      title: "ROI Analysis: Drones vs Traditional Surveying Methods",
      excerpt: "A comprehensive cost-benefit analysis comparing drone surveying to conventional techniques.",
      image: "/drone-surveying-comparison.jpg",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Business",
    },
    {
      title: "Thermal Imaging: Detecting Infrastructure Issues Before They Escalate",
      excerpt: "How thermal drone technology is helping companies prevent costly equipment failures.",
      image: "/thermal-imaging-drone-infrastructure.jpg",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Regulatory Update: New FAA Guidelines for Commercial Drones",
      excerpt: "What businesses need to know about the latest drone regulations and compliance requirements.",
      image: "/drone-regulations-compliance.jpg",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Regulations",
    },
    {
      title: "Case Study: Reducing Construction Delays with Aerial Progress Tracking",
      excerpt: "How one construction firm cut project delays by 40% using our drone monitoring services.",
      image: "/construction-drone-progress-tracking.jpg",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Case Study",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute bottom-20 right-20 w-96 h-96 opacity-5 animate-float-slow">
          <img src="/futuristic-drone-silhouette.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Insights & Innovation
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest trends, case studies, and expert insights in drone technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card rounded-2xl border border-border shadow-xl overflow-hidden animate-fade-in-up hover:glass-strong transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  {featuredPost.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-fit">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <BlogSection />

      {/* All Posts Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">All Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete library of insights and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 text-center animate-glow">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up">Stay Informed</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Subscribe to our newsletter for the latest insights, case studies, and industry updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-400">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
