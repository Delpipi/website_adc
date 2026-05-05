"use server";

import { ContactFormData, contactFormSchema } from "./validation";
import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    company?: string[];
    subject?: string[];
    content?: string[];
  };
  message: string;
  timestamp?: number;
};

export async function sendMail(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validateFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    subject: formData.get("subject"),
    content: formData.get("content"),
  });

  if (!validateFields.success) {
    console.error("ERRORS STATUS:", validateFields.error.flatten().fieldErrors);
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Veuillez corriger les erreurs de validation.",
    };
  }

  try {
    const formValues: ContactFormData = validateFields.data;

    const message = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #081c22; border-bottom: 3px solid #081c22; padding-bottom: 10px;">
      Nouveau message depuis le formulaire de contact
    </h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px 0; width: 120px;"><strong>Nom :</strong></td>
        <td style="padding: 8px 0;">${formValues.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Email :</strong></td>
        <td style="padding: 8px 0;">
          <a href="mailto:${
            formValues.email
          }" style="color: #081c22; text-decoration: none;">
            ${formValues.email}
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Téléphone :</strong></td>
        <td style="padding: 8px 0;">
          ${
            formValues.phone
              ? `<a href="tel:${formValues.phone}" style="color: #081c22; text-decoration: none;">${formValues.phone}</a>`
              : '<span style="color: #999;">Non renseigné</span>'
          }
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Entreprise :</strong></td>
        <td style="padding: 8px 0;">
          ${
            formValues.company
              ? formValues.company
              : '<span style="color: #999;">Non renseignée</span>'
          }
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Sujet :</strong></td>
        <td style="padding: 8px 0;">
          <span style="background: #B57E10; color: #000; padding: 4px 10px; border-radius: 4px; font-size: 0.9em;">
            ${formValues.subject}
          </span>
        </td>
      </tr>
    </table>
    
    <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 25px 0;" />
    
    <div style="margin: 20px 0;">
      <p style="margin: 0 0 10px 0;"><strong style="font-size: 1.1em; color: #081c22;">Message :</strong></p>
      <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #081c22; border-radius: 4px; white-space: pre-wrap;">
${formValues.content.replace(/\n/g, "<br>")}
      </div>
    </div>
    
    <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 0.85em; color: #6b7280; text-align: center;">
      <p style="margin: 5px 0;">Ceci est un email automatique envoyé depuis le site <strong>ADC CONSULTING</strong></p>
      <p style="margin: 5px 0; color: #9ca3af;">Reçu le ${new Date().toLocaleString(
        "fr-FR",
        {
          dateStyle: "long",
          timeStyle: "short",
        },
      )}</p>
    </footer>
  </div>
`;

    // Create a transporter for SMTP
    const transporter = nodemailer.createTransport({
      host: "adc-conseil.com",
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: `"ADC CONSULTING SITE WEB" <${SMTP_USER}>`,
      replyTo: `"${formValues.name}" <${formValues.email}>`,
      to: "admin@adc-conseil.com",
      subject: `${formValues.subject}`,
      html: message,
    });
    return {
      message:
        "Message envoyé !. Nous vous répondrons dans les plus brefs délais.",
    };
  } catch (err) {
    console.error("SEND EMAIL ERROR:", err);
    return {
      message: "Echec de l'envoi de votre message. Merci de réessayer.",
    };
  }
}
