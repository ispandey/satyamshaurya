
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iamsatyampandey@gmail.com",
      href: "mailto:iamsatyampandey@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7004598971",
      href: "tel:+917004598971"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bagaha, West Champaran, Bihar, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "#",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600">
            Let's connect and discuss opportunities in data science, research, and academia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <contact.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Collaborate</h3>
            <div className="space-y-6">
              <p className="text-slate-600">
                I'm always interested in discussing:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Research opportunities in AI and Data Science",
                  "Academic collaborations and projects", 
                  "Teaching and curriculum development",
                  "Cybersecurity consulting and training",
                  "Industry-academia partnerships"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button 
                  onClick={() => window.open('mailto:iamsatyampandey@gmail.com', '_self')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            © 2025 Satyam Shaurya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
