import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Secure Your Future with Confidence</h1>
        <p className="mt-4 text-lg">Comprehensive insurance solutions tailored for you.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get a Quote
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Life Insurance', 'Health Coverage', 'Auto Protection'].map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{service}</h3>
              <p className="text-gray-600 mt-2">Reliable and affordable insurance plans.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          We are committed to providing top-tier insurance services to ensure you and your loved ones stay protected at all times.
        </p>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {['Excellent Service!', 'Reliable and Affordable'].map((review, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-700 italic">"{review}"</p>
              <span className="block mt-2 font-semibold">- Satisfied Customer</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
