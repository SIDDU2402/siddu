
import React from 'react';
import { ChevronDown, Code, Cpu, Zap, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float opacity-30 hover:opacity-70 transition-opacity duration-300">
          <Code className="text-primary w-12 h-12" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-40 hover:opacity-80 transition-opacity duration-300" style={{
          animationDelay: '2s'
        }}>
          <Cpu className="text-accent w-14 h-14" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-35 hover:opacity-75 transition-opacity duration-300" style={{
          animationDelay: '4s'
        }}>
          <Zap className="text-primary w-10 h-10" />
        </div>
        
        {/* Enhanced Rotating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rotate-45 animate-rotate-slow hover:border-primary/50 transition-colors duration-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-accent/15 animate-rotate-slow hover:border-accent/40 transition-colors duration-300" style={{
          animationDirection: 'reverse'
        }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-accent/25 rounded-full animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Heading with enhanced animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text text-glow hover:scale-105 transition-transform duration-300 inline-block">B. Siddi Nikhilesh</span>
          </h1>
          
          {/* Enhanced Tagline */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in font-light" style={{
            animationDelay: '0.5s'
          }}>
            <span className="text-primary font-semibold">Engineering</span> Creative Solutions
          </p>
          
          {/* Professional Subtitle */}
          <p style={{
            animationDelay: '0.8s'
          }} className="text-muted-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed text-lg">
            BTech Engineering Student | Cloud Technologies | AI Enthusiast
            <br />
            <span className="text-primary/80">Passionate about building innovative technology solutions that make a difference</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12" style={{
            animationDelay: '1.2s'
          }}>
            <button className="group px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 glow-hover transform hover:scale-105 hover:-translate-y-1 shadow-lg">
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-10 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 glow-hover transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Download Resume</span>
              </span>
            </button>
            <button className="group px-10 py-4 bg-accent/20 border-2 border-accent/40 text-accent rounded-xl font-semibold hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center space-x-2">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get In Touch</span>
              </span>
            </button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: '1.5s'
          }}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">Fresher</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
