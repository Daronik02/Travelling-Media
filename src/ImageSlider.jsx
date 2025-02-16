import { useState, useEffect } from "react";

const slides = [
  { id: 1, image: "/howrahBridge.jpg" },
  { id: 2, image: "/IndiaGate.jpg" },
  { id: 3, image: "/StatueOfUnity.jpg" },
  { id: 4, image: "/Tajmahal.jpg" },
];

export default function AutoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
  {slides.map((slide, index) => (
    <img
      key={slide.id}
      src={slide.image}
      alt={`Slide ${slide.id}`}
      className="absolute w-[800px] h-[500px] object-cover transition-transform duration-500"
      style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
    />
  ))}
</div>

  );
}