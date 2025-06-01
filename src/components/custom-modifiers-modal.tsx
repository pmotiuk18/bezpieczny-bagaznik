"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ModifierContainer,
  ModifiersGroup,
  ModifiersOption,
} from "@shophost/react-sdk";
import React, { Fragment } from "react";

export const CustomModifiersModal: React.FC<{ locale?: string }> = ({
  locale = "en",
}) => {
  return (
    <ModifierContainer>
      {({
        isOpen,
        onClose,
        productName,
        modifierGroups,
        hasModifiers,
        quantity,
        onIncrement,
        onDecrement,
        isDecrementDisabled,
        onAddToCart,
        validationError,
      }) => (
        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 z-40"
                aria-hidden="true"
              />
            </TransitionChild>

            {/* Modal Container */}
            <div className="fixed inset-0 overflow-auto z-50">
              <div className="flex min-h-full items-center justify-center p-4">
                {/* Modal Panel */}
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-auto shadow-xl transform transition-all">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                      <DialogTitle className="text-lg font-semibold">
                        {productName}
                      </DialogTitle>
                      <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                        aria-label="Close modal"
                      >
                        ×
                      </button>
                    </div>

                    {/* Modifier Groups */}
                    {hasModifiers ? (
                      <div className="p-4">
                        {modifierGroups.map((group) => (
                          <ModifiersGroup
                            key={group.id}
                            group={group}
                            renderOptions={() =>
                              group.modifiers.map((modifier: any) => (
                                <ModifiersOption
                                  key={modifier.id}
                                  modifier={modifier}
                                  groupId={group.id}
                                >
                                  {({
                                    modifier,
                                    isSelected,
                                    onSelect,
                                    isMultiSelect,
                                    formattedPrice,
                                  }) => (
                                    <div
                                      className={`flex items-center p-2 border rounded cursor-pointer mb-2 ${
                                        isSelected
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200"
                                      }`}
                                      onClick={onSelect}
                                    >
                                      <input
                                        type={
                                          isMultiSelect ? "checkbox" : "radio"
                                        }
                                        checked={isSelected}
                                        className="mr-2"
                                      />
                                      <span>
                                        {modifier.title}
                                        {formattedPrice}
                                      </span>
                                    </div>
                                  )}
                                </ModifiersOption>
                              ))
                            }
                          >
                            {({
                              groupName,
                              isRequired,
                              selectionRequirements,
                              renderOptions,
                            }) => (
                              <div className="mb-4">
                                <div className="font-medium mb-2">
                                  {groupName}
                                  {isRequired && (
                                    <span className="text-red-500 ml-1">*</span>
                                  )}
                                  {selectionRequirements && (
                                    <span className="text-sm text-gray-500 ml-2">
                                      (Select {selectionRequirements})
                                    </span>
                                  )}
                                </div>
                                <div>{renderOptions()}</div>
                              </div>
                            )}
                          </ModifiersGroup>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        This product has no modifiers.
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="p-4 flex items-center justify-center border-t">
                      <button
                        type="button"
                        onClick={onDecrement}
                        className={`w-8 h-8 flex items-center justify-center border rounded-l ${
                          isDecrementDisabled
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        aria-label="Decrease quantity"
                        disabled={isDecrementDisabled}
                      >
                        -
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={onIncrement}
                        className="w-8 h-8 flex items-center justify-center border rounded-r cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t">
                      {validationError && (
                        <div className="text-red-500 mb-2">
                          {validationError}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={onAddToCart}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-sm font-medium hover:bg-blue-600 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </ModifierContainer>
  );
};
