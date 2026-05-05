"use client";

import { LinkButton } from "@/app/ui/link-button";
import { ArrowRight, Check, Clock, Forklift, Package, Route, Sparkles, Truck, Warehouse } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const benefits = [
  "Tarifs compétitifs et flexibles",
  "Maintenance préventive incluse",
  "Opérateurs qualifiés disponibles",
];

const features = [
  {
    icon: Forklift,
    title: "Location d'engins",
    description: "Pelles, bulldozers, niveleuses, compacteurs.",
  },
  {
    icon: Truck,
    title: "Transport matières",
    description: "Sable, gravier, latérite vers vos chantiers.",
  },
  {
    icon: Package,
    title: "Manutention",
    description: "Chargement et déchargement de marchandises.",
  },
  {
    icon: Warehouse,
    title: "Stockage sécurisé",
    description: "Solutions pour matériaux et équipements.",
  },
  {
    icon: Clock,
    title: "Longue durée",
    description: "Contrats flexibles avec maintenance incluse.",
  },
  {
    icon: Route,
    title: "Livraison express",
    description: "Service rapide à Abidjan et en Côte d'Ivoire.",
  },
];
        
const steps = [
  {
    number: "01",
    title: "Besoin",
    description: "Définition des engins, durée et volumes.",
  },
  {
    number: "02",
    title: "Devis",
    description: "Offre personnalisée avec tarifs compétitifs.",
  },
  {
    number: "03",
    title: "Planning",
    description: "Organisation et coordination logistique.",
  },
  {
    number: "04",
    title: "Mise à dispo",
    description: "Livraison avec opérateurs qualifiés.",
  },
  {
    number: "05",
    title: "Support",
    description: "Assistance technique et maintenance continue.",
  },
];
export default function Page() {
    return (
      <main className="min-h-screen">
        <div className="p-small bg-background mb-massive">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center py-medium text-secondary ">
              <Sparkles className="w-6 h-6 text-shadow m-2" />
              <h2 className="text-3xl uppercase font-semibold text-shadow">
                Pôle Logistique
              </h2>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  Logistique & Transport
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-foreground/90 mb-8 max-w-xl"
                >
                  Un parc complet d'engins et une flotte de transport pour
                  acheminer matériaux et équipements partout en Côte d'Ivoire.
                  Efficacité, ponctualité, fiabilité.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-xsmall mb-10"
                >
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-xsmall">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/40 ">
                        <Check
                          className="w-3 h-3 text-secondary"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-medium"
                >
                  <LinkButton href="/contact" size="md">
                    Demander un Conseil
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </LinkButton>
                </motion.div>
              </div>
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative overflow-hidden shadow-sm rounded-sm">
                    <Image
                      src="/services/service-logistique.webp"
                      width={800}
                      height={600}
                      alt="Image service foncier"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 bg-background/40 w-full h-full"></div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
        <div className="p-small mb-massive">
          <section className="max-w-7xl  mx-auto">
            <div className="flex flex-col items-center text-center">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
                ADC Consulting
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-large">
                Nos Prestations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-medium">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="relative p-small md:p-medium bg-white border border-gray-300 shadow-lg rounded-sm 
                    hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <f.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                      <p className="text-sm text-foreground/70">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="p-small">
          <section className=" max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
                ADC Consulting
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-large">
                Notre methode
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative p-5 rounded-sm bg-gray-200 border border-gray-400 shadow hover:-translate-y-xsmall transition-all duration-200"
                  >
                    <div className="text-4xl font-bold text-accent/30 mb-2">
                      {s.number}
                    </div>
                    <h3 className="text-base font-bold mb-2">{s.title}</h3>
                    <p className="text-xs text-foreground/70">
                      {s.description}
                    </p>
                    {i < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 h-5 w-5 text-accent/40 -translate-y-1/2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="p-small bg-primary">
          <section className="py-medium text-center text-white max-w-7xl mx-auto">
            <h2 className="text-xl md:text-3xl font-extrabold text-shadow-lg">
              Optimisez votre logistique chantier
            </h2>

            <p className="mb-large md:text-lg text-sm max-w-3xl mx-auto">
              Accédez à notre parc d'engins et bénéficiez de tarifs avantageux
              pour vos projets de construction.
            </p>

            <div className="flex flex-col md:flex-row gap-medium justify-center">
              <LinkButton href="/contact" size="md" className="uppercase">
                Contactez nous
                <ArrowRight className="ml-small" />
              </LinkButton>
            </div>
          </section>
        </div>
      </main>
    );
}