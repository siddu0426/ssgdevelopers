import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Let's Build Together
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out to us
            to start the conversation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-primary font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-primary font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-accent font-bold py-3 px-10 rounded-lg text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
