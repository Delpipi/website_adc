"use client";
import Image from "next/image";
import styles from "./overlay.module.css";
import { useState } from "react";
import { LinkButton } from "./link-button";
import { ArrowRight, Building2, MapPin, Scale, Truck,Wheat } from "lucide-react";
import { motion } from "motion/react";

const poles = [
  { icon: MapPin, label: "Foncier" },
  { icon: Scale, label: "Conseil" },
  { icon: Building2, label: "BTP" },
  { icon: Truck, label: "Logistique" },
  { icon: Wheat, label: "Agriculture" },
];

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-125 md:h-150 overflow-hidden">
      {!videoLoaded && (
        <Image
          src="/preload-banner.webp"
          width={1807}
          height={942}
          alt="Preload banner image"
          priority={true}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}
      <iframe
        className={`${
          videoLoaded ? "opacity-100" : "opacity-0"
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] pointer-events-none`}
        src="https://www.youtube.com/embed/l9yJnFsCZj4?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=l9yJnFsCZj4&fs=0&disablekb=1&playsinline=1&vq=hd1080"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Banner video"
        onLoad={() => setVideoLoaded(true)}
      />

      <div className={`${styles.overlay} md:z-10 md:block md:h-150`}></div>

      <div className="absolute w-full px-medium top-5 md:top-30 z-20 text-white">
        <div className="flex flex-col items-center mb-small md:mb-large">
          <h1
            className="text-4xl font-bold text-primary-foreground animate-fade-up animation-delay-100 shadow
          md:text-5xl md:my-small lg:text-6xl"
          >
            Nous donnons vie{" "}
            <span className="text-secondary">à vos projets</span>
          </h1>
          <p className="md:text-xl text-primary-foreground/80 mb-3 leading-relaxed animate-fade-up animation-delay-200">
            Expert en aménagement foncier, BTP, conseil juridique, logistique et
            agriculture. Votre partenaire de confiance pour bâtir l'Afrique de
            demain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300 justify-center items-center">
            <LinkButton href="/poles-activites">
              Découvrir nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              className="text-white"
            >
              Nous contacter
            </LinkButton>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {poles.map((pole, index) => (
              <motion.div
                key={pole.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-2 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-white/50  hover:bg-white/20 transition-colors cursor-pointer
                md:px-4"
              >
                <pole.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{pole.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Poles */}
    </div>
  );
}
