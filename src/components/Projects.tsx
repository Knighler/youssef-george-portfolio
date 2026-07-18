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
      title: "Abstractive Long-Document Summarizer",
      description: "Fine-tuned PEGASUS transformer with 8-bit QLoRA, structural preprocessing to remove bibliography pollution, and a dual-stage Map-Reduce token-slicing pipeline for long scientific papers. Evaluated with ROUGE and BERTScore.",
      icon: <Brain className="h-6 w-6" />,
      tags: ["PyTorch", "HuggingFace", "QLoRA"],
      category: "NLP / Research",
      gradient: "from-indigo-500 to-violet-500",
      codeLink: "https://github.com/Knighler/Abstractive-Summarization-For-Research-Papers"
    },
    {
      title: "Text-to-Image Latent Diffusion Model",
      description: "Implemented a DDPM-based text-conditioned diffusion pipeline for 64x64 face synthesis with CLIP conditioning, custom cross-attention layers and classifier-free guidance.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["PyTorch", "Diffusion", "CLIP"],
      category: "Generative Models",
      gradient: "from-pink-500 to-orange-400",
      codeLink: "https://github.com/Knighler/UNET-CLIP-Diffusion-Image-Generation"
    },
    {
      title: "Egyptian Financial Advisor (Agentic RAG)",
      description: "Agentic RAG system providing personalized investment advice using BigQuery for market analytics and Firestore for user profiles; ELT pipeline with Terraform and Kestra and a FastAPI backend with a ReAct agent.",
      icon: <BarChart3 className="h-6 w-6" />,
      tags: ["FastAPI", "BigQuery", "LangChain"],
      category: "Production ML",
      gradient: "from-green-500 to-teal-400",
      codeLink: "https://github.com/Knighler/Egyptian-Financial-Advisor"
    },
    {
      title: "Semantic Analyzer for Amazon Reviews",
      description: "NLP pipeline to classify Amazon reviews combining text and rating signals; includes preprocessing, training, and model evaluation.",
      icon: <BookOpen className="h-6 w-6" />,
      tags: ["Python", "Pandas", "scikit-learn"],
      category: "NLP",
      gradient: "from-blue-500 to-cyan-500",
      codeLink: "https://github.com/Knighler/Amazon-Sentiment-Analyser"
    },
    {
      title: "Jigsaw Puzzle Automated Solver",
      description: "Reconstructs images from shuffled square pieces using LAB color differences, gradient continuity, Canny edge alignment, and a multi-start greedy assembly with best-buddy scoring.",
      icon: <Shuffle className="h-6 w-6" />,
      tags: ["OpenCV", "Computer Vision"],
      category: "Computer Vision",
      gradient: "from-yellow-500 to-amber-500",
      codeLink: "https://github.com/Knighler/Puzzles-Image-Processing"
    },
    {
      title: "Synchronization Networking Protocol",
      description: "Custom UDP protocol for 2D game synchronization handling packet loss and delays using delta snapshots and selective reliability techniques.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["Networking", "Python", "Sockets"],
      category: "Systems",
      gradient: "from-gray-600 to-slate-500",
      codeLink: "https://github.com/Knighler/game-state-sync-protocol"
    },
    {
      title: "Reddit Clone Website",
      description: "Full-stack social platform replicating Reddit features with an AI-enhanced interactive posting experience.",
      icon: <ShoppingCart className="h-6 w-6" />,
      tags: ["Node.js", "Express", "MongoDB"],
      category: "Web Development",
      gradient: "from-blue-500 to-indigo-500",
      codeLink: "https://github.com/Knighler/Reddit-Clone"
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
  asChild
  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
>
  <a 
    href="https://github.com/Knighler" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github className="mr-2 h-5 w-5" />
    View All Projects
  </a>
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
