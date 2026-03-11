import { useEffect, useState } from "react";
import { Sparkles, UserPlus, Info } from "lucide-react";

interface HeroSectionProps {
  images: string[]; // tableau des images
  autoSlide?: boolean; // active ou non le défilement auto
  interval?: number; // en secondes
}

export default function HeroSection({
  images,
  autoSlide = false,
  interval = 5,
}: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval * 1000);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, images.length]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 carousel w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item w-full h-full absolute transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 max-w-4xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="badge badge-outline gap-2 px-4 py-3 text-white border-white backdrop-blur-sm">
            <Sparkles size={16} />
            PIXEL Robotics
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Robot Suiveur de Ligne - Design Formule 1
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          La vision naît d'un PIXEL,l'innovation naît de nous
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#presentation" className="btn btn-primary gap-2 px-8">
            <Info size={18} />
            Découvrir le projet
          </a>

          <a
            href="#membres"
            className="btn btn-outline text-white border-white gap-2 px-8 hover:bg-white hover:text-black"
          >
            <UserPlus size={18} />
            Voir les membres
          </a>
        </div>

        {/* Dots Indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-primary scale-110" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
