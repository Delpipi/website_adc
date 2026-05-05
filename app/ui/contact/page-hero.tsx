import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-80 overflow-hidden">
      <Image
        src={backgroundImage ?? ""}
        width={1920}
        height={1080}
        alt="Hero Image"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-center object-cover z-0"
      />
      <div className="absolute inset-0 bg-primary/70 md:z-10 md:block md:h-150"></div>
      <div className="max-w-3xl absolute bottom-10 z-10 px-medium md:px-massive">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white/80 animate-fade-up animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
