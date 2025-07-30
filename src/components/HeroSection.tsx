import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-glow delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              iEMA Platform - Email Marketing Automation
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automate Your
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Email Success
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your B2B email campaigns with intelligent automation. 
              Drive 3x higher engagement and boost conversions with personalized 
              drip sequences that work 24/7.
            </p>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">
                  <span className="text-primary font-bold">300%</span> Avg. ROI Increase
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">
                  <span className="text-primary font-bold">10,000+</span> B2B Companies
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
            </p>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
              <img
                src={heroImage}
                alt="iEMA Email Marketing Automation Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 hover:bg-gradient-primary/5 transition-all duration-300"></div>
            </div>
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-lg p-4 shadow-card max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">SG</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Goldman</p>
                  <p className="text-xs text-muted-foreground">VP Marketing, TechCorp</p>
                </div>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">
                "iEMA increased our lead conversion by 245% in just 3 months!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;