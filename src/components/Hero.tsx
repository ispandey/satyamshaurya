
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-teal-900/10 dark:from-blue-900/20 dark:via-purple-900/15 dark:to-teal-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-teal-200/30 dark:bg-teal-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Profile Image with animations */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full overflow-hidden shadow-2xl animate-fade-in hover:scale-110 transition-transform duration-500 border-4 border-gradient-to-r from-blue-400 to-purple-400">
        <img 
          src="/lovable-uploads/7d7c9ee6-0bb7-44c2-9bde-e98d3a8ec0c4.png" 
          alt="Satyam Shaurya" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Satyam Shaurya
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold animate-fade-in">
              {titles[currentTitle]}
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          UGC NET Qualified Computer Science professional specializing in AI, Data Science, 
          and Cybersecurity with a passion for research and academic excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('tel:+917004598971', '_self')}
            className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91-7004598971
          </Button>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
