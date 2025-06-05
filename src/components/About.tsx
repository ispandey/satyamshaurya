
import React from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "UGC NET Qualified",
      description: "Computer Science & Applications (Dec 2024, June 2024)"
    },
    {
      icon: Award,
      title: "Research Focus",
      description: "AI, Geospatial Analysis, and Cybersecurity"
    },
    {
      icon: Users,
      title: "Teaching Excellence",
      description: "Assistant Faculty & Curriculum Development"
    },
    {
      icon: BookOpen,
      title: "Academic Leadership",
      description: "Research Publications & Institutional Collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate Data Science and Computational Science professional with expertise 
            in AI, cybersecurity, and academic research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Summary</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                As a Data Science and Computational Science professional, I bring together 
                theoretical knowledge and practical application in the fields of Artificial 
                Intelligence, Geospatial Analysis, and Cybersecurity.
              </p>
              <p>
                My academic journey is complemented by hands-on teaching experience and 
                curriculum development for undergraduate computer science courses. I am 
                UGC NET qualified and have demonstrated experience in applied research 
                and academic leadership.
              </p>
              <p>
                I am passionate about bridging the gap between academia and industry, 
                fostering innovation through research, and contributing to the advancement 
                of technology education.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                    <p className="text-slate-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
