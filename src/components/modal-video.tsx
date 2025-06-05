"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

interface ModalVideoProps {
  thumb?: string;
  thumbWidth?: number;
  thumbHeight?: number;
  thumbAlt?: string;
  video?: string;
  videoWidth?: number;
  videoHeight?: number;
  videoLink?: string;
  closeModal?: () => void;
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
  videoLink,
  closeModal: externalCloseModal,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCloseModal = () => {
    if (externalCloseModal) {
      externalCloseModal();
    } else {
      setModalOpen(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  // If videoLink is provided (from Video component), render the modal directly
  if (videoLink) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4"
        onClick={handleCloseModal}
      >
        <div
          className="relative max-w-full max-h-full w-auto h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={videoRef}
            width={videoWidth || 800}
            height={videoHeight || 600}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] object-contain rounded"
          >
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Thumbnail */}
      <div className="text-center" data-aos="fade-down">
        <div className="relative inline-flex justify-center items-center w-full max-w-full sm:max-w-md lg:max-w-lg mx-auto">
          {thumb && thumbWidth && thumbHeight && (
            <Image
              src={thumb}
              width={thumbWidth}
              height={thumbHeight}
              alt={thumbAlt || "Video thumbnail"}
              className="rounded-lg"
            />
          )}
          <button
            className="absolute group"
            onClick={() => {
              setModalOpen(true);
              setTimeout(() => {
                videoRef.current?.play();
              }, 300);
            }}
            aria-label="Watch the video"
          >
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#fff" cx="44" cy="44" r="44" />
              <path
                className="fill-current text-teal-500"
                d="M52 44a1 1 0 00-.427-.82l-10-7A1 1 0 0040 37V51a1 1 0 001.573.82l10-7A1 1 0 0052 44z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-full max-h-full w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              width={videoWidth}
              height={videoHeight}
              controls
              loop
              className="max-h-[90vh] max-w-[90vw] object-contain rounded"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalVideo;
