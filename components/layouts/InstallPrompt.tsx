"use client";

import { useEffect, useState } from "react";

// Extend the global Window interface to include the MSStream property
declare global {
  interface Window {
    MSStream?: unknown; // Define MSStream as an optional property
  }
}

const InstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if the user agent is iOS and not a Microsoft Stream browser
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    );

    // Check if the app is running in standalone mode
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  // Don't show the install button if the app is already installed
  if (isStandalone) {
    return null;
  }

  return (
    <div>
      <h3>Install App</h3>
      <button type="button">Add to Home Screen</button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </span>
          and then &quot;Add to Home Screen&quot;
          <span role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </span>
          .
        </p>
      )}
    </div>
  );
};

export default InstallPrompt;