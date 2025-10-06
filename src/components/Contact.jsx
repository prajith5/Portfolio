const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg pt-4">
            Have a creativeness in mind? Feel free to reach out. I'm always open
            to discussing new opportunities.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div>
              <p className="text-gray-400 font-medium">Email</p>
              <p className="text-white">prajithsasi65@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-400 font-medium">Phone</p>
              <p className="text-white">+91 9360430955</p>
            </div>
            <div>
              <p className="text-gray-400 font-medium">Location</p>
              <p className="text-white">Coimbatore, Tamilnadu</p>
            </div>
            <div>
              <p className="text-gray-400 font-medium">Connect With Me</p>
              <p className="text-white">
                Feel free to connect on social platforms
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col gap-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Send a Message
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-1/2 p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject..."
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
