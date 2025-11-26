export default function Location({ bgImage = "/locationimage.jpg" }) {
  const points = [
    { title: "Jambudweep Temple", dist: "100 meters", img: "/jumbudweep.jpg" },
    { title: "Digamber Jain Bada Mandir", dist: "150 meters", img: "/Digambarjain.jpg" },
    { title: "Ashtapad Teerth", dist: "150 meters", img: "/Asthapad.jpg" },
    { title: "Kailash Parvat", dist: "100 meters", img: "/Kailash.jpg" },
    { title: "Chidayatan", dist: "50 meters", img: "/Chidayatan.jpg" },
    { title: "Gaushala", dist: "1 km", img: "/Gaushala.jpg" },
    { title: "Karna Temple", dist: "2 km", img: "/Karna.jpg" },
    { title: "Local Market", dist: "500 meters", img: "/Local.jpg" },
  ];

  return (
    <section className="relative w-full py-20">
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${bgImage}')`,
        }}
      />

      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
          Nearby Attractions
        </h2>

        {/* 🔥 SAME HEIGHT COLUMNS USING GRID 🔥 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT — make items fill full height with equal distribution */}
          <div className="grid grid-rows-8 gap-4 md:gap-5 text-white">
            {points.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white/10 px-4 py-3 rounded-xl backdrop-blur-md border border-white/10"
              >
                <span className="text-sm md:text-base font-medium">{p.title}</span>
                <span className="text-amber-300 font-semibold text-sm md:text-base">{p.dist}</span>
              </div>
            ))}
          </div>

          {/* RIGHT — image grid already correct */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {points.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl overflow-hidden border border-white/10 p-2 backdrop-blur-md"
              >
                <div className="h-28 sm:h-32 md:h-36 lg:h-40 rounded-lg overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <span className="block text-center text-white text-xs md:text-sm mt-2 font-medium">
                  {p.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
