
import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import Layout from "./Layout";
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <React.StrictMode>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {showContent && <Layout />}
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(<RootComponent />);