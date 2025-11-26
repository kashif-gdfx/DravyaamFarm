import React from "react";
import video1 from "/video1.mp4";

export default function Herolayout({ heroUrl = "/layout2.jpg" }) {
  return (
    <section className="relative w-full text-white overflow-hidden">
      <div
        className="w-full min-h-[70vh] md:min-h-[85vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url('${heroUrl}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30 z-10" />

        {/* Title */}
        <div className="absolute top-6 inset-x-0 z-30 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-200 drop-shadow-lg">
            DRAVYAM
            <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-white mt-1">
              farms
            </span>
          </h1>
        </div>

        {/* Center Video Card */}
        <div className=" mt-20 relative z-40 w-[95%] sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          <div className="rounded-3xl md:rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden">

            {/* Responsive Video */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={video1}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Text below video */}
            <div className="p-4 sm:p-6">
              <h3 className="text-white font-semibold text-lg sm:text-2xl">
                1008 Sq. Yd. Organic Farm
              </h3>
              <p className="text-sm sm:text-base text-white/80 mt-1">
                Indicative layout for reference purposes only.
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
                Near Jambudweep, Hastinapur • S.F-9, K.N Modi Complex, G.T Road, Modinagar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
