import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import ErrorBoundary from "./components/ErrorBoundary";
import AbaQr from "./components/AbaQr";
import Footer from "./components/Footer";
import InvitationContent from "./components/InvitationContent";
import BackgroundMusic from "./components/BackgroundMusic";
import { ThemeProvider } from "./context/ThemeContext";

const LazyPhotosGallary = React.lazy(
  () => import("./components/PhotosGallary")
);

const AppRoutes: FC = () => (
  <Routes>
    <Route
      path="/invite/:guestSlug"
      element={
        <>
          <Hero />
          <Detail />
          <Suspense fallback={<div>Loading photos...</div>}>
            <LazyPhotosGallary />
          </Suspense>
          <AbaQr />
          <Footer />
          <BackgroundMusic />
        </>
      }
    />

    <Route
      path="/"
      element={
        <>
          <InvitationContent />
          <Detail />
          <Suspense fallback={<div>Loading photos...</div>}>
            <LazyPhotosGallary />
          </Suspense>
          <AbaQr />
          <Footer />
          <BackgroundMusic />
        </>
      }
    />
  </Routes>
);

const Layout: FC = () => (
  <Router>
    <ErrorBoundary>
      <ThemeProvider>
        <LayoutWrapper>
          <AppRoutes />
        </LayoutWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  </Router>
);

export default Layout;
