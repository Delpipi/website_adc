import { LucideIcon } from "lucide-react";
import { motion, useSpring, useTransform } from "motion/react";

interface StatProps {
  stat: {
    icon: LucideIcon;
    value: number;
    label: string;
    suffix: string;
  };
  index: number;
  inview: boolean;
}

export default function StatItem({ stat, index, inview }: StatProps) {
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const displayValue = useTransform(springValue, (current) =>
    Math.round(current),
  );
  if (inview) {
    springValue.set(stat.value)
  }
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inview ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col items-center gap-xsmall"
      >
        <stat.icon className="h-7 w-7" />
        <div className="text-4xl md:text-5xl font-bold">
          <motion.span>{displayValue}</motion.span>
          {stat.suffix}
        </div>
        <p className="font-medium">{stat.label}</p>
      </motion.div>
    );
}