import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 py-8 mt-8 text-center text-white">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">Copyright &copy; Gemini Gallery 2022</p>
        <div className="flex items-center">
          <a href="#" className="mr-4 text-sm font-semibold hover:text-gray-400">Terms of Service</a>
          <a href="#" className="mr-4 text-sm font-semibold hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="mr-4 text-sm font-semibold hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
