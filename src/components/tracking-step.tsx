import cx from "classnames";
import { format, isValid } from "date-fns";
import { PartyPopperIcon } from "lucide-react";
import React from "react";

import { useTranslation } from "../lib/contexts/translation-context";
import {
  AlertIcon,
  CancelIcon,
  CheckIcon,
  LoadingSpinner,
} from "./tracking-icons";

export interface TrackingStepProps {
  title: string;
  description: string;
  active: boolean;
  date?: Date | null;
  cancelled?: boolean;
  showConfetti?: boolean;
}

export const TrackingStep: React.FC<TrackingStepProps> = ({
  title,
  description,
  active,
  date,
  cancelled = false,
  showConfetti = false,
}) => {
  const { t } = useTranslation();

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return null;
    const dateObj = new Date(date);

    return isValid(dateObj) ? format(dateObj, "MMM d, yyyy - h:mm a") : null;
  };
  const isCompleted = !!date;
  const isLoading = active && !date;

  return (
    <div className="relative flex items-start gap-4 pb-8">
      {/* Circle indicator */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0">
        <div
          className={cx(
            "w-8 h-8 rounded-full flex items-center justify-center",
            {
              "bg-green-100 border-green-500 border-[3px]":
                isCompleted && !showConfetti, // date is available - green background with green border
              "bg-violet-100 border-violet-500 border-[3px]":
                isCompleted && showConfetti, // date is available - green background with green border
              "bg-white": !date, // white background for both other cases
              "border-gray-200 border-[3px]": !date && !active, // no date and not active - white with gray border
              // no border class when !date && active (active but no date)
              "bg-red-100 border-red-500 border-[3px]": cancelled, // keep cancelled styling
            }
          )}
        >
          {date && !showConfetti && !cancelled && (
            <CheckIcon className="w-4 h-4 text-green-500" />
          )}
          {isCompleted && showConfetti && (
            <PartyPopperIcon className="w-4 h-4 text-violet-500" />
          )}
          {cancelled && <CancelIcon className="w-4 h-4 text-red-500" />}
          {isLoading && (
            <LoadingSpinner className="text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 w-full" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          className={cx("font-black font-red-hat-display", {
            "text-red-500": cancelled,
            "text-gray-900": isCompleted,
            "text-gray-500": !cancelled && !isCompleted,
          })}
        >
          {title}
        </h3>
        <p
          className={cx("text-sm font-medium", {
            "text-red-500": cancelled,
            "text-gray-600": isCompleted,
            "text-gray-400": !cancelled && !isCompleted,
          })}
        >
          {description}
        </p>
        {formatDate(date) && (
          <p className="text-xs text-gray-400 mt-1">{formatDate(date)}</p>
        )}
      </div>
    </div>
  );
};
