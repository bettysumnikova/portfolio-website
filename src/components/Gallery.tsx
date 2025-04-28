import React from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  description: string;
  title: string;
}

Modal.setAppElement('#root');

const Gallery: React.FC<GalleryProps> = ({ isOpen, onClose, images, description, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-6xl mx-auto mt-20 bg-white p-6 rounded-lg shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black/70 z-50 overflow-y-auto px-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-text">{title}</h3>
        <button
          onClick={onClose}
          className="text-text/60 hover:text-accent transition-colors duration-300"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="bg-accent/5 p-6 rounded-lg">
        <p className="text-text/80 leading-relaxed">{description}</p>
      </div>
    </Modal>
  );
};

export default Gallery;