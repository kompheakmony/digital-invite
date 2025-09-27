import { motion, Variants } from "motion/react";
import FrameName from "../assets/name-frame.svg";
import GuestName from "../assets/guest-frame.png";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { guestList } from "../data/guestList";

export default function Hero() {
  const { guestSlug } = useParams<{ guestSlug?: string }>();
  const [dynamicGuestName, setDynamicGuestName] = useState("លោក សែត កុម្ភម្នី");

  useEffect(() => {
    if (guestSlug && guestList[guestSlug]) {
      setDynamicGuestName(guestList[guestSlug]);
    } else if (guestSlug) {
      setDynamicGuestName("ភ្ញៀវកិត្តិយស");
    }
  }, [guestSlug]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const shimmerStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(
      90deg,
      #dda20c,
      #ffd700,
      #fffacd,
      #ffdf00,
      #dda20c
    )`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 4px rgba(0,0,0,0.25)",
  };

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className="relative mt-32"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img src={FrameName} alt="Frame Name" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-2 font-khmer"
          style={{
            ...shimmerStyle,
            paddingTop: "0.3em",
            paddingBottom: "0.3em",
          }}
          variants={fadeUp}
          animate={{ backgroundPosition: ["200% center", "0% center"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {["ក", "វ"].map((char, i) => (
            <span key={i} className="text-5xl md:text-6xl">
              {char}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 mb-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <motion.h1
          className="text-5xl md:text-4xl mb-4 inline-block"
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
          className="text-3xl md:text-2xl mb-4 text-gold"
          variants={fadeUp}
          custom={2}
        >
          សូមគោរមអញ្ជើញ
        </motion.h3>

        <motion.h4
          className="text-2xl md:text-xl mb-4 text-gold"
          variants={fadeUp}
          custom={3}
        >
          ឯកឧត្តម លោកជំទាវ​​ លោក លោកស្រី អ្នកនាងកញ្ញា
        </motion.h4>
      </motion.div>

      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img src={GuestName} alt="Guest Name Frame" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xl md:text-2xl"
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
            {dynamicGuestName}
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        className="text-2xl md:text-xl space-y-6 text-gold"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={4}
      >
        <h4>ថ្ងៃ អាទិត្យ ទី ១៧ ខែ មេសា ឆ្នាំ ២០២៦​ វេលាម៉ោង៖ ៣ៈ០០ រសៀល</h4>
        <h4>នៅគេហដ្ឋានខាងស្រី</h4>
      </motion.div>
    </div>
  );
}