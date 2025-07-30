import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Goldman",
      title: "VP Marketing",
      company: "TechCorp",
      avatar: "SG",
      rating: 5,
      content: "iEMA transformed our email marketing completely. We saw a 245% increase in lead conversion within 3 months. The automation workflows are incredibly intuitive and powerful.",
      metric: "245% increase in conversions"
    },
    {
      name: "Michael Chen",
      title: "Growth Director",
      company: "InnovateBI",
      avatar: "MC",
      rating: 5,
      content: "The ROI calculator showed we'd save 20 hours per week on email campaigns. After 6 months, we're actually saving 30+ hours. The team can focus on strategy instead of manual tasks.",
      metric: "30+ hours saved weekly"
    },
    {
      name: "Jessica Rodriguez",
      title: "Marketing Manager",
      company: "ScaleUp Solutions",
      avatar: "JR",
      rating: 5,
      content: "Best email automation platform we've used. The segmentation features are incredibly detailed, and the analytics give us insights we never had before. Customer support is outstanding.",
      metric: "180% improvement in engagement"
    },
    {
      name: "David Thompson",
      title: "CEO",
      company: "B2B Dynamics",
      avatar: "DT",
      rating: 5,
      content: "iEMA's automation helped us scale our outreach without scaling our team. We're reaching 5x more prospects with better personalization than ever before.",
      metric: "5x more prospects reached"
    },
    {
      name: "Amanda Foster",
      title: "Sales Director",
      company: "ProGrowth LLC",
      avatar: "AF",
      rating: 5,
      content: "The lead nurturing sequences are game-changing. Our sales team gets warmer leads, and our close rate has improved by 65%. Integration with our CRM was seamless.",
      metric: "65% higher close rate"
    },
    {
      name: "Robert Kim",
      title: "Marketing Head",
      company: "Enterprise Plus",
      avatar: "RK",
      rating: 5,
      content: "We switched from three different tools to just iEMA. The all-in-one platform saved us $3,000 monthly and gave us better results. The template designer is fantastic.",
      metric: "$3,000 monthly savings"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}10,000+ Companies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what B2B marketing teams around the world 
            are saying about their success with iEMA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Metric */}
                <div className="bg-primary/5 rounded-lg p-3 mb-6">
                  <p className="text-sm font-semibold text-primary">{testimonial.metric}</p>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by marketing teams at companies of all sizes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-lg font-bold">TechCorp</div>
            <div className="text-lg font-bold">InnovateBI</div>
            <div className="text-lg font-bold">ScaleUp Solutions</div>
            <div className="text-lg font-bold">Enterprise Plus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;