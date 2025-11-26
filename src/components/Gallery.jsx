import farmimage from "/farmimage1.jpg";

export default function Gallery() {
  return (
    <section
      className="relative w-full py-20"
      style={{
        // IMPORTANT: backgroundImage must be a string like `url(...)`
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${farmimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center mx-auto text-white">
          Our Latest Creations
        </h1>
        <p className="text-md text-white/80 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion, and style.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">
          {/* ---------- IMAGE CARD ---------- */}
          {[
            "/gallerypic1.jpg",
            "/gallerypic2.jpg",
            "/gallerypic3.jpg",
            "/gallerypic4.jpg",
            "/gallerypic5.jpg",
            "/gallerypic1.jpg",
            "/gallerypic2.jpg",
            "/gallerypic7.jpg",
            "/gallerypic8.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden w-56 h-40 md:w-64 md:h-44"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover object-top"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="flex items-center gap-1 text-sm text-white/70 cursor-pointer">
                  Show More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
