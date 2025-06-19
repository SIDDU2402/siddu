import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to collaborate?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always excited to work on innovative projects and connect with 
                  fellow tech enthusiasts. Whether you have a project idea, job opportunity, 
                  or just want to chat about technology, I'd love to hear from you!
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">siddunikhilesh517@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Social Icons */}
              <div className="flex space-x-4 pt-4">
                {['💼', '🐙', '🐦', '📱'].map((icon, index) => <div key={index} className="w-12 h-12 rounded-full bg-card/50 border border-primary/20 flex items-center justify-center text-xl animate-float hover:glow-hover transition-all duration-300 cursor-pointer" style={{
                animationDelay: `${index * 0.5}s`
              }}>
                    {icon}
                  </div>)}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full pl-12 pr-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:border-primary/60 focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground glow-hover" required />
                </div>
                
                {/* Email Field */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full pl-12 pr-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:border-primary/60 focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground glow-hover" required />
                </div>
                
                {/* Message Field */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={5} className="w-full pl-12 pr-4 py-3 bg-card/50 border border-primary/20 rounded-lg focus:border-primary/60 focus:outline-none transition-all duration-300 text-foreground placeholder-muted-foreground resize-none glow-hover" required />
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="w-full flex items-center justify-center space-x-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow-hover transform hover:scale-105">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
              
              {/* Form Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;