import React from "react";
import video1 from "/src/assets/video1.mp4";

export default function Herolayout({ heroUrl = "/src/assets/layout2.jpg" }) {
  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Full background image */}
      <div
        className="w-full min-h-[70vh] md:min-h-[80vh] bg-cover bg-center relative flex items-start"
        style={{
          backgroundImage: `url('${heroUrl}')`,
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* Title (top) */}
        <div className="absolute inset-x-0 top-6 z-20">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-200 drop-shadow-lg">
              DRAVYAM
              <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-white mt-1">farms</span>
            </h1>
          </div>
        </div>

        {/* Center layout card with video */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[18%] md:top-[22%] z-30 w-[94%] sm:w-11/12 md:w-3/4 lg:w-2/3">
          <div className="mx-auto bg-white/8 backdrop-blur-xl rounded-2xl border border-white/12 shadow-2xl overflow-hidden">
            {/* make video responsive and maintain aspect ratio */}
            <div className="relative w-full aspect-[16/9] md:aspect-[16/9] bg-black">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={video1}
                aria-label="Dravyam layout video"
              />

              {/* optional play/pause placeholder for accessibility (visually hidden by default) */}
              <button
                className="sr-only"
                aria-hidden
                tabIndex={-1}
              >
                Toggle video
              </button>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-white font-semibold text-lg md:text-xl">1008 Sq. Yd. Organic Farm</h3>
              <p className="text-sm md:text-base text-white/80 mt-1">Indicative layout for reference purposes only.</p>
              <p className="text-xs md:text-sm text-white/60 mt-2">Near Jambudweep, Hastinapur • S.F-9, K.N Modi Complex, G.T Road, Modinagar</p>
            </div>
          </div>
        </div>

        {/* Bottom ribbon */}
        <div className="absolute left-0 right-0 bottom-0 z-40">
          <div className="bg-[#3b2f22] py-3 md:py-5 text-center">
            <h2 className="text-xl md:text-3xl font-bold">1008 Sq. Yd. Organic Farm</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
