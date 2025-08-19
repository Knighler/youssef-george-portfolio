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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Passionate About Creating Impact Through Technology
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a sophomore studying Computer & AI Engineering at Cairo University, 
                I'm dedicated to building innovative solutions that bridge the gap between 
                artificial intelligence and real-world applications.
              </p>
              
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg font-medium text-accent-foreground italic">
                  "I combine AI engineering knowledge with strong problem-solving and 
                  data analysis skills to build impactful digital solutions."
                </p>
              </div>
              
              <p className="text-muted-foreground">
                Currently expanding my expertise through hands-on projects, internships, 
                and continuous learning. I'm particularly interested in the intersection 
                of AI, data science, and software engineering, where I can leverage 
                cutting-edge technologies to solve complex problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-elegant transition-all duration-300 border-accent/20 hover:border-accent/40 group"
                >
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;