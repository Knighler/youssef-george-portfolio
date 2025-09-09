import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  Send,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "youssefgngs@gmail.com@gmail.com",
      href: "mailto:youssefgngs@gmail.com",
      description: "For project inquiries and collaborations",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/youssef-george-9372622b2/",
      href: "https://www.linkedin.com/in/youssef-george-9372622b2/",
      description: "Professional networking and career opportunities",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/Knighler",
      href: "https://github.com/Knighler",
      description: "Open source projects and code repositories",
      color: "from-gray-700 to-gray-500"
    },
     {
    icon: <Phone className="h-6 w-6" />,
    title: "WhatsApp",
    value: "+20 1011487095",
    href: "https://wa.me/201011487095",  // ✅ WhatsApp link
    description: "Chat with me directly on WhatsApp",
    color: "from-green-500 to-emerald-500"
    }

  ];

  const quickActions = [
    {
      title: "Download Resume",
      description: "Get my latest CV in PDF format",
      icon: <Send className="h-5 w-5" />,
      action: "Download PDF"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to discuss 
              new opportunities and collaborate on innovative solutions.
            </p>
          </div>

          <div>
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                Get In Touch
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="p-6 group hover:shadow-elegant transition-all duration-300 border-accent/20 hover:border-accent/40 relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        {method.title}
                      </h4>
                      
                      {/* Value */}
                      <a 
                        href={method.href}
                        className="text-accent hover:text-accent-foreground font-medium text-sm mb-2 block transition-colors duration-300 group-hover:underline"
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                        {method.href.startsWith('http') && (
                          <ExternalLink className="inline ml-1 h-3 w-3" />
                        )}
                      </a>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex justify-center">
                {quickActions.map((action, index) => (
                  <Card 
                    key={index}
                    className="p-6 text-center group hover:shadow-elegant transition-all duration-300 border-accent/20 hover:border-accent/40 max-w-sm"
                  >
                    <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      {action.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {action.description}
                    </p>
                   <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <a href="/Youssef_George_Resume.pdf" download>
                        {action.action}
                      </a>
                    </Button>

                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Thank you for visiting my portfolio. I look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
