
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, User, Search, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-6 w-6 text-ride-primary" />
              <span className="text-xl font-bold text-ride-dark">Ride With Me</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="text-ride-dark hover:text-ride-primary py-2 px-3 rounded-md flex items-center gap-1">
              <Search className="h-4 w-4" />
              <span>Find Rides</span>
            </Link>
            <Link to="/create-trip" className="text-ride-dark hover:text-ride-primary py-2 px-3 rounded-md flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Offer Ride</span>
            </Link>
            <Link to="/profile">
              <Button variant="outline" className="border-ride-primary text-ride-primary">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-ride-primary hover:bg-ride-secondary text-white">
                Register
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="text-ride-dark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
