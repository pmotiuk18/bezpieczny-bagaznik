import React from "react";

export const LoadingShimmer = () => (
  <>
    <div className="flex flex-col md:flex-row h-screen w-screen relative">
      <div className="hidden md:flex items-center justify-end w-full md:w-1/2 h-full px-16 xl:px-24 bg-gray-900 md:overflow-y-auto">
        <div className="w-96 animate-fade">
          <div className="pl-6">
            <div className="px-7 pt-10 pb-0 md:pt-0 md:px-0">
              {/* Shimmer for reservation info */}
              <div className="flex flex-col w-full mb-5 sm:mb-7">
                <div className="h-5 bg-gray-700 rounded-sm w-3/4 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded-sm w-1/2 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded-sm w-2/3 animate-pulse"></div>
              </div>
              <hr className="opacity-10 my-4 sm:my-4" />
              <div className="mt-3 flex items-center">
                <div className="h-3 bg-gray-700 rounded-sm w-20 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded-sm w-16 ml-auto animate-pulse"></div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="h-3 bg-gray-700 rounded-sm w-16 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded-sm w-16 ml-auto animate-pulse"></div>
              </div>
              <hr className="opacity-10 my-4 sm:my-4" />
              <div className="mt-4 flex justify-between">
                <div className="h-5 bg-gray-700 rounded-sm w-16 animate-pulse"></div>
                <div className="h-5 bg-gray-700 rounded-sm w-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start 2xl:items-start w-full md:w-1/2 h-full px-6 sm:px-12 xl:px-24 py-8 md:overflow-y-auto relative">
        <div className="md:my-auto animate-fade w-full md:max-w-[432px]">
          <div className="h-8 bg-gray-200 rounded-sm w-64 mb-4 animate-pulse"></div>
          <div className="mb-8">
            <div className="h-4 bg-gray-200 rounded-sm w-48 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-sm w-40 animate-pulse"></div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

              {/* Shimmer for timeline steps */}
              {[1, 2].map((index) => (
                <div key={index} className="ml-9 mb-8 relative">
                  <div className="absolute -left-9 mt-1.5">
                    <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-sm w-40 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-sm w-64 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-sm w-24 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
