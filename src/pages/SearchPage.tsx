import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search, MapPin, User, Star, Car, Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample rides data
  const rides = [
    {
      id: 1,
      driver: {
        name: "John D.",
        rating: 4.8,
        rides: 42,
        verified: true,
      },
      from: "New York, NY",
      to: "Boston, MA",
      date: "Tomorrow, 9:00 AM",
      seats: 3,
      price: "Free",
      features: ["Wheelchair accessible", "Child seat available"],
    },
    {
      id: 2,
      driver: {
        name: "Emma S.",
        rating: 4.9,
        rides: 64,
        verified: true,
      },
      from: "New York, NY",
      to: "Philadelphia, PA",
      date: "Tomorrow, 11:30 AM",
      seats: 2,
      price: "Free",
      features: [],
    },
    {
      id: 3,
      driver: {
        name: "Robert M.",
        rating: 4.7,
        rides: 28,
        verified: true,
      },
      from: "New York, NY",
      to: "Washington, DC",
      date: "Jun 16, 7:15 AM",
      seats: 4,
      price: "Free",
      features: ["Pets allowed"],
    },
  ];

  return (
    <Layout>
      <div className="pt-20 pb-10 bg-ride-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-ride-dark mb-6">Find Available Rides</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Departure city" 
                      className="pl-9 ride-input" 
                      defaultValue="New York, NY"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Destination city" 
                      className="pl-9 ride-input" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="flex items-end">
                  <Button className="w-full bg-ride-primary hover:bg-ride-secondary">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <Accessibility className="mr-1 h-3 w-3" />
                  Wheelchair accessible
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Any time
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  1+ seats
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ride-dark mb-4">Available Rides</h2>
            
            <div className="space-y-4">
              {rides.map((ride) => (
                <div key={ride.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <User className="h-5 w-5 text-ride-primary" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-ride-dark">{ride.driver.name}</h3>
                              {ride.driver.verified && (
                                <div className="ml-2 bg-blue-100 text-ride-primary text-xs px-2 py-0.5 rounded-full">
                                  Verified
                                </div>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span>{ride.driver.rating} ({ride.driver.rides} rides)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                              <MapPin className="h-4 w-4 text-ride-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">From</p>
                              <p className="font-medium">{ride.from}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                              <MapPin className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">To</p>
                              <p className="font-medium">{ride.to}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-end">
                        <div className="text-right mb-4">
                          <p className="text-sm text-gray-500">Departure</p>
                          <p className="font-medium">{ride.date}</p>
                        </div>
                        
                        <div className="flex items-center text-right mb-4">
                          <Car className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{ride.seats} seats available</span>
                        </div>
                        
                        <div className="text-xl font-bold text-ride-primary mb-4">
                          {ride.price}
                        </div>
                        
                        <Button className="bg-ride-primary hover:bg-ride-secondary">
                          Request to Join
                        </Button>
                      </div>
                    </div>
                    
                    {ride.features.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-2">Features:</p>
                        <div className="flex flex-wrap gap-2">
                          {ride.features.map((feature, index) => (
                            <span 
                              key={index} 
                              className="bg-blue-50 text-ride-primary text-xs px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
