
import React from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "M.Sc. in Computational Science and Applications (Data Science)",
      institution: "Banaras Hindu University, Varanasi",
      period: "2023 – 2025",
      grade: "CGPA: 7.6 (Ongoing)",
      location: "Varanasi"
    },
    {
      degree: "BCA – Bachelor of Computer Applications",
      institution: "Kristu Jayanti College, Bengaluru",
      period: "2019 – 2022",
      grade: "CGPA: 9.06",
      location: "Bengaluru"
    },
    {
      degree: "Higher Secondary (I.Sc.)",
      institution: "Gyansthali School, Bagaha",
      period: "2017 – 2019",
      grade: "Percentage: 65%",
      location: "Bagaha"
    },
    {
      degree: "Matriculation",
      institution: "Montfort Sr. Sec. School, Bagaha",
      period: "2010 – 2017",
      grade: "CGPA: 9.2",
      location: "Bagaha"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600">Academic journey and qualifications</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-8">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-800">{edu.grade}</span>
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
