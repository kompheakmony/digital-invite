// src/components/Preloader.tsx
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("កំពុងរៀបចំ...");

  useEffect(() => {
    loadAllAssets();
  }, []);

  const updateProgress = (value: number, label: string) => {
    setLoadingStage(label);
    setProgress(value);
  };

  const loadAllAssets = async () => {
    try {
      updateProgress(10, "កំពុងផ្ទុកពុម្ពអក្សរ...");
      await loadFonts();

      updateProgress(40, "កំពុងផ្ទុករូបភាព...");
      await loadImages();

      updateProgress(70, "កំពុងផ្ទុករូបភាពវ៉ិចទ័រ...");
      await loadVectors();

      updateProgress(90, "កំពុងផ្ទុកមេឌៀ...");
      await loadMedia();

      updateProgress(100, "សូមរង់ចាំមួយភ្លែត...");
      await new Promise((r) => setTimeout(r, 600));

      setTimeout(() => onLoadingComplete(), 1000);
    } catch (err) {
      console.error("Loading error:", err);
      setProgress(100);
      setTimeout(() => onLoadingComplete(), 500);
    }
  };

  const loadFonts = async () => {
    const fonts = [
      { name: "Tacteng", url: "/fonts/tacteng.ttf" },
      { name: "Khmer Boran", url: "/fonts/Khmer_Boran.ttf" },
    ];
    await Promise.all(
      fonts.map(async (font) => {
        try {
          const fontFace = new FontFace(font.name, `url(${font.url})`);
          const loadedFont = await fontFace.load();
          document.fonts.add(loadedFont);
        } catch (e) {
          console.warn(`Font failed: ${font.name}`, e);
        }
      })
    );
  };

  const loadImages = async () => {
    const images = [
      "/images/hero-image.jpg",
      "/images/couple-photo.jpg",
      "/images/venue-photo.jpg",
      "/images/background.jpg",
    ];
    await Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => {
              console.warn(`Failed image: ${src}`);
              resolve();
            };
          })
      )
    );
  };

  const loadVectors = async () => {
    const vectors = ["/pkarchan-pattern.svg", "/pkarchan.svg" ,"./kbach/GuestFrame", "./kbach/ShortName"];
    await Promise.all(
      vectors.map((src) =>
        fetch(src).then((r) => r.text()).catch(() => console.warn(`Vector: ${src} failed`))
      )
    );
  };

  const loadMedia = async () => {
    const media = ["/video/intro.mp4"];
    await Promise.all(
      media.map(
        (src) =>
          new Promise<void>((resolve) => {
            const el = document.createElement(
              src.endsWith(".mp3") || src.endsWith(".wav") ? "audio" : "video"
            );
            el.src = src;
            el.onloadeddata = () => resolve();
            el.onerror = () => {
              console.warn(`Failed media: ${src}`);
              resolve();
            };
          })
      )
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,#15803d_0%,#166534_50%,#052e16_100%)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative w-[130px] h-[130px] mb-8 flex items-center justify-center">
        <motion.svg
          width="130"
          height="130"
          viewBox="0 0 130 130"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="weddingGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFACD" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#DDA20C" />
            </linearGradient>
          </defs>
          <circle
            cx="65"
            cy="65"
            r="55"
            stroke="#FFFACD"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="65"
            cy="65"
            r="55"
            stroke="url(#weddingGold)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="345"
            animate={{
              strokeDashoffset: 345 - (progress / 100) * 345,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            filter="drop-shadow(0 0 6px rgba(198,166,100,0.4))"
          />
        </motion.svg>

        <motion.img
          src="/couple.png"
          alt="Couple illustration"
          className="w-[80px] h-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <p className="text-4xl font-mono font-semibold tracking-wide bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          {Math.round(progress)}%
        </p>
        <motion.p
          className="mt-3 font-khmer text-lg italic bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {loadingStage}
        </motion.p>
      </motion.div>

      <motion.div
        className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent mt-6"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default Preloader;
