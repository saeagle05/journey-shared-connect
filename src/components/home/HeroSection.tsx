
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, User, MapPin, Zap, Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-ride-light to-white pt-24 pb-16 px-4 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-ride-dark mb-6">
              Sharing rides, building community
            </h1>
            <p className="text-xl text-ride-muted mb-8 max-w-lg">
              Connect with drivers heading your way. Save money, reduce emissions, and make new connections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/search">
                <Button size="lg" className="bg-ride-primary hover:bg-ride-secondary text-white">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find a Ride
                </Button>
              </Link>
              <Link to="/create-trip">
                <Button size="lg" variant="outline" className="border-ride-primary text-ride-primary">
                  <Car className="h-4 w-4 mr-2" />
                  Offer a Ride
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <MapPin className="h-5 w-5 text-ride-primary" />
                </div>
                <span className="text-sm text-ride-dark font-medium">Easy to Find</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <Shield className="h-5 w-5 text-ride-primary" />
                </div>
                <span className="text-sm text-ride-dark font-medium">Verified Users</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <Star className="h-5 w-5 text-ride-primary" />
                </div>
                <span className="text-sm text-ride-dark font-medium">Rating System</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <Zap className="h-5 w-5 text-ride-primary" />
                </div>
                <span className="text-sm text-ride-dark font-medium">Instant Booking</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden relative z-10 mx-auto lg:mr-0 lg:ml-auto max-w-md">
              <div className="absolute top-0 left-0 w-full h-2 bg-ride-primary"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-ride-primary mr-4">
                      <Car className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">From New York to Boston</h3>
                      <p className="text-sm text-gray-500">Tomorrow, 9:00 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-ride-dark text-lg">Free</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-4 w-4 text-ride-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pickup point</p>
                      <p className="font-medium">Grand Central Terminal, New York</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Drop-off point</p>
                      <p className="font-medium">Boston South Station</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">John D.</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        <span className="text-xs text-gray-500">4.8 (42 rides)</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-ride-primary hover:bg-blue-50">
                    View Profile
                  </Button>
                </div>
                
                <Button className="w-full bg-ride-primary hover:bg-ride-secondary text-white">
                  Request to Join
                </Button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 h-56 w-56 bg-blue-100 rounded-full opacity-50 z-0 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 h-56 w-56 bg-green-100 rounded-full opacity-50 z-0 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
