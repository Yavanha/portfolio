import { useState } from "react";
import { LoadingScreen } from "@/features/loading/components/LoadingScreen";
import { Portfolio } from "@/features/portfolio/components/Portfolio";
import { AnimatePresence } from "motion/react";

/**
 * Main application component
 * Manages the application state and renders the appropriate screen
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handler for when loading is complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && <Portfolio />}
    </>
  );
}

export default App;
