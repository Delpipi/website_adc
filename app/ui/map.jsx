"use client"
import { useEffect, useRef, useState } from 'react';

export default function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const mapCenter = [5.3780, -3.9780];
  const markerPosition = [5.382992801835527, -3.9749000468223348];

  useEffect(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Charger Leaflet dynamiquement
    const loadLeaflet = async () => {
      // Ajouter le CSS de Leaflet
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);

      // Charger le script Leaflet
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.async = true;
      
      script.onload = () => {
        const L = window.L;
        
        // Initialiser la carte
        const map = L.map(mapRef.current).setView(mapCenter, 13);
        mapInstanceRef.current = map;

        // Ajouter la couche OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        // Ajouter le marqueur
        L.marker(markerPosition)
          .addTo(map)
          .bindPopup('<b>ADC CONSULTING</b>')
          .openPopup();
      };

      document.body.appendChild(script);
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
       height: isMobile ? '250px' : '300px', 
        width: '100%', 
        overflow: 'hidden',
      }} 
      aria-label="Carte de localisation d'adc consulting"
    />
  );
}