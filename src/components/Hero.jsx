import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 z-10"></div>

      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.aeonmedia.co/images/ca63d1f2-efe7-4358-8591-ad5984d169e3/larger-6499struthtosendlarger.jpeg?top=124&left=0&cropWidth=2000&cropHeight=1125&width=1200&quality=75&format=jpg')",
        }}
      ></div> */}

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Shaping The Future of Land Development
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          From vacant plots to vibrant communities, We transforms visions into
          reality with precision, expertise, and a commitment to excellence.
        </p>
        <a
          href="#contact"
          className="bg-accent bg-white text-neutral-900 font-bold py-4 px-8 rounded-4xl text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
