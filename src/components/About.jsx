import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/800/600?random=2"
              alt="Team discussing blueprints"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              About Our Land Development
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              For over two decades, Sri Sai Ganesh Land Developers has stood as a trusted name in the land development sector. Our journey is built on a foundation of integrity, innovation, and a deep understanding of how to transform land into meaningful, high-value assets. We take pride in creating well-planned, sustainable, and future-ready layouts that support growing communities.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our multidisciplinary team—comprising experienced planners, surveyors, and development specialists—works collaboratively to deliver end-to-end solutions in plot development, layout planning, and land surveying. We are committed to delivering exceptional quality, maximizing land value, and ensuring the long-term success of every project and client we serve.
            </p>
            <a
              href="#portfolio"
              className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
