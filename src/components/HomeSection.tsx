import React from 'react';
import { ChevronDown, User } from 'lucide-react';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/10 to-secondary-light/10">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("/assets/images/pattern-bg.jpg")` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-accent-dark">Betty Sumnikova</span>
            </h1>
            <p className="text-lg md:text-xl text-text/80 leading-relaxed mb-8">
              Recent master's graduate in Econometrics and Operational Research, passionate about turning data into actionable insights. With a blend of analytical precision and creativity, I excel at solving complex problems and communicating solutions. Proficient in Python, SQL, and creating interactive dashboards.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent-light/10 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-soft transform hover:scale-105 transition-all duration-300">
              <img
                src="/assets/images/profile-placeholder.png"
                alt="Betty Sumnikova"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-accent hover:text-accent-dark transition-colors duration-300 animate-bounce"
          aria-label="Scroll to work section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HomeSection;