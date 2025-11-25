// import React from "react";
// import pic4 from "/src/assets/pic4.jpg";
// import pic1 from "/src/assets/pic1.jpg";
// import pic2 from "/src/assets/pic2.jpg";
// import pic3 from "/src/assets/pic3.jpg";
// import Herolayout from "./Herolayout";
// import FeaturesSection from "./FeaturesSection";

// export default function Hero({

//   const heroImages = [
//   "/src/assets/hero1.jpg",
//   "/src/assets/hero2.jpg",
//   "/src/assets/hero3.jpg",
// ]

// const [bgIndex, setBgIndex] = useState(0)

// useEffect(() => {
//   const interval = setInterval(() => {
//     setBgIndex((prev) => (prev + 1) % heroImages.length);
//   }, 4000); // 4 seconds

//   return () => clearInterval(interval);
// }, []);


//   heroSrc = "/src/assets/heroimage.jpg",
//   circleImgs = [pic1, pic2, pic3],
// }) {
//   return (
//     <>
//       <section
//          className="relative w-full min-h-screen bg-center bg-cover flex items-center transition-all duration-700"
//   style={{ backgroundImage: `url('${heroImages[bgIndex]}')` }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/55 z-10" />

//         <div className="relative container mx-auto px-6 py-12 lg:py-24 z-20">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//             {/* LEFT SIDE TEXT CONTENT */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-green-600 leading-tight drop-shadow-xl">
//                 DRAVYAM
//                 <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-green-400 mt-2">
//                   farms
//                 </span>
//               </h2>

//               <p className="mt-5 text-base sm:text-lg md:text-xl text-white/95 max-w-xl drop-shadow-md">
//                 <strong className="text-amber-300">1008 Gaj Organic Farm</strong> — Near
//                 Jambudweep, Hastinapur
//               </p>

//               <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
//                 <a
//                   href="#book"
//                   className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 text-base sm:text-lg font-semibold shadow-lg"
//                 >
//                   Book Now
//                 </a>

//                 <a
//                   href="#layout"
//                   className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-base sm:text-lg font-medium bg-white/10 backdrop-blur-sm text-white"
//                 >
//                   View Layout
//                 </a>
//               </div>

//               {/* ROUND FEATURE IMAGES */}
//               <div className="mt-10 flex items-start gap-6 overflow-x-auto">
//                 {["Aesthetic Restaurant", "Machaan", "Meditation Hall"].map((label, i) => (
//                   <div key={label} className="flex flex-col items-center text-center min-w-[80px] md:min-w-[100px]">
//                     <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ring-4 ring-white overflow-hidden bg-white/10 shadow-xl">
//                       <img src={circleImgs[i]} alt={label} className="w-full h-full object-cover" />
//                     </div>
//                     <span className="mt-2 text-xs md:text-sm font-medium tracking-wide text-amber-200 drop-shadow">
//                       {label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT SIDE IMAGE CARD */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-start">
//               <div className="relative w-full max-w-sm lg:max-w-md">
//                 {/* STAR BADGE */}
//                 <div className="absolute -top-8 -left-8 md:-left-10">
//                   <StarBadge text={"1008\nGaj"} />
//                 </div>

//                 <div className="bg-white/8 rounded-2xl p-3 shadow-lg backdrop-blur-sm border border-white/12 mt-20 lg:mt-16">
//                   <div className="overflow-hidden rounded-xl h-64 md:h-80 w-full">
//                     <img src={pic4} alt="Dravyam farm" className=" w-full h-full object-cover" />
//                   </div>

//                   <div className="mt-4 text-left">
//                     <h3 className="text-white font-semibold text-lg md:text-xl">1008 Sq. Yd. Organic Farm</h3>
//                     <p className="text-sm md:text-base text-white/80 mt-1">
//                       Indicative layout for reference purposes only.
//                     </p>
//                     <p className="text-xs md:text-sm text-white/60 mt-2">
//                       Near Jambudweep, Hastinapur • S.F-9, K.N Modi Complex, G.T Road, Modinagar
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* bottom subtle watermark text */}
//           <div className="mt-10 text-center text-white/20 text-xs z-10">www.dravyaminfo.com</div>
//         </div>
//       </section>
//       <Herolayout/>
//       {/* <FeaturesSection/> */}
//     </>
//   );
// }

