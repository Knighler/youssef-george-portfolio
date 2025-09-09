import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profilePic from '@/assets/profile_pic.jpeg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <img
  src={profilePic}
  alt="Profile picture"
  className="w-56 h-56 mx-auto rounded-full border-4 border-white shadow-lg mb-6"
/>

         

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in">
            Youssef George
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
            AI & Software Engineering Student | Future Data Innovator
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in [animation-delay:0.4s]">
            I combine AI engineering knowledge with strong problem-solving and data analysis skills 
            to build impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in [animation-delay:0.6s]">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg"
            >
              View My Work
            </Button>

            <Button 
              <a 
  href="/Youssef_Geroge_Nabil.pdf" 
  download 
  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg rounded-lg flex items-center"
>
  <Download className="mr-2 h-5 w-5" />
  Download Resume
</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
