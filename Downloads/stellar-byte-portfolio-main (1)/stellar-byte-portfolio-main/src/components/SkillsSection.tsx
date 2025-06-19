
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 80, color: "from-red-400 to-red-600" },
        { name: "C++", level: 75, color: "from-purple-400 to-purple-600" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "HTML & CSS", level: 90, color: "from-gray-400 to-gray-600" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-xl font-semibold text-center text-primary mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out animate-pulse-glow`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.5 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Skill Icons */}
          <div className="mt-16 flex justify-center items-center space-x-8 flex-wrap gap-4">
            {['⚛️', '🐍', '☕', '🚀', '🛠️', '⚡', '🌐', '📱'].map((icon, index) => (
              <div 
                key={index}
                className="w-16 h-16 rounded-full bg-card/50 border border-primary/20 flex items-center justify-center text-2xl animate-float hover:glow-hover transition-all duration-300"
                style={{animationDelay: `${index * 0.5}s`}}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
