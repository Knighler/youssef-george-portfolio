import { Card } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  BarChart3, 
  FileSpreadsheet, 
  Braces,
  Hash,
  Terminal,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: <Code className="h-8 w-8" />,
      level: 90,
      color: "from-blue-500 to-yellow-400"
    },
    {
      name: "JavaScript",
      icon: <Braces className="h-8 w-8" />,
      level: 85,
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "C++",
      icon: <Terminal className="h-8 w-8" />,
      level: 80,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "C#",
      icon: <Hash className="h-8 w-8" />,
      level: 75,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "SQL",
      icon: <Database className="h-8 w-8" />,
      level: 85,
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Power BI",
      icon: <BarChart3 className="h-8 w-8" />,
      level: 80,
      color: "from-yellow-500 to-red-500"
    },
    {
      name: "MS Excel",
      icon: <FileSpreadsheet className="h-8 w-8" />,
      level: 90,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Machine Learning",
      icon: <Cpu className="h-8 w-8" />,
      level: 75,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of programming languages, frameworks, and tools 
              that I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 text-center group hover:shadow-elegant transition-all duration-300 skill-hover border-accent/20 hover:border-accent/40"
              >
                {/* Icon */}
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  {skill.name}
                </h3>
                
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React", "Node.js", "Git", "Docker", "AWS", "MongoDB", 
                "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Jupyter"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;