"use client";

import React from "react";

import VideoThumb from "../../public/images/video-miejsca.jpg";
import ModalVideo from "./modal-video";

const Video: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Zobacz Nasze polecane miejsca na wyjazdy
          </h2>
          <p className="max-w-2xl text-gray-600 text-base sm:text-lg">
            Ranking dostępny wkrótce...
          </p>
          <div className="w-full">
            <ModalVideo
              thumb={VideoThumb.src}
              thumbWidth={1024}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1080}
              videoHeight={1920}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
