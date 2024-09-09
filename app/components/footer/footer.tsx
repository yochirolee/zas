import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-24 text-white">
      <div className=" mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-400">
              CTEnvios is your trusted partner for international shipping and
              logistics solutions. We provide reliable and efficient services to
              meet all your shipping needs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  International Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>10230 NW 80th Ave 33016, Hialeah Garderns</li>
              <li>Phone: +1 (305) 851-3004</li>
              <li>Email: soporte@ctenvios.com</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CTEnvios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
