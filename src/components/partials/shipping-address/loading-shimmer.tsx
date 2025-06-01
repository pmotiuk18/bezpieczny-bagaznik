import React from "react";

const LoadingShimmer = () => (
  <div className="animate-pulse space-y-4">
    {/* First Name and Last Name */}
    <div className="grid grid-cols-4 gap-4">
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-2" />
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-2" />
    </div>
    {/* Phone */}
    <div className="h-[70px] bg-gray-100 rounded-sm" />
    {/* Street Address */}
    <div className="grid grid-cols-4 gap-4">
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-3" />
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-1" />
    </div>
    {/* Zip Code and City */}
    <div className="grid grid-cols-4 gap-4">
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-2" />
      <div className="h-[40px] bg-gray-100 rounded-sm col-span-2" />
    </div>
    {/* Country */}
    <div className="h-[40px] bg-gray-100 rounded-sm" />
    {/* Delivery Instructions */}
    <div className="h-[100px] bg-gray-100 rounded-sm" />
    {/* Submit Button */}
    <div className="h-[40px] bg-gray-100 rounded-sm mt-8" />
  </div>
);

export { LoadingShimmer };
