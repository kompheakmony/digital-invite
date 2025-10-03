import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing...');

  useEffect(() => {
    loadAllAssets();
  }, []);

  const loadAllAssets = async () => {
    try {
      // Stage 1: Load Fonts (20%)
      setLoadingStage('Loading fonts...');
      await loadFonts();
      setProgress(20);

      // Stage 2: Load Images (60%)
      setLoadingStage('Loading images...');
      await loadImages();
      setProgress(60);

      // Stage 3: Load SVG/Vector Assets (80%)
      setLoadingStage('Loading patterns...');
      await loadVectorAssets();
      setProgress(80);

      // Stage 4: Load Videos/Audio (if any) (90%)
      setLoadingStage('Loading media...');
      await loadMediaAssets();
      setProgress(90);

      // Stage 5: Final preparation (100%)
      setLoadingStage('Almost ready...');
      await new Promise(resolve => setTimeout(resolve, 300));
      setProgress(100);

      // Wait a bit then complete
      setTimeout(() => onLoadingComplete(), 500);
    } catch (error) {
      console.error('Asset loading error:', error);
      // Complete anyway to prevent stuck loading
      setProgress(100);
      setTimeout(() => onLoadingComplete(), 500);
    }
  };

  const loadFonts = async (): Promise<void> => {
    const fonts = [
      { name: 'Tacteng', url: '/assets/fonts/tacteng.ttf' },
      { name: 'Khmer Boran', url: '/assets/fonts/Khmer_Boran.ttf' },
      // Add more fonts here
    ];

    const fontPromises = fonts.map(async (font) => {
      try {
        const fontFace = new FontFace(font.name, `url(${font.url})`);
        const loadedFont = await fontFace.load();
        document.fonts.add(loadedFont);
      } catch (error) {
        console.warn(`Failed to load font ${font.name}:`, error);
      }
    });

    await Promise.all(fontPromises);
  };

  const loadImages = async (): Promise<void> => {
    const images = [
      '/images/hero-image.jpg',
      '/images/couple-photo.jpg',
      '/images/venue-photo.jpg',
      '/images/background.jpg',
      // Add all your image paths here
    ];

    const imagePromises = images.map((src) => 
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          resolve(); // Resolve anyway to prevent blocking
        };
      })
    );

    await Promise.all(imagePromises);
  };

  const loadVectorAssets = async (): Promise<void> => {
    const vectors = [
      '/pkarchan-pattern.svg',
      '/decorations/ornament.svg',
      // Add all SVG paths here
    ];

    const vectorPromises = vectors.map((src) =>
      fetch(src)
        .then(response => response.text())
        .catch(error => console.warn(`Failed to load vector: ${src}`, error))
    );

    await Promise.all(vectorPromises);
  };

  const loadMediaAssets = async (): Promise<void> => {
    // Load videos and audio if you have any
    const mediaFiles = [
      // '/audio/background-music.mp3',
      '/video/intro.mp4',
    ];

    if (mediaFiles.length === 0) return;

    const mediaPromises = mediaFiles.map((src) =>
      new Promise<void>((resolve) => {
        const media = document.createElement(src.endsWith('.mp3') || src.endsWith('.wav') ? 'audio' : 'video');
        media.src = src;
        media.onloadeddata = () => resolve();
        media.onerror = () => {
          console.warn(`Failed to load media: ${src}`);
          resolve();
        };
      })
    );

    await Promise.all(mediaPromises);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-rose-50"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        {/* Animated Ring */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10,
            duration: 1.5 
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
            {/* Background circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#f3e5d1" 
              strokeWidth="3"
            />
            {/* Progress circle */}
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#d4af37" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (progress / 100) * 251.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </svg>
          
          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-amber-700">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-3xl font-serif text-amber-900 mb-2">
            Loading Your Invitation
          </h1>
          <p className="text-amber-700 text-sm">
            {loadingStage}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-72 h-2 bg-amber-100 rounded-full overflow-hidden shadow-inner"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 left-10 text-amber-300 text-6xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ❀
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-amber-300 text-6xl opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          ❀
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;