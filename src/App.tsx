import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/features/loading/components/LoadingScreen";
import { Portfolio } from "@/features/portfolio/components/Portfolio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && <Portfolio />}
    </>
  );
}

export default App;
