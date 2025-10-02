import { motion, Variants } from "motion/react";
import FrameName from "../assets/name-frame-wd.svg";
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
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  const shadowStyle: React.CSSProperties = {
    textShadow: "0 2px 4px rgba(0,0,0,0.25)",
    WebkitTextStroke: "0.25px rgba(0,0,0,0.25)",
  };

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative mt-3 sm:mt-12 md:mt-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="relative">
          <img src={FrameName} alt="Frame Name" className="w-48 h-auto" />

          <div className="absolute inset-0 pointer-events-none font-khmer">
            <motion.div
              className="relative w-full h-full"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              <motion.span
                className="absolute"
                style={{
                  ...shimmerStyle,
                  ...shadowStyle,
                  top: "2.5rem",
                  left: "3rem",
                  fontSize: "3rem",
                  lineHeight: 1,
                  transformOrigin: "center",
                }}
                animate={{ backgroundPosition: ["200% center", "0% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ក
              </motion.span>

              <motion.span
                className="absolute"
                style={{
                  ...shimmerStyle,
                  ...shadowStyle,
                  bottom: "3rem",
                  right: "3rem",
                  fontSize: "3rem",
                  lineHeight: 1,
                }}
                animate={{ backgroundPosition: ["200% center", "0% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                វ
              </motion.span>

              <motion.span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  ...shimmerStyle,
                  paddingTop: "0.3em",
                  paddingBottom: "0.3em",
                  fontSize: "1rem",
                }}
                animate={{ backgroundPosition: ["200% center", "0% center"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                និង
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 sm:mt-8 mb-4 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 inline-block px-2"
          style={{
            ...shimmerStyle,
            ...shadowStyle,
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
          className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-gold"
          variants={fadeUp}
          custom={2}
        >
          សូមគោរមអញ្ជើញ
        </motion.h3>

        <motion.h4
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-gold px-4"
          variants={fadeUp}
          custom={3}
        >
          ឯកឧត្តម លោកជំទាវ​​ លោក លោកស្រី អ្នកនាងកញ្ញា
        </motion.h4>

      </motion.div>

      <motion.div
        className="relative mb-4 sm:mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <img src={GuestName} alt="Guest Name Frame" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.span
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{
              ...shimmerStyle,
              ...shadowStyle,
              paddingTop: "0.3em",
              paddingBottom: "0.3em",
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
        className="text-base md:text-lg space-y-3 sm:space-y-4 md:space-y-6 text-gold max-w-3xl px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={4}
      >
        <h6 className="leading-6">ថ្ងៃ អាទិត្យ ទី ១៧ ខែ មេសា ឆ្នាំ ២០២៦​ វេលាម៉ោង៖ ៣ៈ០០ រសៀល</h6>
        <h6>នៅគេហដ្ឋានខាងស្រី</h6>
      </motion.div>

    </div>
  );
}
