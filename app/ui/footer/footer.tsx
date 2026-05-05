import { ChevronsRightIcon, MailIcon, MapPinIcon, PrinterIcon, SmartphoneIcon } from 'lucide-react';
import styles from '../container.module.css'
import Image from 'next/image';
import Link from "next/link";
import { getFullYear } from '@/app/lib/utils';

const quicklinks = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/about" },
  { name: "Pôles d'activité", href: "/activities" },
  { name: "Multimédia", href: "/multimedia" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = getFullYear();
  return (
    <div className="bg-gray-200 border-secondary border-t-3 p-small">
      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col md:justify-center md:items-center w-50 mb-small md:mb-0">
            <Image
              src="/logo-adc.svg"
              width={120}
              height={80}
              alt="Compagny logo"
              className="block"
            />
            <p className="text-xs font-bold text-primary">
              Notre partenariat, Votre réussite
            </p>
          </div>

          <div className="text-primary">
            <h3 className="uppercase font-bold">Liens Rapides</h3>
            <ul className="text-sm">
              {quicklinks.map((link) => (
                <li key={link.name} className="flex">
                  <ChevronsRightIcon className="size-4" />
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-primary">
            <h3 className="uppercase font-bold">Localisation et Contact</h3>
            <ul className="text-sm">
              <li className="flex gap-xsmall">
                <SmartphoneIcon className="size-4" />
                <span>+225 27 21 59 68 34</span>
              </li>
              <li className="flex gap-xsmall">
                <PrinterIcon className="size-4" />
                <span>28 BP Abidjan 28</span>
              </li>
              <li className="flex gap-xsmall">
                <MailIcon className="size-4" />
                <span>info@kolarel.com</span>
              </li>
              <li className="flex gap-xsmall">
                <MapPinIcon className="size-4" />
                <span className="w-75 block">
                  Abidjan - Cote d'Ivoire / Cocody Angré 9ème tranche derrière
                  l'immeuble CGK.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 mt-medium pt-small">
          <p className="text-center">
           &copy; Copyright {year} by <strong>ADC CONSULTING</strong> - Tous
            droits Réservés
          </p>
        </div>
      </div>
    </div>
  );
}