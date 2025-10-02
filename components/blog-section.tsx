import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "Why Great Businesses Fail at Scaling And How Process Thinking Solves It",
    excerpt: "Discover the key strategies that help businesses scale efficiently without losing quality or control.",
    date: "March 15, 2025",
    image: "/business-scaling-strategy.png",
  },
  {
    title: "Disaster Management & Emergency Response: How Drones Save Lives",
    excerpt: "Explore how autonomous drones are revolutionizing emergency response and disaster relief operations.",
    date: "March 10, 2025",
    image: "/emergency-drone-rescue.jpg",
  },
  {
    title: "Drone Fleet Management: How Businesses Can Scale Operations Efficiently",
    excerpt: "Learn about the latest innovations in drone fleet management and how they drive operational excellence.",
    date: "March 5, 2025",
    image: "/drone-fleet-management.jpg",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with the latest trends and innovations in drone technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-border group"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-balance line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
