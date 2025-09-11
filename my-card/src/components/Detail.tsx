import { motion, Variants } from "motion/react";
import React from "react";

export default function Details() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="flex flex-col items-center text-center px-6 mb-4">
      <motion.div
        className="flex items-center justify-center gap-2 my-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 className="font-face-gm text-7xl md:text-8xl combined-gold">Ó</h1>
        <h1 className="font-face-gm text-7xl md:text-8xl combined-gold text-flip">
          Ó
        </h1>
      </motion.div>

      <motion.div
        className="mb-12 space-y-6 leading-relaxed"
        initial="hidden"
        whileInView="visible"
      >
        {/* Parents Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 text-gold md:text-xl"
          variants={fadeUp}
          custom={1}
        >
          <div className="text-center space-y-3">
            <p>លោក យ៉ង់ វីរៈ</p>
            <p>លោកស្រី ហួត សុមន</p>
          </div>
          <div className="text-center space-y-3">
            <p>លោក ខួន ពិនុច</p>
            <p>លោកស្រី គីម ណេត</p>
          </div>
        </motion.div>

        {/* Divider Ornament */}
        <motion.div
          className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto my-8"
          variants={fadeUp}
          custom={2}
        />

        {/* Invitation Text */}
        <motion.h4
          className="text-2xl md:text-3xl mb-4 text-gold"
          variants={fadeUp}
          custom={3}
        >
          មានកិត្តិយសសូមអញ្ជើញ
        </motion.h4>

        <motion.p
          className="text-center text-gold md:text-base max-w-2xl mx-auto"
          variants={fadeUp}
          custom={4}
        >
          ចូលរួមក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី ជាអធិបតី និង
          ជាភ្ញៀវកិត្តិយស
        </motion.p>

        {/* Bride & Groom */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 text-gold md:text-xl"
          variants={fadeUp}
          custom={5}
        >
          <div className="text-center space-y-3">
            <p>កូនប្រុសនាម</p>
            <p>ហួត សុមន</p>
          </div>
          <div className="text-center space-y-3">
            <p>កូនស្រីនាម</p>
            <p>គីម ណេត</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
