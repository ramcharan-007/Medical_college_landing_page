import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import ErrorBoundary from "../utils/ErrorBoundary";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MedicalIcons from "../utils/MedicalIcons";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));

// Optimized Loading component with skeleton
const Loading = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center p-8"
    role="status"
    aria-label="Loading content"
  >
    <div className="w-full max-w-7xl">
      {/* Hero skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="loading-skeleton h-8 w-3/4 rounded"></div>
          <div className="loading-skeleton h-6 w-full rounded"></div>
          <div className="loading-skeleton h-6 w-5/6 rounded"></div>
          <div className="loading-skeleton h-12 w-32 rounded-full"></div>
        </div>
        <div className="loading-skeleton h-96 w-full rounded-2xl"></div>
      </div>
    </div>
    <span className="sr-only">Loading page content...</span>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <MedicalIcons />
        <header>
          <NavBar />
        </header>

        <main className="flex-1">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
            </Routes>
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ErrorBoundary>
  );
}
