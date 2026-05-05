import z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .regex(
      /^[a-zA-Z\s']{5,50}$/, // Regex pour accepter lettres, espaces, tirets et apostrophes
      "Le nom et le prénom ne doivent contenir que des lettres, des espaces ou des apostrophes (') et avoir entre 5 et 50 caractères"
    ),

  email: z
    .email("L'adresse email n'est pas valide")
    .min(1, "Votre adresse email est requis"),

  phone: z
    .string()
    .trim()
    .min(1, "Votre contact est requis")
    .regex(/^\+\d(\s?\d)*$/, "Le contact n'est pas valide"),

  company: z
    .string()
    .trim()
    .regex(
      /^[a-zA-Z\s']*$/,
      "Le nom de votre entreprise ne doit contenir que des lettres."
    )
    .default(""),

  subject: z.enum(
    [
      "Demande d'information",
      "Projet immobilier",
      "Services hôteliers",
      "Tourisme",
      "Partenariat",
      "Autre",
    ],
    "L'objet n'est pas valide"
  ),

  content: z
    .string()
    .trim()
    .min(1, "Votre message est requis")
    .min(10, "Votre message doit contenir au moins 20 caractères")
    .max(200, "Votre message ne peut pas dépasser 200 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
