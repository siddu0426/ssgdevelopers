import React from "react";

// Project data
const projectsData = [
  {
    imageUrl: "https://housing-images.n7net.in/4f2250e8/92cc22b457265ed5da49300b4ac8bf2d/v0/large/patra_city-mamidilova-visakhapatnam-t_ramachandra_patra.jpeg",
    title: "PatraCity",
    category: "Residential Development",
  },
  // {
  //   imageUrl: "https://picsum.photos/600/400?random=4",
  //   title: "Commerce Center",
  //   category: "Commercial Hub",
  // },
  // {
  //   imageUrl: "https://picsum.photos/600/400?random=5",
  //   title: "Green Valley Park",
  //   category: "Public Spaces",
  // },
  // {
  //   imageUrl: "https://picsum.photos/600/400?random=6",
  //   title: "Lakeside Lofts",
  //   category: "Mixed-Use Community",
  // },
];

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <p className="text-sm text-accent font-semibold">{project.category}</p>
      <h3 className="text-2xl font-bold">{project.title}</h3>
    </div>
  </div>
);

// Portfolio Section
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A glimpse into the diverse and successful projects we've had the
            privilege to develop and complete.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
