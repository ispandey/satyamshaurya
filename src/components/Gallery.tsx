
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/176ca454-2818-4ab8-904a-0ae28a1ce0ec.png",
      title: "Hackathon Event with Team",
      description: "Participating in innovation and technology competitions"
    },
    {
      src: "/lovable-uploads/bab5a51f-411d-4c27-a194-a8b880f22f02.png",
      title: "INNOHACK 5G Awards Ceremony",
      description: "Recognition ceremony for innovation in technology"
    },
    {
      src: "/lovable-uploads/651adb59-731c-4e30-82bb-294ed137ca09.png",
      title: "Keynote Presentation",
      description: "Delivering insights on cybersecurity and ethical hacking"
    },
    {
      src: "/lovable-uploads/fd575087-06b5-464d-b171-133d6f992fee.png",
      title: "Research Presentation at BHU",
      description: "Presenting research at International Conference on AI and Computer Vision"
    },
    {
      src: "/lovable-uploads/2580bfef-b9ea-404a-899c-4be0f89b1746.png",
      title: "Professional Portrait",
      description: "At academic institutions and professional venues"
    },
    {
      src: "/lovable-uploads/5feda029-3209-48bc-be0a-5471adab3c00.png",
      title: "Group Photo with Participants",
      description: "Community building and academic collaboration"
    }
  ];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Professional Gallery
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">Academic events, conferences, and professional moments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
