
import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Data Science Professional",
    "Computational Science Researcher", 
    "AI & Cybersecurity Expert",
    "Academic Leader"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-teal-900/10"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 animate-fade-in">
            Satyam Shaurya
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-blue-600 font-semibold animate-fade-in">
              {titles[currentTitle]}
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          UGC NET Qualified Computer Science professional specializing in AI, Data Science, 
          and Cybersecurity with a passion for research and academic excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('tel:+917004598971', '_self')}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91-7004598971
          </Button>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-teal-200/30 rounded-full blur-xl"></div>
    </section>
  );
};
