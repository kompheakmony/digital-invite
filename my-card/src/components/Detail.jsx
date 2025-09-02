import { motion } from "framer-motion";

export default function Details() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const shimmerStyle = {
    backgroundImage:
      "linear-gradient(90deg, #FFD700, #FFB700, #FFF5CC, #FFD700)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    lineHeight: 1.3,
  };

  return (
    <div className="flex flex-col items-center text-center px-6 py-12 mb-20">
      {/* Decorative Symbols */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1 className="font-face-gm text-7xl md:text-8xl">Ó</h1>
        <h1 className="font-face-gm text-7xl md:text-8xl text-flip">Ó</h1>
      </motion.div>

      {/* Parents Section */}
      <motion.div
        className="mb-12 space-y-6 leading-relaxed"
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="grid grid-cols-2 gap-12 text-lg md:text-xl"
          variants={fadeUp}
          custom={1}
        >
          <div className="text-center">
            <p style={shimmerStyle}>លោក យ៉ង់ វីរៈ</p>
            <p>លោកស្រី ហួត សុមន</p>
          </div>
          <div className="text-center">
            <p style={shimmerStyle}>លោក ខួន ពិនុច</p>
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
          className="text-2xl md:text-xl mb-4 font-semibold"
          variants={fadeUp}
          custom={3}
        >
          មានកិត្តិយសសូមអញ្ជើញ
        </motion.h4>

        <motion.p
          className="text-center text-lg md:text-base max-w-2xl mx-auto"
          variants={fadeUp}
          custom={4}
        >
          ចូលរួមក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី ជាអធិបតី និង
          ជាភ្ញៀវកិត្តិយស
        </motion.p>

        {/* Bride & Groom */}
        <motion.div
          className="grid grid-cols-2 gap-12 mt-8 text-lg md:text-xl"
          variants={fadeUp}
          custom={5}
        >
          <div className="text-center">
            <p>កូនប្រុសនាម</p>
            <p style={shimmerStyle}>ហួត សុមន</p>
          </div>
          <div className="text-center">
            <p>កូនស្រីនាម</p>
            <p style={shimmerStyle}>គីម ណេត</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
