import { Card } from '@/components/ui/card';
import { Code, Brain, Database, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Creating intelligent systems and predictive models"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Passionate About Creating Impact Through Technology
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe perseverance is key to solving complex problems. From tackling demanding university projects to building real-world applications, I’ve learned to approach every challenge with determination and focus. My goal is not just to find a solution, but to deliver a high-quality outcome that makes a real impact. With a passion for AI, data analysis, and software engineering, I combine technical expertise and persistence to transform obstacles into opportunities.
              </p>
              
             

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
