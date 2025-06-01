import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import { CartDetails } from "./cart-details";

interface CartDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Cart Container */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div className="fixed bottom-0 right-0 h-[85vh] w-full sm:w-96 z-50 shadow-xl flex flex-col">
          {/* Header */}
          <CartDetails onClose={onClose} />
        </div>
      </Transition>
    </>
  );
};
