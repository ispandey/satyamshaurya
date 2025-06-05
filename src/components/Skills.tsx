
import React from 'react';
import { Brain, Code, Shield, Cloud, Database, Users } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science",
      icon: Brain,
      skills: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Pandas", "NumPy", "Matplotlib"],
      color: "blue"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C", "C++"],
      color: "green"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Ethical Hacking", "Penetration Testing"],
      color: "red"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      skills: ["AWS", "GCP"],
      color: "purple"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "orange"
    },
    {
      title: "Development",
      icon: Users,
      skills: ["Software Development", "Agile", "DevOps", "DSA", "OOPs"],
      color: "teal"
    }
  ];

  const certifications = [
    "UGC NET – Computer Science and Applications (Dec 2024, June 2024)",
    "Soft Skills Development – NPTEL (IIT Kharagpur) April 2025",
    "Cloud Computing – NPTEL (IIT Kharagpur) Oct 2024", 
    "Ethical Hacking – NPTEL, ZSecurity (2024)",
    "AWS Certified Solutions Architect (Aug 2022)",
    "Cyber Security Fundamentals – IBM (Oct 2021)",
    "Introduction to Cybersecurity – Cisco (May 2021)"
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800", 
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      teal: "bg-teal-100 text-teal-800"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600">Technologies and competencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color).split(' ')[0]}`}>
                  <category.icon className={`w-6 h-6 ${getColorClasses(category.color).split(' ')[1]}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${getColorClasses(category.color)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-slate-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
