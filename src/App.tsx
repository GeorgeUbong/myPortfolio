import { useCallback, useState } from "react";

import LoadingScreen from "./Loading";
import Hero from "./Pages/Hero";

export default function App() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
  }, []);

  return (
    <>
      {showLoading && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
        />
      )}

      {!showLoading && <Hero />}
    </>
  );
}