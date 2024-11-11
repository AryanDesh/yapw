export default function AboutMe() {
    return (
      <section className="py-20 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm a passionate developer with expertise in web technologies. 
            I love creating beautiful and functional applications that solve real-world problems.
          </p>
          <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Learn More
          </a>
        </div>
      </section>
    )
  }