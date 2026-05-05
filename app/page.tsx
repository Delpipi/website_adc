"use client";

import { motion, useInView } from "motion/react";
import Hero from "./ui/hero";
import { useRef } from "react";
import { ArrowRight, Building2, Calendar, MapPin, Users } from "lucide-react";
import StatItem from "./ui/home/stats";
import Image from "next/image";
import { LinkButton } from "./ui/link-button";

const values = [
  {
    title: "Professionnalisme",
    description:
      "L'excellence au quotidien pour garantir un service de qualité.",
  },
  {
    title: "Responsabilité",
    description: "Assumer nos engagements avec rigueur envers nos partenaires.",
  },
  {
    title: "Intégrité",
    description: "Agir avec éthique et transparence dans toutes nos relations.",
  },
  {
    title: "Communication",
    description:
      "Favoriser l'écoute et le dialogue pour avancer tous ensemble.",
  },
  {
    title: "Innovation",
    description:
      "Oser de nouvelles idées pour anticiper les besoins de demain.",
    color: "bg-accent",
  },
  {
    title: "Expertise",
    description:
      "Maîtriser nos savoir-faire pour offrir les meilleures solutions.",
  },
];

const services = [
  {
    id: "foncier",
    title: "Foncier",
    description:
      "Conseil juridique et procédure foncière, lotissement, morcellement et obtention de titres de propriété.",
    image: "/services/service-foncier.jpg",
    features: [
      "Lotissement",
      "Morcellement",
      "Conseil juridique",
      "Procédures foncières",
    ],
  },
  {
    id: "conseil",
    title: "Conseil",
    description:
      "Accompagnement juridique complet pour l'obtention de titres de propriété et ventes par compensation.",
    image: "/services/service-conseil.jpg",
    features: [
      "Titres de propriété",
      "Vente par compensation",
      "Conseil juridique",
      "Accompagnement légal",
    ],
  },
  {
    id: "btp",
    title: "BTP",
    description:
      "Reprofilage des voiries, VRD et tous travaux de bâtiment et travaux publics.",
    image: "/services/service-btp.jpg",
    features: ["Reprofilage voiries", "VRD", "Travaux publics", "Aménagement"],
  },
  {
    id: "logistique",
    title: "Logistique",
    description:
      "Location d'engins, transport de matières premières et solutions logistiques complètes.",
    image: "/services/service-logistique.jpg",
    features: [
      "Location d'engins",
      "Transport",
      "Matières premières",
      "Parc d'équipements",
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description:
      "Développement agricole, négoce d'engrais et accompagnement agronomique pour optimiser vos rendements.",
    image: "/services/service-agriculture.jpg",
    features: [
      "Développement agricole",
      "Engrais",
      "Conseil agronomique",
      "Négoce",
    ],
  },
];

const stats = [
  { icon: MapPin, value: 500, suffix: "+", label: "Parcelles Aménagées" },
  { icon: Calendar, value: 8, suffix: "", label: "Années d'Expérience" },
  { icon: Building2, value: 20, suffix: "+", label: "Projets BTP Réalisés" },
  { icon: Users, value: 1200, suffix: "+", label: "Clients Satisfaits" },
];

export default function Home() {
  // Créez deux refs distinctes
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const servicesRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <section
        ref={statsRef}
        className="bg-secondary grid grid-cols-2 justify-evenly items-center gap-small p-small md:grid-cols-4 md:py-large"
      >
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} inview={statsInView} />
        ))}
      </section>
      <section className="p-small grid md:grid-cols-2 md:p-massive gap-12 items-center">
        <div className="relative h-100 md:h-150 overflow-hidden">
          <Image
            src="/enseigne-qui-somme-nous.jpg"
            fill
            alt="Siège social ADC CONSULTING"
            className="object-fill rounded-md"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Qui sommes-nous ?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              ADC CONSULTING
            </h2>
            <div className="w-20 h-1 bg-secondary"></div>
          </div>
          <p className="text-lg leading-relaxed">
            Créée en 2017, <strong>ADC CONSULTING</strong> est une entreprise
            ivoirienne de référence spécialisée dans l’aménagement foncier, le
            BTP et la logistique.
          </p>

          <div className="grid grid-cols-1 gap-4 text-sm md:text-base">
            <p>
              Notre force réside dans nos équipes pluridisciplinaires. Nous
              transformons les défis complexes en solutions concrètes, tout en
              garantissant un rapport <strong>qualité/prix optimal</strong> et
              le strict respect de la législation ivoirienne.
            </p>

            <p>
              De l'analyse technique à la conception architecturale, nous
              offrons un accompagnement sur-mesure pour bâtir une Côte d’Ivoire
              prospère et durable au cœur d'une Afrique en mouvement.
            </p>
          </div>

          <div className="p-6 border-l-4 border-secondary rounded-r-lg italic">
            "Devenir une holding de référence à l’horizon 2030 : c’est notre
            vision, portée par l’excellence de nos services et la satisfaction
            de nos clients."
            <p className="not-italic font-bold mt-2">— La Direction Générale</p>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="p-small md:p-massive">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
            ADC Consulting
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight max-w-2xl">
            Pourquoi Nous Choisir
          </h2>

          <div className="w-20 h-1 bg-secondary"></div>

          <p className="text-gray-500 max-w-lg text-lg">
            Nos valeurs fondamentales guident chacune de nos actions et
            garantissent l'excellence de nos prestations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-medium shadow-sm border border-slate-50 
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                   flex flex-col items-start text-left h-full rounded-md"
            >
              <div
                className="w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center mb-6 
                        group-hover:bg-secondary transition-colors duration-300"
              >
                <span className="font-black text-xl text-secondary group-hover:text-white transition-colors duration-300 ">
                  {value.title[0].toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>

              <p className="text-sm text-primary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-primary p-medium text-center text-white md:py-massive">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl font-extrabold mb-large text-shadow-lg">
            Sécurisez votre terrain et évitez les litiges fonciers en Côte
            d’Ivoire
          </h2>

          <p className="mb-large md:text-lg text-sm max-w-3xl mx-auto">
            Vérification de documents, suivi de parcelles, conseils d’experts :
            <span className="font-semibold"> e-foncier.ci</span> vous aide à
            protéger votre investissement foncier, en toute transparence.
          </p>

          <div className="flex flex-col md:flex-row gap-medium justify-center">
            <LinkButton href="#" size="lg" className="md:px-massive">
              Vérifier un terrain
              <ArrowRight className="ml-small" />
            </LinkButton>

            <LinkButton href="#" size="lg" variant="outline" className="text-white">
              Comprendre les risques fonciers
            </LinkButton>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="p-small md:p-massive">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
            Nos Pôles d'Activité
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight max-w-2xl">
            Des Solutions Sur Mesure
          </h2>

          <div className="w-20 h-1 bg-secondary"></div>

          <p className="text-gray-500 max-w-xl text-lg">
            Découvrez nos 5 pôles d'expertise pour répondre à tous vos besoins
            en aménagement, construction et développement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-500 mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <LinkButton variant="outline" href="#contact">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
