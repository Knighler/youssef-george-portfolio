import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  BookOpen, 
  Globe, 
  BarChart3, 
  Brain,
  ShoppingCart,
  Shuffle
} from 'lucide-react';
import { useState } from 'react';
import onlineCoursesImg from "@/assets/onlineCourseImg.png";
import layoffsImg from "@/assets/layoffsImg.png";

// Simple modal for showing images
const ImageModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-xl max-w-3xl">
        <img src={image} alt="Project demo" className="max-h-[80vh] rounded-lg" />
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    {
      title: "Online Courses Store Data Analysis",
      description: "Comprehensive analysis of online course marketplace data, providing insights on pricing strategies, popular categories, and market trends.",
      icon: <BarChart3 className="h-6 w-6" />,
      tags: [ "Power BI"],
      category: "Data Analysis",
      gradient: "from-green-500 to-cyan-500",
      demoImage: onlineCoursesImg // image for popup
    },
    {
      title: "Companies Layoffs Data Analysis",
      description: "Comprehensive analysis of Layoffs and funds raised for different companies, which provides crucial insights for taking important decisions",
      icon: <BarChart3 className="h-6 w-6" />,
      tags: [ "Power BI"],
      category: "Data Analysis",
      gradient: "from-green-500 to-cyan-500",
      demoImage: layoffsImg// image for popup
    },
    {
      title: "Blog Website",
      description: "A full-featured personal blog with user authentication, rich text editor, and responsive design. Built with modern web technologies for optimal performance.",
      icon: <BookOpen className="h-6 w-6" />,
      tags: ["React", "Node.js", "MongoDB", "Authentication"],
      category: "Web Development",
      gradient: "from-blue-500 to-purple-600",
      codeLink: "https://github.com/Knighler/Blog_Custom_API"
    },
    {
      title: "Orrery Solar System Simulation",
      description: "Interactive 3D visualization of planetary orbits with real astronomical data. Features accurate celestial mechanics and stunning visual effects.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["JavaScript", "HTML", "CSS"],
      category: "Visualization",
      gradient: "from-orange-500 to-red-500",
      codeLink: "https://github.com/Knighler/Orerry"
    },
     {
      title: "Travel Tracker App",
      description: "Interactive websites where differetn users can use a map to to highlight the places they visted around the worls. Users can sign in with different accounts and each can have a customized page",
      icon: <Globe className="h-6 w-6" />,
      tags: ["JavaScript", "Animation","HTML","CSS"],
      category: "Web Development",
      gradient: "from-orange-500 to-red-500",
      codeLink: "https://github.com/Knighler/Travel_Tracker_Map"
    }
   
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work spanning web development, data analysis, 
              machine learning, and software engineering.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 project-card border-accent/20 hover:border-accent/40 overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="p-6 relative z-10">
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="mb-4 text-xs font-medium bg-accent/10 text-accent border-accent/20"
                  >
                    {project.category}
                  </Badge>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center mb-4">
                    <div className="text-accent mr-3 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demoImage && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setModalImage(project.demoImage)}
                        className="flex-1 group/btn border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        Demo
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="flex-1 group/btn border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              These are just a few highlights from my portfolio. Check out my GitHub 
              for more projects and contributions to open-source initiatives.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={!!modalImage} 
        onClose={() => setModalImage(null)} 
        image={modalImage} 
      />
    </section>
  );
};

export default Projects;
