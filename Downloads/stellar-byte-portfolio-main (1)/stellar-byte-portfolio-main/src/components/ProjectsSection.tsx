import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Agentic Job Portal",
      description: "Jobnect-Arena is an intelligent job matching platform that leverages NLP to analyze user profiles and job descriptions for precise alignment. It integrates OpenAI-powered agents to deliver dynamic resume enhancements and personalized career recommendations. The agentic AI workflow automates end-to-end user interaction, making the platform adaptive, efficient, and user-centric.",
      tech: ["React", "Node.js", "TypeScript", "OpenAI", "Agentic AI", "NLP"],
      gradient: "from-blue-500 to-purple-600",
      emoji: "📊",
      //demoUrl: "https://demo-iot-dashboard.com",
      githubUrl: "https://github.com/SIDDU2402/jobnect-arena",
      //liveUrl: "https://iot-dashboard-live.com"
    },
    {
      title: "Real-Time Sign Language Translator",
      description: "Sign Language Translator is a real-time translation system that uses computer vision and deep learning to interpret sign language gestures. It leverages NLP to convert recognized gestures into grammatically correct spoken or written language. This project bridges communication gaps by enabling seamless interaction between hearing and speech-impaired individuals and the broader community.",
      tech: ["Python", "TensorFlow", "Flask", "CNN", "OpenCV", "NLP","Keras"],
      gradient: "from-green-500 to-teal-600",
      emoji: "🤖",
     // demoUrl: "https://demo-study-assistant.com",
      githubUrl: "https://github.com/SIDDU2402/Sign-language-translator",
      //liveUrl: "https://study-assistant-live.com"
    },
    {
      title: "Recipie Sharing Platform",
      description: "Recipe Sharing Platform is a simple web-based application that allows users to create, view, and share recipes. It features a basic HTML/CSS/JavaScript frontend and stores recipe data in structured text format. The project serves as a lightweight solution for managing and browsing personal or community-driven cooking content.",
      tech: ["HTML", "CSS", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-yellow-500 to-orange-600",
      emoji: "🌱",
      demoUrl: "https://demo-energy-monitor.com",
      githubUrl: "https://github.com/SIDDU2402/siddu/tree/main/Desktop/Recipie",
      liveUrl: "https://siddu-42rt.vercel.app/"
    },
    {
      title: "BeatSync-AI Music Collaboration",
      description: "Melody Bloom Hub is a modern music streaming and sharing platform built with React and Node.js, offering users a sleek interface to discover and play songs. It allows users to upload tracks, manage playlists, and enjoy a dynamic, interactive music experience. The project combines responsive UI design with backend integration to deliver a smooth and engaging audio platform..",
      tech: ["React", "Node.js", "TypeScript", "Vite",],
      gradient: "from-purple-500 to-pink-600",
      emoji: "🥽",
      demoUrl: "https://demo-vr-campus.com",
      githubUrl: "https://github.com/SIDDU2402/melody-bloom-hub",
      liveUrl: "https://beatsync-steel.vercel.app"
    }
    
  ];

  const handleDemoClick = (demoUrl: string) => {
    window.open(demoUrl, '_blank');
  };

  const handleGitHubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  const handleLiveClick = (liveUrl: string) => {
    window.open(liveUrl, '_blank');
  };

  const handleViewAllClick = () => {
    window.open('https://github.com/SIDDU2402', '_blank');
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:transform hover:scale-105 glow-hover"
              >
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 group-hover:animate-float`}>
                  {project.emoji}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Actions */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleDemoClick(project.demoUrl)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg text-primary text-sm font-medium transition-all duration-300 hover:glow"
                  >
                    <Play className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGitHubClick(project.githubUrl)}
                    className="flex items-center space-x-2 px-4 py-2 bg-muted/20 hover:bg-muted/30 border border-muted/40 rounded-lg text-muted-foreground text-sm font-medium transition-all duration-300 hover:text-foreground"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  
                  <button 
                    onClick={() => handleLiveClick(project.liveUrl)}
                    className="flex items-center space-x-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-accent/40 rounded-lg text-accent text-sm font-medium transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAllClick}
              className="px-8 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg text-primary font-semibold transition-all duration-300 glow-hover transform hover:scale-105"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
