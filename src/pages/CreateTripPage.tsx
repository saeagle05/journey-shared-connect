import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, Car, Info, Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const CreateTripPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trip Created",
      description: "Your trip has been successfully created.",
    });
  };

  return (
    <Layout>
      <div className="pt-20 pb-10 bg-ride-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-ride-dark mb-2">Offer a Ride</h1>
            <p className="text-ride-muted mb-6">
              Share your journey with others and help reduce carbon emissions
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <Input 
                        type="text" 
                        placeholder="Departure city" 
                        className="ride-input" 
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <Input 
                        type="text" 
                        placeholder="Destination city" 
                        className="ride-input" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <Input 
                        type="time" 
                        className="ride-input" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Available Seats
                      </label>
                      <Select>
                        <SelectTrigger className="ride-input">
                          <SelectValue placeholder="Select seats" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 seat</SelectItem>
                          <SelectItem value="2">2 seats</SelectItem>
                          <SelectItem value="3">3 seats</SelectItem>
                          <SelectItem value="4">4 seats</SelectItem>
                          <SelectItem value="5">5 seats</SelectItem>
                          <SelectItem value="6">6+ seats</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Type
                      </label>
                      <Select>
                        <SelectTrigger className="ride-input">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="van">Van or Minivan</SelectItem>
                          <SelectItem value="hatchback">Hatchback</SelectItem>
                          <SelectItem value="electric">Electric Vehicle</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Trip Details
                    </label>
                    <Textarea 
                      placeholder="Share additional details about your trip (stops, meeting points, etc.)" 
                      className="ride-input" 
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Ride Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="wheelchairAccessible" />
                        <label
                          htmlFor="wheelchairAccessible"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Wheelchair accessible
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="petsAllowed" />
                        <label
                          htmlFor="petsAllowed"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Pets allowed
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="luggageSpace" />
                        <label
                          htmlFor="luggageSpace"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Extra luggage space
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="childSeat" />
                        <label
                          htmlFor="childSeat"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Child seat available
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md flex items-start">
                    <Info className="h-5 w-5 text-ride-primary mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-ride-dark">
                      By offering a ride, you agree to our <a href="/terms" className="text-ride-primary hover:underline">Terms of Service</a> and <a href="/safety" className="text-ride-primary hover:underline">Safety Guidelines</a>. 
                      Remember that this is a free service with no monetary exchange between drivers and passengers.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-ride-primary hover:bg-ride-secondary">
                      <Car className="mr-2 h-4 w-4" />
                      Publish Ride
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTripPage;
