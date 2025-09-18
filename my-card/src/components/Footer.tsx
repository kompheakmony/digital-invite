import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, ExternalLink, Sparkles } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const sparkleAnimation: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="w-full py-8 my-13 relative overflow-hidden font-boran"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-yellow-300/5 rounded-full blur-3xl" />
        
        <motion.div
          className="absolute top-8 left-1/3 w-1 h-1 bg-yellow-400/30 rounded-full"
          variants={sparkleAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-yellow-300/40 rounded-full"
          variants={sparkleAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-16 right-1/5 w-0.5 h-0.5 bg-yellow-400/50 rounded-full"
          variants={sparkleAnimation}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div 
          className="flex justify-center items-center mb-10"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-4">
            <motion.div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-yellow-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.div 
              className="relative"
              variants={floatingAnimation}
              animate="animate"
            >
              <Heart 
                className="w-6 h-6 text-yellow-400 fill-yellow-400/20" 
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="absolute -inset-2 bg-yellow-400/10 rounded-full blur-sm" />
              
              <motion.div
                className="absolute -inset-3 border border-yellow-400/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-24 h-px bg-gradient-to-l from-transparent via-yellow-400/60 to-yellow-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <motion.div 
            className="space-y-3 relative"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <p className="text-lg md:text-xl tracking-wide leading-relaxed relative z-10 text-gold">
                សូមអរគុណចំពោះការចូលរួម
              </p>
              <div className="absolute inset-0 blur-xl bg-yellow-400/5 rounded-lg" />
            </div>
            
            <motion.p 
              className="text-sm md:text-base max-w-md mx-auto text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              ការចូលរួមរបស់លោកអ្នកគឺជាកិត្តិយសយ៉ាងធំសម្រាប់ពួកយើង
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-2"
            variants={fadeInUp}
            aria-hidden="true"
          >
            {[0.4, 0.6, 0.4].map((opacity, index) => (
              <motion.div
                key={index}
                className={`${index === 1 ? 'w-2 h-2' : 'w-1.5 h-1.5'} bg-yellow-400 rounded-full`}
                style={{ opacity }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [opacity, opacity * 1.5, opacity]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          <motion.div 
            className="relative group"
            variants={fadeInUp}
          >
            <motion.div
              className="absolute"
              initial={false}
            />
            
            <div className="relative z-10 px-4 py-2">
              <motion.p 
                className="text-sm md:text-base mb-3 flex items-center justify-center gap-2 text-gold"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400/60" strokeWidth={1.5} />
                នាំមកជួនដោយ
                <Sparkles className="w-4 h-4 text-yellow-400/60" strokeWidth={1.5} />
              </motion.p>
              
              <motion.a
                href="https://nyzcam.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                aria-label="Visit Nyz Cam website (opens in new tab)"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative font-medium text-gold">
                  Nyz Cam
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut" 
                  }}
                >
                  <ExternalLink 
                    className="w-3.5 h-3.5 group-hover/link:rotate-12 group-hover/link:scale-110 transition-transform duration-300 text-yellow-400" 
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="pt-4 flex justify-center space-x-1"
            variants={fadeInUp}
            aria-hidden="true"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-yellow-400/30 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1 + 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}