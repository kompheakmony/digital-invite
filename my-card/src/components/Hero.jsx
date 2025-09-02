import { motion } from "framer-motion";
import FrameName from "../assets/name-frame.svg";
import GuestName from "../assets/guest-frame.png";

export default function Hero({ guestName = "លោក សែត កុម្ភម្នី" }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  // Gold shimmer style (reusable)
  const shimmerStyle = {
    backgroundImage:
      "linear-gradient(90deg, #FFD700, #FFB700, #FFF5CC, #FFD700)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="flex flex-col items-center text-center overflow-hidden">
      {/* Frame with animation */}
      <motion.div
        className="relative mt-32"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img src={FrameName} alt="Frame Name" />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {["ក", "វ"].map((char, i) => (
            <motion.span
              key={i}
              className="text-5xl md:text-6xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Title with shimmering gold */}
      <motion.div
        className="mt-8 mb-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <motion.h1
          className="text-5xl md:text-4xl mb-4 font-bold inline-block"
          style={{
            ...shimmerStyle,
            paddingTop: "0.3em",
            paddingBottom: "0.3em",
          }}
          animate={{ backgroundPosition: ["200% center", "0% center"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          variants={fadeUp}
          custom={1}
        >
          សិរីសួស្ដីអាពាហ៍ពិពាហ៍
        </motion.h1>

        <motion.h3
          className="text-3xl md:text-2xl mb-4"
          variants={fadeUp}
          custom={2}
        >
          សូមគោរមអញ្ជើញ
        </motion.h3>

        <motion.h4
          className="text-2xl md:text-xl mb-4"
          variants={fadeUp}
          custom={3}
        >
          ឯកឧត្តម លោកជំទាវ​​ លោក លោកស្រី អ្នកនាងកញ្ញា
        </motion.h4>
      </motion.div>

      {/* Guest frame with shimmering gold text */}
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img src={GuestName} alt="Guest Name Frame" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="text-xl md:text-2xl font-bold"
            style={{
              ...shimmerStyle,
              paddingTop: "0.2em",
            }}
            animate={{ backgroundPosition: ["200% center", "0% center"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {guestName}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Date & Location */}
      <motion.h4
        className="text-2xl md:text-xl mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={4}
      >
        ថ្ងៃ អាទិត្យ ទី ១៧ ខែ មេសា ឆ្នាំ ២០២៦​ វេលាម៉ោង៖ ៣ៈ០០ រសៀល
      </motion.h4>

      <motion.h4
        className="text-2xl md:text-xl mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={5}
      >
        នៅគេហដ្ឋានខាងស្រី
      </motion.h4>
    </div>
  );
}
