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

export const ModifiersDialog: React.FC<{ locale?: string }> = ({
  locale = "en",
}) => {
  return (
    <ModifierContainer>
      {({
        isOpen,
        onClose,
        product,
        modifierGroups,
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
              <div className="flex min-h-full items-center justify-center p-4 md:p-4 sm:p-0">
                {/* Modal Panel */}
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-out duration-300"
                  enterFrom="sm:opacity-0 sm:scale-95 translate-y-full sm:translate-y-0"
                  enterTo="sm:opacity-100 sm:scale-100 translate-y-0"
                  leave="transform transition ease-in duration-200"
                  leaveFrom="sm:opacity-100 sm:scale-100 translate-y-0"
                  leaveTo="sm:opacity-0 sm:scale-95 translate-y-full sm:translate-y-0"
                >
                  <DialogPanel className="bg-white w-full sm:rounded-xl sm:max-w-md sm:w-full max-h-[75vh] sm:max-h-[90vh] overflow-auto shadow-xl transform transition-all fixed sm:relative bottom-0 sm:bottom-auto rounded-t-xl sm:rounded-xl">
                    {/* Header */}
                    <div className="flex justify-between items-start p-4">
                      {/* Mobile drag indicator */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-2 w-12 h-1.5 bg-gray-300 rounded-full sm:hidden" />
                      <div className="mt-4 sm:mt-0">
                        <DialogTitle className="text-2xl font-black font-red-hat-display">
                          {product.title}
                        </DialogTitle>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-gray-700 text-2xl leading-none mt-4 sm:mt-0"
                        aria-label="Close modal"
                      >
                        ×
                      </button>
                    </div>

                    {/* Modifier Groups */}
                    {modifierGroups.length > 0 ? (
                      <div className="px-4">
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
                                      className={`flex items-center py-2.5 px-3 border rounded-lg cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 ${
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
                                        onChange={(e) => e.preventDefault()}
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
                                  <div className="flex items-center font-black font-red-hat-display text-lg">
                                    {groupName}
                                    {isRequired && (
                                      <span className="text-red-500 ml-1">
                                        *
                                      </span>
                                    )}
                                  </div>
                                  {selectionRequirements && (
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                      Select {selectionRequirements}
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
                    <div className="p-4 flex items-center justify-center border-t mt-8">
                      <button
                        type="button"
                        onClick={onDecrement}
                        className={`w-8 h-8 flex items-center justify-center border rounded-lg ${
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
                        className="w-8 h-8 flex items-center justify-center border rounded-lg cursor-pointer"
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
                        className="btn text-sm text-white bg-teal-500 hover:bg-teal-400 rounded-lg w-full"
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
