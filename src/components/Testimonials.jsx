import React, { useState } from "react";

// Testimonials data
const testimonialsData = [
  {
    quote:
      "SSG Developers turned our complex vision into a stunning reality. Their professionalism and attention to detail were second to none. We couldn't be happier with the results.",
    name: "Sarah Johnson",
    title: "CEO, Innovate Corp",
  },
  {
    quote:
      "Working with the Apex team was a seamless experience from start to finish. They managed every aspect of the project with expertise and kept us informed every step of the way.",
    name: "Michael Chen",
    title: "Property Investor",
  },
  {
    quote:
      "The quality of their work speaks for itself. They delivered our project on time and on budget, exceeding all our expectations. I highly recommend them.",
    name: "David Rodriguez",
    title: "Director, Urban Renewal Group",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">What Our Clients Say</h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="p-8 bg-gray-800 rounded-lg shadow-xl min-h-[250px] flex flex-col justify-center">
            <p className="text-xl italic mb-6">"{currentTestimonial.quote}"</p>
            <div>
              <p className="font-bold text-lg text-accent">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-400">{currentTestimonial.title}</p>
            </div>
          </div>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-accent p-3 rounded-full hover:bg-accent-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-accent p-3 rounded-full hover:bg-accent-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
