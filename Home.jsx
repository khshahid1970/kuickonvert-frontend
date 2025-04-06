import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Convert Your Files Instantly</h1>
        <p className="text-xl md:text-2xl mb-8">Free, fast & reliable — PDFs, images, audio, video & more</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/pdf-tools" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">Try PDF Tools</Link>
          <a href="#tools" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">Get Started</a>
        </div>
      </section>

      <section id="tools" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose a Conversion Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { name: 'PDF', icon: '📄' },
            { name: 'Image', icon: '🖼️' },
            { name: 'Audio', icon: '🎵' },
            { name: 'Video', icon: '🎞️' },
            { name: 'Word/Excel', icon: '📄' },
            { name: 'OCR/Text', icon: '📚' }
          ].map((tool, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-3">{tool.icon}</div>
              <div className="text-xl font-semibold">{tool.name}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 text-center py-6 mt-20 text-gray-600 text-sm">
        © 2025 Kuickonvert — All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
