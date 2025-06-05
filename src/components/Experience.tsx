
import React from 'react';
import { Calendar, MapPin, Users, BookOpen } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Assistant Faculty Member (Visiting)",
      company: "Banaras Institute of Teachers Education, Varanasi",
      period: "Feb 2025 – Present",
      location: "Varanasi",
      type: "Current",
      subjects: ["C Programming", "Computer Graphics", "Multimedia", "Software Engineering"],
      description: "Teaching undergraduate computer science courses and contributing to curriculum development."
    },
    {
      title: "Guest Faculty",
      company: "Microtek College of Management and Technology, Varanasi",
      period: "Feb 2024 – Jan 2025",
      location: "Varanasi",
      type: "Previous",
      subjects: ["Digital Electronics", "DBMS", "Optimization Techniques", "SAD", "DAA"],
      description: "Delivered comprehensive courses and coordinated academic events. Launched TIH (Innovation Hub) collaboration with IIT Patna."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Teaching Experience</h2>
          <p className="text-xl text-slate-600">Academic positions and contributions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'Current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-lg text-blue-600 font-medium mb-4">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-slate-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                </div>

                <div className="lg:ml-8 mt-4 lg:mt-0">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="w-4 h-4 text-slate-600" />
                      <span className="font-medium text-slate-800">Subjects Taught</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-white px-3 py-1 rounded-md text-sm text-slate-700 border">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
