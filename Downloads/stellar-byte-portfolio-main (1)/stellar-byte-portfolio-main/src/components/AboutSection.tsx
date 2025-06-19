import React from 'react';
import { GraduationCap, Target, Heart, Award, Users, Lightbulb } from 'lucide-react';
import ProfessionalPhoto from './ProfessionalPhoto';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BTech Engineering",
      description: "Pursuing excellence in engineering with a focus on innovative problem-solving",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions to complex technical challenges",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Tech Enthusiast",
      description: "Always exploring cutting-edge technologies and their real-world applications",
      color: "text-red-400"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, scalable, and maintainable solutions",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills with experience in agile development environments",
      color: "text-purple-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driver",
      description: "Constantly seeking new ways to improve processes and create impactful solutions",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Professional Photo Section */}
            <div className="lg:col-span-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <ProfessionalPhoto />
            </div>

            {/* Enhanced About Content */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Crafting Digital Experiences with 
                  <span className="text-primary"> Engineering Precision</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate BTech Engineering student with a deep love for technology and innovation. 
                  My journey in engineering has been driven by curiosity and the desire to create solutions 
                  that make a positive impact on the world.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding or studying, you'll find me exploring new technologies, 
                  contributing to open-source projects, or working on creative side projects that 
                  challenge my problem-solving skills and push the boundaries of what's possible.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of technology to transform ideas into reality, and I'm 
                  committed to continuous learning and growth in this ever-evolving field.
                </p>
              </div>

              {/* Professional Qualities Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 p-6 rounded-xl bg-card/30 border border-primary/10 hover:border-primary/30 transition-all duration-500 glow-hover hover:transform hover:scale-105 backdrop-blur-sm"
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color} group-hover:rotate-12 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
