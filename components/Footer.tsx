import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white text-black pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Contact Section */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-base mb-6 text-black">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919936169852" className="flex items-start gap-3 text-gray-600 text-sm hover:text-black transition-colors group">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span>+91-9936169852</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Lanka BHU, Varanasi</span>
                </div>
              </li>
              <li>
                <a href="mailto:chaurasiawadh@gmail.com" className="flex items-start gap-3 text-gray-600 text-sm hover:text-black transition-colors group">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>chaurasiawadh@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigate Section */}
          <div>
            <h4 className="font-bold text-base mb-6 text-black">Navigate</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-600 text-sm hover:text-black transition-colors">Services</Link></li>
              <li><Link href="/faq" className="text-gray-600 text-sm hover:text-black transition-colors">FAQ</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 text-sm hover:text-black transition-colors">Portfolio</Link></li>
              <li><Link href="/#culture" className="text-gray-600 text-sm hover:text-black transition-colors">Discover</Link></li>
            </ul>
          </div>

          {/* Solution Section */}
          <div>
            <h4 className="font-bold text-base mb-6 text-black">Solution</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-600 text-sm hover:text-black transition-colors">Get in Touch</Link></li>
              <li><Link href="/services" className="text-gray-600 text-sm hover:text-black transition-colors">Technology</Link></li>
              <li><Link href="/#team" className="text-gray-600 text-sm hover:text-black transition-colors">Who We Are</Link></li>
              <li><Link href="/services" className="text-gray-600 text-sm hover:text-black transition-colors">Expertise</Link></li>
            </ul>
          </div>

          {/* Discover Section */}
          <div>
            <h4 className="font-bold text-base mb-6 text-black">Discover</h4>
            <ul className="space-y-3">
              <li><Link href="/blogs" className="text-gray-600 text-sm hover:text-black transition-colors">Latest News</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 text-sm hover:text-black transition-colors">New Arrivals</Link></li>
              <li><Link href="/services" className="text-gray-600 text-sm hover:text-black transition-colors">Solution</Link></li>
              <li><Link href="/contact" className="text-gray-600 text-sm hover:text-black transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-bold text-base mb-6 text-black">Follow Us</h4>
            <ul className="space-y-3">
              <li><a href="https://www.facebook.com/share/1KezMqMG2a/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-black transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/sitein2days.online/" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-black transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <p className="text-[10px] text-gray-500">
              © 2026 <span className="font-semibold text-gray-700">sitein2days.online</span>. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-[10px] text-gray-500">
            <Link href="/policy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/policy" className="hover:text-black transition-colors">Terms & Conditions</Link>
            <Link href="/policy" className="hover:text-black transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;