import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Home Decorator",
      content: "The handcrafted pottery I ordered exceeded my expectations. Each piece is unique and beautifully made. CultureCraft is now my go-to for authentic artisan goods!",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Food Enthusiast",
      content: "Amazing selection of cultural snacks! Everything arrived fresh and the flavors are absolutely authentic. It's like traveling the world from my kitchen.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Gift Shopper",
      content: "I've bought several gift sets from CultureCraft and each one has been a hit. The quality and presentation are outstanding. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Real experiences from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border border-border shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
