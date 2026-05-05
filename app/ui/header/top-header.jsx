import { MailIcon, SmartphoneIcon } from 'lucide-react';
import Image from 'next/image';

export default function TopHeader() {
  return (
    <div className="border-secondary border-b-4 p-large md:p-small">
      <div className="md:w-[90vw] mx-auto  flex justify-between text-primary">
        <div className="flex gap-small items-center">
          <Image
            src="/logo-adc.svg"
            width={150}
            height={50}
            alt="company Logo"
            className="border-secondary border-r-2 pr-xsmall md:pr-large"
          />
          <p className="font-bold text-lg  md:text-2xl">
            ADC CONSULTING
          </p>
        </div>
        <div className="hidden md:block md:text-sm md:font-semibold md:border-l-2 md:border-secondary md:pl-small">
          <div className="flex gap-xsmall">
            <MailIcon className="size-4 text-secondary" />
            <p>info@adc-conseil.com</p>
          </div>
          <div className="flex gap-xsmall">
            <SmartphoneIcon className="size-4 text-secondary" />
            <p>+225 27 22 59 68 34</p>
          </div>
          <div className="flex gap-xsmall">
            <SmartphoneIcon className="size-4 text-secondary" />
            <p>+225 05 46 82 07 07</p>
          </div>
        </div>
      </div>
    </div>
  );
}