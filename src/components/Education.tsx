import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  BookOpen,
  Briefcase
} from 'lucide-react';

const Education = () => {
  const education = [
    {
      type: "degree",
      institution: "Ain Shams University",
      degree: "Bachelor of Computer & AI Engineering",
      period: "2023 - 2027",
      location: "Cairo, Egypt",
      status:"Junior",
      description: "Focusing on artificial intelligence, machine learning, software engineering, and data structures. Actively involved in programming competitions and research projects.",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, AI Fundamentals",
        "Programming Languages: Python, C++, Java, JavaScript",
        "Active participant in university coding competitions"
      ],
      icon: <GraduationCap className="h-6 w-6" />,
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  const certifications = [
    {
      type: "internship",
      title: "DEPI Data Analysis Internship",
      organization: "Digital Egypt Pioneers Initiative",
      period: "2025",
      status:"In Progress",
      description: "Intensive hands-on training in data analysis, visualization, and business intelligence tools.",
      skills: [ "Power BI", "Excel", "Statistical Analysis"],
      icon: <Briefcase className="h-6 w-6" />,
      gradient: "from-green-500 to-cyan-500"
    },
    {
      type: "certification",
      title: "AWS Cloud Associate",
      organization: "Amazon Web Services",
      period: "2025",
      status: "In Progress",
      description: "Comprehensive cloud computing certification covering AWS services, architecture, and best practices.",
      skills: ["Cloud Computing", "AWS Services", "DevOps", "Infrastructure"],
      icon: <Award className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const allItems = [...education, ...certifications];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional development through formal education, 
              internships, and industry certifications.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content Card */}
                  <Card className="ml-16 p-6 w-full group hover:shadow-elegant transition-all duration-300 border-accent/20 hover:border-accent/40 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="text-accent mr-3 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {'degree' in item ? item.degree : item.title}
                            </h3>
                            <p className="text-accent font-medium">
                              {'institution' in item ? item.institution : item.organization}
                            </p>
                          </div>
                        </div>
                        <Badge 
                          variant={item.status === 'Completed' ? 'default' : 'secondary'}
                          className={item.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 border-green-200' 
                            : 'bg-blue-100 text-blue-800 border-blue-200'
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.period}
                        </div>
                        {'location' in item && item.location && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights/Skills */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          {item.type === 'degree' ? 'Key Highlights' : 'Skills Gained'}
                        </h4>
                        <ul className="space-y-1">
                          {('highlights' in item ? item.highlights : item.skills)?.map((listItem, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
