
import React from 'react';
import { Calendar, Github, ExternalLink, Code, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: "NextGen Hostel Platform: AI-Powered Hostel Allotment System (HABS)",
      period: "Feb 2025 – Ongoing",
      status: "In Development",
      description: "A centralized platform addressing hostel allocation issues via AI, blockchain, and geospatial technology with real-time availability, GPS navigation, and digital payments.",
      features: [
        "Real-time availability tracking",
        "GPS navigation integration", 
        "Digital payment processing",
        "User role management",
        "AI-powered recommendations"
      ],
      techStack: {
        frontend: ["React (TypeScript)", "Tailwind CSS", "Shadcn UI", "React Query", "Framer Motion"],
        backend: ["Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSockets"],
        apis: ["REST", "JWT auth", "MapMyIndia API", "Zod validation"]
      },
      stakeholders: ["Students", "Hostel Owners", "Admins"]
    },
    {
      title: "College Management System",
      period: "Nov 2021 – Apr 2022",
      status: "Completed",
      description: "Academic portal with comprehensive login system, notifications, and student tracking capabilities.",
      techStack: {
        frontend: ["HTML/CSS"],
        backend: ["PHP", "MySQL"],
        features: ["Student Portal", "Notification System", "Academic Tracking"]
      }
    },
    {
      title: "Share Bazar Simulator",
      period: "Feb 2021 – May 2021", 
      status: "Completed",
      description: "Stock prediction simulator with real-time market data integration for educational trading simulation.",
      techStack: {
        frontend: ["VB.Net"],
        backend: ["MySQL"],
        features: ["Market Data Integration", "Prediction Analytics", "Trading Simulation"]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-xl text-slate-600">Featured work and technical implementations</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'In Development' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-slate-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{project.description}</p>
                </div>
              </div>

              {project.features && (
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Technical Stack</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.techStack.frontend && (
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-slate-800">Frontend</span>
                      </div>
                      <div className="space-y-1">
                        {project.techStack.frontend.map((tech, idx) => (
                          <span key={idx} className="block text-sm text-slate-600">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.techStack.backend && (
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Database className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-slate-800">Backend</span>
                      </div>
                      <div className="space-y-1">
                        {project.techStack.backend.map((tech, idx) => (
                          <span key={idx} className="block text-sm text-slate-600">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.techStack.apis && (
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Cloud className="w-4 h-4 text-purple-600" />
                        <span className="font-medium text-slate-800">APIs & Services</span>
                      </div>
                      <div className="space-y-1">
                        {project.techStack.apis.map((tech, idx) => (
                          <span key={idx} className="block text-sm text-slate-600">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {project.stakeholders && (
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Stakeholders</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stakeholders.map((stakeholder, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {stakeholder}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
