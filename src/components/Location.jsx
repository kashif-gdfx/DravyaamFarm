export default function Location({
  bgImage = "/src/assets/locationimage.jpg",
}) {
  const points = [
    {
      title: "Jambudweep Temple",
      dist: "100 meters",
      img: "/src/assets/jumbudweep.jpg",
    },
    {
      title: "Digamber Jain Bada Mandir",
      dist: "150 meters",
      img: "/src/assets/Digambarjain.jpg",
    },
    {
      title: "Ashtapad Teerth",
      dist: "150 meters",
      img: "/src/assets/Asthapad.jpg",
    },
    {
      title: "Kailash Parvat",
      dist: "100 meters",
      img: "/src/assets/Kailash.jpg",
    },
    {
      title: "Chidayatan",
      dist: "50 meters",
      img: "/src/assets/Chidayatan.jpg",
    },
    { title: "Gaushala", dist: "1 km", img: "/src/assets/Gaushala.jpg" },
    { title: "Karna Temple", dist: "2 km", img: "/src/assets/Karna.jpg" },
    { title: "Local Market", dist: "500 meters", img: "/src/assets/Local.jpg" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* -------- LEFT SIDE POINT LIST -------- */}
          <div className="space-y-5 text-white">
            {points.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10"
              >
                <span className="text-lg font-semibold">{p.title}</span>
                <span className="text-amber-300 font-medium">{p.dist}</span>
              </div>
            ))}
          </div>

          {/* -------- RIGHT SIDE IMAGES GRID -------- */}
          <div className="grid grid-cols-2 gap-5">
            {points.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md p-2"
              >
                <div className="w-full h-32 md:h-40 rounded-lg overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="block text-center text-white text-sm md:text-base mt-2 font-medium">
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
