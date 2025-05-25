import React from 'react'

const Footer = () => {
  return (
    <div>
  {/* Newsletter Section */}
  <section className="bg-black text-white py-12 px-4 md:px-8 mt-12">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow md:w-2/3 bg-white text-black rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-400 text-black font-medium rounded-full px-6 py-3 hover:bg-yellow-300 transition-colors">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  </section>

  {/* Footer Section */}
  <footer className="bg-white py-12 px-4 md:px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <a href="#" className="text-2xl font-bold text-black block mb-4">LWS.SHOP</a>
          <p className="text-gray-600 mb-4">
            We have clothes that suit your style and which you're proud to wear — from women to men.
          </p>
        </div>

        {/* Quick Links (Optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">New Arrivals</a></li>
            <li><a href="#" className="hover:text-black">Best Sellers</a></li>
            <li><a href="#" className="hover:text-black">On Sale</a></li>
            <li><a href="#" className="hover:text-black">Brands</a></li>
          </ul>
        </div>

        {/* Support (Optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
            <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Social Media (Optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-700">Facebook</a>
            <a href="#" className="hover:text-gray-700">Instagram</a>
            <a href="#" className="hover:text-gray-700">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Footer