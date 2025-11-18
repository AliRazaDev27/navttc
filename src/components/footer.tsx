import React from "react";
// import { FaFacebook,  FaInstagram, FaTwitter } from "react-icons";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-20 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold mb-4">SHOP.CO</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We have clothes that suits your style and which you're proud to wear.
              From women to men.
            </p>

            
            <div className="flex items-center gap-4 mt-6">
              <a className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                {/* <FaFacebook size={18} /> */}
              </a>
              <a className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                {/* <FaTwitter size={18} /> */}
              </a>
              <a className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                {/* <FaInstagram size={18} /> */}
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">HELP</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">FAQ</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>

        </div>

        
        <div className="mt-16 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">

          
          <p className="text-sm text-gray-500">
            Shop.co © 2000–2023, All Rights Reserved
          </p>

          
          <div className="flex items-center gap-3">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/Mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/paypal.png" alt="Paypal" className="h-6" />
            <img src="/Applecard.png" alt="Apple Pay" className="h-6" />
            <img src="/googlepay.png" alt="Google Pay" className="h-6" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
