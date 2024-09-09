import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  Ship,
  Plane,
  Package,
  Clock,
  Anchor,
  ArrowRight,
  Globe,
} from 'lucide-react';

export default function ShipBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-full items-center mx-auto w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-400 to-teal-300" />

      {/* Animated wave effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative flex flex-col items-center justify-between p-8 md:flex-row">
        {/* Content */}
        <div className="z-10 mb-8 max-w-lg text-white md:mb-0">
         

          
        </div>

        {/* Animated shipping illustration */}
        <div className="relative z-10 w-full max-w-sm">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
           
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
            
            </motion.div>
          </motion.div>
          {/* Animated route lines */}
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 300 200"
          >
            <motion.path
              d="M50,100 Q150,50 250,100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M50,100 Q150,150 250,100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
        </div>
      </div>

      {/* Transportation icons */}
      {[Truck, Plane].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-white opacity-20"
          style={{
            top: `${20 + index * 30}%`,
            left: `${80 + index * 5}%`,
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.5,
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* Particle effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
