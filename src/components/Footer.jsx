import React from 'react'
import logo from '/assets/logo.png';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { footerData } from '../data/footerData';

const Footer = () => {
    if (!footerData) return null;
  return (
    <footer className="bg-black text-white pt-6 flex flex-col text-sx">
 <div className='flex flex-col md:flex-row py-10'>
    {/* Logo and Social Icons */}
   <div className=''>
    <div className="flex flex-row justify-between items-center  md:flex-col  md:items-start px-6  mb-6">
      <div className='py-4'>
        <img src={logo} alt="itel logo" className="w-16 h-auto" />
      </div>
      <div className="flex space-x-4">
        {footerData?.socialLinks?.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon === "linkedin" && <FaLinkedin className="text-2xl" />}
            {link.icon === "instagram" && <FaInstagram className="text-2xl" />}
            {link.icon === "facebook" && <FaFacebook className="text-2xl" />}
          </a>
        ))}
      </div>
    </div>

    {/* Newsletter */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full p-2 rounded-md bg-[#1E1E1E] text-white"
        />
        
      </div>
      <p className="text-sm mt-2">
        Join our newsletter to stay up to date on features and releases
      </p>
    </div>
    </div>
    {/* Products Section */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-400">Products</h4>
      <ul className="space-y-2">
        {footerData?.products?.map((product, idx) => (
          <li key={idx}>
            <a href="#" className=" text-white text-sm">{product}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Support Section */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-400">Support</h4>
      <ul className="space-y-2">
        {footerData?.support?.map((item, idx) => (
          <li key={idx}>
            <a href="#" className=" text-sm">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Media Section */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-400">Media</h4>
      <ul className="space-y-2">
        {footerData?.media?.map((item, idx) => (
          <li key={idx}>
            <a href="#" className="text-sm">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* About Section */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-400">About itel</h4>
      <ul className="space-y-2">
        {footerData?.about?.map((item, idx) => (
          <li key={idx}>
            <a href="#" className="text-sm">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Section */}
    <div className="mb-6 px-6">
      <h4 className="text-lg font-semibold mb-2 text-[#A3A89F]">Contact</h4>
      <p className="text-sm">
        <a href={`tel:${footerData?.contact?.phone}`} className="hover:underline">{footerData?.contact?.phone}</a>
      </p>
      <p className="text-sm">
        <a href={`mailto:${footerData?.contact?.email}`} className="hover:underline">{footerData?.contact?.email}</a>
      </p>
    </div>
    </div>
    {/* Footer Links */}
    <div className="border-t border-gray-700 bg-[#1E1E1E] p-4">
      <div className="flex justify-between text-sm">
        {footerData?.footerLinks?.map((link, idx) => (
          <a key={idx} href="#" className="text-[#A3A89F]">{link}</a>
        ))}
      </div>
    </div>
  </footer>
  )
}

export default Footer
