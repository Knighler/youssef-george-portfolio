import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Globe, 
  Brain, 
  GraduationCap,
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with powerful visualizations and comprehensive reporting.",
      features: [
        "Interactive dashboards with Power BI",
        "Data cleaning and transformation",
        "Statistical analysis and reporting",
        "Custom visualization solutions"
      ],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Create modern, responsive websites and web applications using the latest technologies and best practices.",
      features: [
        "Responsive design for all devices",
        "Modern JavaScript frameworks",
        "Full-stack development",
        "Performance optimization"
      ],
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & ML Solutions",
      description: "Build intelligent systems and predictive models that solve real-world problems using machine learning.",
      features: [
        "Predictive modeling",
        "Custom ML algorithms",
        "Data preprocessing pipelines",
        "AI integration solutions"
      ],
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Consulting & Tutoring",
      description: "Share knowledge and provide guidance in programming, data science, and AI technologies.",
      features: [
        "One-on-one tutoring sessions",
        "Code review and optimization",
        "Technology consulting",
        "Career guidance in tech"
      ],
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs, from data analysis 
              to full-stack development and AI implementation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 group hover:shadow-elegant transition-all duration-300 border-accent/20 hover:border-accent/40 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Icon */}
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-foreground relative z-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 relative z-10">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="text-accent hover:text-accent-foreground hover:bg-accent group/btn relative z-10 p-0"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how I can help bring your ideas to life with the right technology solutions.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="hero-gradient hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;