// src/components/AutoBackgroundMusic.jsx
import React, { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(new Audio("/hormrong.mp3"));
  const STORAGE_KEY = "background-music-position";

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;

    // Restore last playback position
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    const playAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Wait for user gesture if autoplay blocked
          const resume = () => {
            audio.play();
            document.removeEventListener("click", resume);
          };
          document.addEventListener("click", resume);
        });
      }
    };

    playAudio();

    // Save playback time periodically
    const saveInterval = setInterval(() => {
      localStorage.setItem(STORAGE_KEY, audio.currentTime.toString());
    }, 2000); // every 2 seconds

    // Cleanup
    return () => {
      clearInterval(saveInterval);
      audio.pause();
      localStorage.setItem(STORAGE_KEY, audio.currentTime.toString());
    };
  }, []);

  return null; // Purely background behavior
}
