
import React from 'react';
import { Trophy, Award, Users, Globe } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: "Top 5 Finalist – IBM Hackathon",
      year: "2020",
      icon: Trophy,
      color: "blue",
      description: "Secured position among top 5 teams in IBM's competitive hackathon"
    },
    {
      title: "Winner – CS Hackathon, Kristu Jayanti College",
      year: "2019", 
      icon: Award,
      color: "gold",
      description: "First place in Computer Science hackathon at Kristu Jayanti College"
    },
    {
      title: "Selected – IIC Hackathon by MHRD",
      year: "2020",
      icon: Users,
      color: "green",
      description: "Selected for Institution's Innovation Council Hackathon by Ministry of HRD"
    },
    {
      title: "Multiple Accolades in Synchronize Fest (KJC)",
      year: "2019-2022",
      icon: Globe,
      color: "purple",
      description: "Consistent recognition in various technical competitions and events"
    }
  ];

  const languages = [
    { language: "English", proficiency: "Proficient" },
    { language: "Hindi", proficiency: "Native" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", icon: "text-blue-600" },
      gold: { bg: "bg-yellow-100", text: "text-yellow-800", icon: "text-yellow-600" },
      green: { bg: "bg-green-100", text: "text-green-800", icon: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", icon: "text-purple-600" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-slate-600">Awards, competitions, and personal information</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <achievement.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-slate-800">{achievement.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-slate-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">{lang.language}</span>
                  <span className="text-slate-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-800">Date of Birth</span>
                <span className="text-slate-600">Jan 01, 2001</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-800">Nationality</span>
                <span className="text-slate-600">Indian</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-800">Location</span>
                <span className="text-slate-600">Bagaha, West Champaran, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
