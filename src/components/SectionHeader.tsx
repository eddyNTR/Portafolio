import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

const SectionHeader = ({ title, highlight, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-extrabold text-white mb-4">
        {title} <span className="text-primary-light">{highlight}</span>
      </h2>
      <div className="w-20 h-1 bg-linear-to-r from-primary to-primary-light mx-auto rounded-full" />
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
