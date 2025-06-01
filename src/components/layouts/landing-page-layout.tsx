import React from "react";
import { useState } from "react";

import { CartDrawer } from "../cart";
import { ModifiersDialog } from "../modifiers-dialog";
import { CookieBanner } from "../ui/cookie-banner";
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingPageLayout: React.FC<LandingLayoutProps> = ({
  children,
}) => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const handleCookieAccept = () => {
    // You can add analytics or other tracking initialization here
    console.log("Cookies accepted");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header
        isCartOpen={isCartDrawerOpen}
        openCart={() => setIsCartDrawerOpen(true)}
      />
      {children}
      <Footer />
      <ModifiersDialog />
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onOpen={() => setIsCartDrawerOpen(true)}
        onClose={() => setIsCartDrawerOpen(false)}
      />
      <CookieBanner onAccept={handleCookieAccept} />
    </div>
  );
};
