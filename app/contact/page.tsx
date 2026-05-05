"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import toast from "react-hot-toast";
import { sendMail } from "@/app/lib/actions";
import PageHero from "@/app/ui/contact/page-hero";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content:
      "Abidjan, Cocody, Angré 9ème tranche, derrière l’immeuble CGK, 06 BP 2253 Abidjan 06",
    link: null,
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+225 27 22 59 68 34",
    link: "tel:+2252722596834",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@adc-conseil.com",
    link: "mailto:info@adc-conseil.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun – Ven : 9h00 – 17h30",
    link: null,
  },
];

const subjects = [
  "Demande d'information",
  "Projet immobilier",
  "Services hôteliers",
  "Tourisme",
  "Partenariat",
  "Autre",
];

export default function Page() {
  const [state, formAction, isSubmitting] = useActionState(sendMail, {
    errors: {},
    message: "",
    timestamp: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    content: "",
  });

const reset = useCallback(
  () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      content: "",
    }),
  [],
);

useEffect(() => {
  if (!state?.message || !state?.timestamp) return;
  
  if (state.errors && Object.keys(state.errors).length > 0) {
    toast.error(state.message);
  } else {
    toast.success(state.message);
    reset();
  }
}, [state, reset]);


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <PageHero
        title="Contactez-nous"
        subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions"
        backgroundImage="/contact-hero.webp"
      />
      <section className="max-w-7xl mx-auto m-large">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Nos coordonnées
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-md shadow p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-foreground mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans
                les plus brefs délais.
              </p>

              <form
        
                action={formAction}
                className="space-y-6 text-primary"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium  mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background  focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Votre nom"
                    />
                    <div>
                      {state?.errors?.name &&
                        state.errors.name.map((error: string) => (
                          <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                          </p>
                        ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium  mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 
                      focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="votre@email.com"
                    />
                    <div>
                      {state?.errors?.email &&
                        state.errors.email.map((error: string) => (
                          <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium  mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background  focus:outline-none focus:ring-2 
                      focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+22 XX XX XX XX"
                    />
                    <div>
                      {state?.errors?.phone &&
                        state.errors.phone.map((error: string) => (
                          <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                          </p>
                        ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium  mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background  focus:outline-none 
                      focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                    <div>
                      {state?.errors?.company &&
                        state.errors.company.map((error: string) => (
                          <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background  focus:outline-none focus:ring-2 
                    focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <div>
                    {state?.errors?.subject &&
                      state.errors.subject.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Message *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background  focus:outline-none focus:ring-2 
                    focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  <div>
                    {state?.errors?.content &&
                      state.errors.content.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md py-small bg-secondary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer 
                  hover:scale-105 transition-all  duration-400 ease-in-out"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
