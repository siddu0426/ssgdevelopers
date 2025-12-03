import React from "react";
import { BuildingIcon, MapIcon, ScaleIcon } from "../constants";

// Services data
const servicesData = [
  {
    // icon: MapIcon,
    title: "Layout Design",
    description:
      "Strategic planning to maximize land use, navigate zoning regulations, and secure necessary permits for your project.",
  },
  {
    // icon: BuildingIcon,
    title: "Commercial Layout Development",
    description:
      "Our commercial layout development services focus on transforming land into high-performing commercial zones designed for profitability, accessibility, and long-term sustainability.",
  },
  {
    // icon: ScaleIcon,
    title: "Site Planning",
    description:
      "We provide expert site-planning, ensuring efficient use of space, compliance with regulatory norms, and optimal infrastructure integration.",
  },
];

// Service Card Component
const ServiceCard = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="mb-6">{service.icon}</div>
    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

// Services Section
const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          We offer a comprehensive range of services to bring your land
          development projects to life, from initial concept to final
          construction.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
