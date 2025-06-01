import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CookieBannerProps {
  onAccept: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:w-[450px] w-[calc(100%-32px)] mx-auto md:mx-0 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-gray-700 font-medium">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content.
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Link
            href="/privacy-policy"
            className="text-sm text-teal-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          <div className="flex-grow" />
          <button
            onClick={handleAccept}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-1.5 px-3 rounded text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
