// FeaturesWithChecks.jsx
import React, { useState } from "react";

/**
 * FeaturesWithChecks
 * - Background image: /mnt/data/pic2.png (uploaded)
 * - Centered heading, glass-style card, two-column features
 * - Clickable checkboxes for availability; right column features are checked by default
 *
 * Usage:
 *   import FeaturesWithChecks from "./FeaturesWithChecks";
 *   <FeaturesWithChecks />
 */

export default function FeaturesSection({
  bgImage = "/src/assets/farmimage1.jpg",
  // if you want to disable thumbnails pass thumbnail={null}
  thumbnail = "/mnt/data/pic2.png",
}) {
  // Feature lists with default availability (right column checked)
  const leftList = [
    { id: "cctv", label: "CCTV Surveillance 24×7", desc: "Round-the-clock monitoring for safety.", available: false },
    { id: "fence", label: "Metal Net Fencing", desc: "Secure and durable perimeter fencing.", available: false },
    { id: "med", label: "Meditation Centre", desc: "Quiet space for yoga & meditation.", available: false },
    { id: "watch", label: "Watchman", desc: "On-site watchman for added security.", available: false },
    { id: "crops", label: "Fruit & Vegetable Crops", desc: "Organic seasonal cultivation on site.", available: false },
  ];

  const rightList = [
    { id: "elec", label: "Electricity + Water", desc: "Reliable power and water supply 24×7.", available: true },
    { id: "restaurant", label: "Aesthetic Restaurant", desc: "Farm-to-table dining experience.", available: true },
    { id: "waterb", label: "Water Bodies", desc: "Ponds & water features for landscape.", available: true },
    { id: "parking", label: "Dedicated Parking", desc: "Allocated car parking for visitors.", available: true },
  ];

  // merge into a single state object for easy toggling
  const initial = {};
  [...leftList, ...rightList].forEach((f) => (initial[f.id] = !!f.available));
  const [availableMap, setAvailableMap] = useState(initial);

  function toggle(id) {
    setAvailableMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="relative w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(6,10,6,0.48), rgba(6,10,6,0.48)), url('${bgImage}')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25 -z-5" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-100">Features</h2>
          <p className="mt-3 text-neutral-200 max-w-2xl mx-auto">
            Facilities & amenities that make <span className="text-amber-200 font-semibold">Dravyam Farms</span> secure,
            comfortable and beautiful.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT COLUMN */}
            <div className="space-y-4">
              {leftList.map((f) => (
                <FeatureRow
                  key={f.id}
                  id={f.id}
                  title={f.label}
                  desc={f.desc}
                  thumbnail={thumbnail}
                  checked={availableMap[f.id]}
                  onToggle={() => toggle(f.id)}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              {rightList.map((f) => (
                <FeatureRow
                  key={f.id}
                  id={f.id}
                  title={f.label}
                  desc={f.desc}
                  thumbnail={thumbnail}
                  checked={availableMap[f.id]}
                  onToggle={() => toggle(f.id)}
                />
              ))}
            </div>
          </div>

          {/* small footer line */}
          <div className="mt-8 text-sm text-white/70 text-center">
            High potential • Prime land • Limited availability
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- FeatureRow component WITHOUT toggle, WITH right icon ---------- */
function FeatureRow({  title, desc,  }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 ring-1 ring-white/6">
      {/* Optional thumbnail */}
     

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold text-sm md:text-base">{title}</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">{desc}</div>
          </div>

          {/* RIGHT SIDE FIXED CHECK ICON */}
          <div className="ml-4 text-emerald-400 text-xl">
            ✓
          </div>
        </div>
      </div>
    </div>
  );
}

