
import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import { Mail, Linkedin, Github } from 'lucide-react';

const Index = () => {
  const handleEmailClick = () => {
    window.open('mailto:siddunikhilesh517@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/siddu-nikhilesh-35a3b52b9/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/SIDDU2402', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <button
                onClick={handleEmailClick}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 glow-hover transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleLinkedInClick}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 glow-hover transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleGitHubClick}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 glow-hover transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <p className="text-muted-foreground">
                © 2024 Engineering Portfolio. Built with passion and React.
              </p>
              <p className="text-sm text-muted-foreground/60 mt-2">
                Designed to inspire • Engineered to impress
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
