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
                I’m a Computer and Artificial Intelligence Engineering student with a strong foundation
                in machine learning, natural language processing, and systems programming. I enjoy
                building end-to-end solutions — from research-oriented ML models to production-ready
                web applications — and focus on delivering high-quality, maintainable software.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Soft Skills</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Problem Solving & Critical Thinking</li>
                    <li>Team Collaboration & Communication</li>
                    <li>Adaptability & Continuous Learning</li>
                    <li>Time Management & Working Under Pressure</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Arabic — Native</li>
                    <li>English — Proficient</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
