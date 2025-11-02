import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroLab1 from "@/assets/hero-lab-1.jpg";
import heroLab2 from "@/assets/hero-lab-2.jpg";
import heroLab3 from "@/assets/hero-lab-3.jpg";

const slides = [
  {
    image: heroLab1,
    title: "Accurate. Reliable. Same-Day Reports.",
    subtitle: "Professional pathology services you can trust",
  },
  {
    image: heroLab2,
    title: "Advanced Medical Testing",
    subtitle: "State-of-the-art equipment for precise results",
  },
  {
    image: heroLab3,
    title: "Expert Care & Analysis",
    subtitle: "Experienced professionals dedicated to your health",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
