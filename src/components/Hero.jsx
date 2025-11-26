import React, { useEffect, useState } from "react";

import pic4 from "/pic4.jpg";
import pic1 from "/pic1.jpg";
import pic2 from "/pic2.jpg";
import pic3 from "/pic3.jpg";
import hero1 from "/heroimage.jpg";
import hero2 from "/farmimage2.jpg";
import hero3 from "/farmimage1.jpg";
import hero4 from "/farmimage3.jpg";
import Herolayout from "./Herolayout";
import FeaturesSection from "./FeaturesSection";

export default function Hero({
  // optional props with defaults
  // heroSrc = hero1, // fallback (not used if slideshow active)
  circleImgs = [pic1, pic2, pic3,pic4],
}) {
  // --- slideshow images (imported above) ---
  const heroImages = [hero1, hero2, hero3, hero4];

  // --- state & effect for auto-changing background ---
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change every 4s

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <section
        className="relative w-full min-h-screen bg-center bg-cover flex items-center transition-all duration-700"
       
      >


         <div className="absolute inset-0">
    {heroImages.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
        ${bgIndex === index ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
    ))}
  </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        <div className="relative container mx-auto px-6 py-12 lg:py-24 z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE TEXT CONTENT */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-green-600 leading-tight drop-shadow-xl">
                DRAVYAM
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-green-400 mt-2">
                  farms
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg md:text-xl text-white/95 max-w-xl drop-shadow-md">
                <strong className="text-amber-300">
                  1008 Gaj Organic Farm
                </strong>{" "}
                — Near Jambudweep, Hastinapur
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <a
                  href=""
                  className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 text-base sm:text-lg font-semibold shadow-lg"
                >
                  Book Now
                </a>

                <a
                  href="#layout"
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-base sm:text-lg font-medium bg-white/10 backdrop-blur-sm text-white"
                >
                  View Layout
                </a>
              </div>

              {/* ROUND FEATURE IMAGES */}
              <div className="mt-20 flex items-start gap-6 overflow-x-auto">
                {["Aesthetic Restaurant", "Machaan", "Meditation Hall"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className="flex flex-col items-center text-center min-w-20 md:min-w-[100px]"
                    >
                      <div className="mt-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ring-4 ring-white overflow-hidden bg-white/10 shadow-xl">
                        <img
                          src={circleImgs[i]}
                          alt={label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="mt-2 text-xs md:text-sm font-medium tracking-wide text-amber-200 drop-shadow">
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT SIDE IMAGE CARD */}
           {/* RIGHT SIDE IMAGE CARD */}
<div className="order-1 lg:order-2 flex justify-center lg:justify-end items-start">
  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
    
    {/* STAR BADGE */}
    <div className="absolute top-6 sm:top-8 z-10 -left-6 sm:-left-10">
      <StarBadge text={"1008\nGaj"} />
    </div>

    <div className="bg-white/10 rounded-3xl p-4 sm:p-6 shadow-xl backdrop-blur-md border border-white/20 mt-24 lg:mt-14">
      
      {/* Image Container (Increased height) */}
      {/* Image Container (Slideshow like background) */}
<div className="overflow-hidden rounded-2xl h-72 sm:h-96 lg:h-[450px] w-full">
  <div className="relative w-full h-full">
    {heroImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Dravyam farm"
        className={`
          absolute inset-0 
          w-full h-full object-cover 
          transition-opacity duration-[1500ms] ease-in-out
          ${bgIndex === index ? "opacity-100" : "opacity-0"}
        `}
      />
    ))}
  </div>
</div>


      {/* Text Section — Scales by screen size */}
      <div className="mt-6 text-left">
        <h3 className="text-white font-bold text-lg sm:text-2xl lg:text-3xl">
          1008 Sq. Yd. Organic Farm
        </h3>

        <p className="text-white/85 text-xs sm:text-sm lg:text-base mt-2 leading-snug">
          Indicative layout for reference purposes only.
        </p>

        <p className="text-white/60 text-[10px] sm:text-xs lg:text-sm mt-3 leading-relaxed">
          Near Jambudweep, Hastinapur • S.F-9, K.N Modi Complex, G.T Road, Modinagar
        </p>
      </div>
    </div>
  </div>
</div>
          </div>

          {/* bottom subtle watermark text */}
       
        </div>
      </section>

     <Herolayout/>
      {/* <FeaturesSection/> */}
    </>
  );
}

/* ---------- StarBadge component (Defined in same file) ---------- */
function StarBadge({ text = "1008\nGaj" }) {
  const lines = text.split("\n");
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M50 2 L61 36 L97 36 L67 56 L78 90 L50 70 L22 90 L33 56 L3 36 L39 36 Z"
          fill="#f6c63d"
          stroke="#e6a929"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute text-center translate-y-0">
        <div className="text-sm md:text-base font-bold leading-tight text-amber-900">
          {lines[0]}
        </div>
        {lines[1] && (
          <div className="text-xs md:text-sm font-semibold text-amber-900 -mt-1">
            {lines[1]}
          </div>
        )}
      </div>
    </div>
  );
}
