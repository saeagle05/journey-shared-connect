
import { Link } from "react-router-dom";
import { Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-6 w-6 text-ride-primary" />
              <span className="text-xl font-bold text-ride-dark">Ride With Me</span>
            </Link>
            <p className="mt-4 text-sm text-ride-muted">
              Connecting drivers and passengers for a greener, more connected world.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">For Passengers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/search" className="text-base text-ride-muted hover:text-ride-primary">
                  Find a Ride
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-base text-ride-muted hover:text-ride-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-base text-ride-muted hover:text-ride-primary">
                  Safety
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">For Drivers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/create-trip" className="text-base text-ride-muted hover:text-ride-primary">
                  Offer a Ride
                </Link>
              </li>
              <li>
                <Link to="/driver-faq" className="text-base text-ride-muted hover:text-ride-primary">
                  Driver FAQ
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-base text-ride-muted hover:text-ride-primary">
                  Insurance & Safety
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-base text-ride-muted hover:text-ride-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-ride-muted hover:text-ride-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-ride-muted hover:text-ride-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-ride-muted hover:text-ride-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-ride-muted">
            &copy; {new Date().getFullYear()} Ride With Me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
