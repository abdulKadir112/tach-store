import React from "react";
import Container from "../layer/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
        <Container>
        <div className="flex justify-between pb-11">
           <div>
           <h2 className="text-[38px] font-bold">Sign Up To Our Newsletter.</h2>
           <p className="text-base pt-1">Be the first to hear about the latest offers.</p>
           </div>
          <div className="w-[391px] mt-4 flex items-center gap-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-sm focus:outline-none text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">


        {/* Information Links */}
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">About Zip</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Search</Link></li>
            <li><Link href="#" className="hover:underline">Terms</Link></li>
            <li><Link href="#" className="hover:underline">Orders and Returns</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">Advanced Search</Link></li>
            <li><Link href="#" className="hover:underline">Newsletter Subscription</Link></li>
          </ul>
        </div>

        {/* PC Parts Links */}
        <div>
          <h3 className="font-bold mb-2">PC Parts</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">CPUS</Link></li>
            <li><Link href="#" className="hover:underline">Add On Cards</Link></li>
            <li><Link href="#" className="hover:underline">Hard Drives (Internal)</Link></li>
            <li><Link href="#" className="hover:underline">Graphic Cards</Link></li>
            <li><Link href="#" className="hover:underline">Keyboards / Mice</Link></li>
            <li><Link href="#" className="hover:underline">Cases / Power Supplies / Cooling</Link></li>
            <li><Link href="#" className="hover:underline">RAM (Memory)</Link></li>
            <li><Link href="#" className="hover:underline">Software</Link></li>
            <li><Link href="#" className="hover:underline">Speakers / Headsets</Link></li>
            <li><Link href="#" className="hover:underline">Motherboards</Link></li>
          </ul>
        </div>

        {/* Desktop PCs Links */}
        <div>
          <h3 className="font-bold mb-2">Desktop PCs</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Custom PCs</Link></li>
            <li><Link href="#" className="hover:underline">Servers</Link></li>
            <li><Link href="#" className="hover:underline">MSI All-In-One PCs</Link></li>
            <li><Link href="#" className="hover:underline">HP/Compaq PCs</Link></li>
            <li><Link href="#" className="hover:underline">ASUS PCs</Link></li>
            <li><Link href="#" className="hover:underline">Tecs PCs</Link></li>
          </ul>
        </div>

        {/* Laptops */}
        <div>
          <h3 className="font-bold mb-2">Laptops</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Custom PCs</Link></li>
            <li><Link href="#" className="hover:underline">Servers</Link></li>
            <li><Link href="#" className="hover:underline">MSI All-In-One PCs</Link></li>
            <li><Link href="#" className="hover:underline">HP/Compaq PCs</Link></li>
            <li><Link href="#" className="hover:underline">ASUS PCs</Link></li>
            <li><Link href="#" className="hover:underline">Tecs PCs</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-bold mb-2">Address</h3>
          <p className="text-sm">
            Address: 1234 Street Address City Address, 1234
          </p>
          <p className="text-sm">Phones: (00) 1234 5678</p>
          <p className="text-sm">We are open Monday–Thursday: 9:00 AM – 5:30 PM</p>
          <p className="text-sm">Friday: 9:00 AM – 6:00 PM</p>
          <p className="text-sm">Saturday: 11:00 AM – 5:00 PM</p>
          <p className="text-sm mt-4">E-mail: <a href="mailto:shop@email.com" className="hover:underline">shop@email.com</a></p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>Copyright © 2020 Shop Pty. Ltd.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <img src="/path-to-paypal-logo.png" alt="PayPal" className="h-6" />
          <img src="/path-to-visa-logo.png" alt="Visa" className="h-6" />
          <img src="/path-to-mastercard-logo.png" alt="MasterCard" className="h-6" />
        </div>
      </div>
        </Container>
    </footer>
  );
};

export default Footer;
