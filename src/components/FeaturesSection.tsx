import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Workflow,
      title: "Smart Automation Workflows",
      description: "Create complex drip campaigns with visual workflow builder. Set triggers, conditions, and actions that respond to customer behavior automatically.",
      benefits: ["Visual drag-drop builder", "Behavioral triggers", "A/B testing integrated"]
    },
    {
      icon: Target,
      title: "Advanced Segmentation",
      description: "Target the right audience with precision segmentation based on demographics, behavior, purchase history, and engagement patterns.",
      benefits: ["Dynamic segmentation", "Real-time updates", "Custom field targeting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track performance with detailed analytics. Monitor open rates, click-through rates, conversions, and ROI across all campaigns.",
      benefits: ["Real-time dashboards", "Custom reports", "ROI tracking"]
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Guide prospects through your sales funnel with personalized email sequences that adapt based on engagement and behavior.",
      benefits: ["Personalized content", "Lead scoring", "Sales integration"]
    },
    {
      icon: Mail,
      title: "Email Template Designer",
      description: "Create stunning, responsive emails with our intuitive template designer. No coding required - just drag, drop, and customize.",
      benefits: ["Mobile responsive", "Brand customization", "Template library"]
    },
    {
      icon: Clock,
      title: "Optimal Send Times",
      description: "AI-powered send time optimization ensures your emails reach recipients when they're most likely to engage.",
      benefits: ["AI-powered timing", "Timezone optimization", "Engagement prediction"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Email Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, automate, and optimize your email marketing campaigns. 
            Built for B2B teams who demand results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Email Marketing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of B2B companies already using iEMA to automate their success. 
            Start your free trial today and see results in the first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;