// /* ---------- StarBadge component (Defined in same file) ---------- */
// function StarBadge({ text = "1008\nGaj" }) {
//   const lines = text.split("\n");
//   return (
//     <div className="relative inline-flex items-center justify-center">
//       <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//         <path
//           d="M50 2 L61 36 L97 36 L67 56 L78 90 L50 70 L22 90 L33 56 L3 36 L39 36 Z"
//           fill="#f6c63d"
//           stroke="#e6a929"
//           strokeWidth="2"
//         />
//       </svg>

//       <div className="absolute text-center -translate-y-0">
//         <div className="text-sm md:text-base font-bold leading-tight text-amber-900">{lines[0]}</div>
//         {lines[1] && <div className="text-xs md:text-sm font-semibold text-amber-900 -mt-1">{lines[1]}</div>}
//       </div>
//     </div>
//   );
// }









import React, { useEffect, useState } from "react";
import pic4 from "/src/assets/pic4.jpg";
import pic1 from "/src/assets/pic1.jpg";
import pic2 from "/src/assets/pic2.jpg";
import pic3 from "/src/assets/pic3.jpg";
import hero1 from "/src/assets/heroimage.jpg";
import hero2 from "/src/assets/farmimage2.jpg";
import hero3 from "/src/assets/farmimage1.jpg";
import hero4 from "/src/assets/farmimage3.jpg";
import Herolayout from "./Herolayout";
import FeaturesSection from "./FeaturesSection";

export default function Hero({
  // optional props with defaults
  // heroSrc = hero1, // fallback (not used if slideshow active)
  circleImgs = [pic1, pic2, pic3],
}) {
  // --- slideshow images (imported above) ---
  const heroImages = [hero1, hero2, hero3,hero4];

  // --- state & effect for auto-changing background ---
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // change every 4s

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <section
        className="relative w-full min-h-screen bg-center bg-cover flex items-center transition-all duration-700"
        style={{ backgroundImage: `url('${heroImages[bgIndex]}')` }}
      >
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
                <strong className="text-amber-300">1008 Gaj Organic Farm</strong> — Near
                Jambudweep, Hastinapur
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
              <div className="mt-10 flex items-start gap-6 overflow-x-auto">
                {["Aesthetic Restaurant", "Machaan", "Meditation Hall"].map((label, i) => (
                  <div key={label} className="flex flex-col items-center text-center min-w-[80px] md:min-w-[100px]">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ring-4 ring-white overflow-hidden bg-white/10 shadow-xl">
                      <img src={circleImgs[i]} alt={label} className="w-full h-full object-cover" />
                    </div>
                    <span className="mt-2 text-xs md:text-sm font-medium tracking-wide text-amber-200 drop-shadow">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE IMAGE CARD */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-start">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* STAR BADGE */}
                <div className="absolute -top-8 -left-8 md:-left-10">
                  <StarBadge text={"1008\nGaj"} />
                </div>

                <div className="bg-white/8 rounded-2xl p-3 shadow-lg backdrop-blur-sm border border-white/12 mt-20 lg:mt-16">
                  <div className="overflow-hidden rounded-xl h-64 md:h-80 w-full">
                    <img src={pic4} alt="Dravyam farm" className=" w-full h-full object-cover" />
                  </div>

                  <div className="mt-4 text-left">
                    <h3 className="text-white font-semibold text-lg md:text-xl">1008 Sq. Yd. Organic Farm</h3>
                    <p className="text-sm md:text-base text-white/80 mt-1">
                      Indicative layout for reference purposes only.
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-2">
                      Near Jambudweep, Hastinapur • S.F-9, K.N Modi Complex, G.T Road, Modinagar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom subtle watermark text */}
          <div className="mt-10 text-center text-white/20 text-xs z-10">www.dravyaminfo.com</div>
        </div>
      </section>

      <Herolayout />
      {/* <FeaturesSection/> */}
    </>
  );
}

/* ---------- StarBadge component (Defined in same file) ---------- */
function StarBadge({ text = "1008\nGaj" }) {
  const lines = text.split("\n");
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M50 2 L61 36 L97 36 L67 56 L78 90 L50 70 L22 90 L33 56 L3 36 L39 36 Z"
          fill="#f6c63d"
          stroke="#e6a929"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute text-center -translate-y-0">
        <div className="text-sm md:text-base font-bold leading-tight text-amber-900">{lines[0]}</div>
        {lines[1] && <div className="text-xs md:text-sm font-semibold text-amber-900 -mt-1">{lines[1]}</div>}
      </div>
    </div>
  );
}
