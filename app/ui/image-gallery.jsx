'use client'

import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image';

// The carousel styling is required for react-multi-carousel
import 'react-multi-carousel/lib/styles.css'; 
// The default styling for the lightbox is required
import 'yet-another-react-lightbox/styles.css'; 

// --- 1. Define Image Data ---
const images = [
    { id: 1, src: '/disponibilites/cocody-vallon-1.webp', alt: 'Cocody vallon' },
    { id: 2, src: '/disponibilites/yop-locodjoro.webp', alt: 'Yopougon Locodjoro' },
    { id: 3, src: '/disponibilites/bingerville-nouvelle-gare.webp', alt: 'Bingerville Nouvelle gare' },
    { id: 4, src: '/disponibilites/bassam-carrefour-roi.webp', alt: 'Bassam Carrefour Roi' },
    { id: 5, src: '/disponibilites/bassam-modeste.webp', alt: 'Bassam Modeste' },
    { id: 6, src: '/disponibilites/bonoua-2eme-feu.webp', alt: 'Bonoua 2eme Feu' },
    { id: 7, src: '/disponibilites/bonoua-mairie.webp', alt: 'Bonoua Marie' },
    
];

// --- 2. Define Responsive Settings ---
const responsive = {
  // Desktop: 5 images shown (max width to 4000)
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  // Tablet: 2 images shown (from 464px to 1024px)
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  // Mobile: 1 image shown (up to 464px)
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ImageGallery() {
  // State for the Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to open the lightbox when an image is clicked
  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };
  
  // Adapt the image data structure for the Lightbox component
  const lightboxSlides = images.map(img => ({ src: img.src }));

  return (
    <div className='py-medium'>
      <Carousel
        // Responsive Settings
        responsive={responsive}
        // Autoplay Settings
        autoPlay={true}
        autoPlaySpeed={3000} // 3 seconds interval
        infinite={true}
        itemClass="px-xsmall"
        pauseOnHover={true}
        // General Settings
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} // Optionally hide arrows on smaller screens
      >
        {images.map((img, index) => (
          <div key={img.id} onClick={() => openLightbox(index)} className='hover:shadow-sm transition-all duration-500 hover:-translate-y-3 cursor-pointer relative'>
            {/* The style below ensures a consistent look for the images in the carousel */}
            <Image 
              src={img.src}
              width={550}
              height={550}
              alt={img.alt} 
            />
          </div>
        ))}
      </Carousel>

      {/* --- Lightbox Implementation --- */}
      <Lightbox
        // Data and State
        slides={lightboxSlides}
        open={lightboxOpen}
        index={selectedIndex}
        // Actions
        close={() => setLightboxOpen(false)}
      />
    </div>
  );
}
