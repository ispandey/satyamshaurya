
import React from 'react';
import { FileText, Calendar, MapPin, Award } from 'lucide-react';

export const Publications = () => {
  const workshops = [
    "Conducted: Ethical Hacking Awareness Workshop",
    "Delivered: Career Guidance Session for BCA Aspirants", 
    "Facilitated: Digital Safety Seminar – Social Media Awareness",
    "Led: Skill Development Program – Bridging Academia with Industry"
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Publications & Workshops</h2>
          <p className="text-xl text-slate-600">Research contributions and community engagement</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Publication */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Research Publication</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-slate-800 mb-3">
                Development of a Scalable and Transparent Hostel Allotment System (HAS)
              </h4>
              
              <p className="text-blue-600 font-medium mb-3">
                International Conference on Artificial Intelligence and Computer Vision in Medical Domain (AICVMD2025)
              </p>
              
              <div className="space-y-2 text-slate-600 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>DST-CIMS, Institute of Science, Banaras Hindu University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 17, 2025</span>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-slate-800">Key Contributions:</h5>
                <ul className="space-y-1 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Implemented Blockchain for transparent hostel allocation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Applied Machine Learning for predictive analytics and room optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated OpenStreetMap geolocation services for proximity-based recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workshops & Seminars */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Workshops & Seminars</h3>
            </div>

            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{workshop}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Community Impact</h4>
              <p className="text-green-700 text-sm">
                Contributing to knowledge sharing and skill development in cybersecurity, 
                career guidance, and digital safety awareness across academic communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
