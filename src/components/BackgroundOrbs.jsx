import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1 - Top Left Gold */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-aurum-gold/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Orb 2 - Bottom Right Navy/Blue Accent */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px]"
        animate={{
          x: [0, -70, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Orb 3 - Center Right Gold Light */}
      <motion.div
        className="absolute top-1/3 right-0 w-64 h-64 bg-aurum-gold-light/10 rounded-full blur-[80px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
