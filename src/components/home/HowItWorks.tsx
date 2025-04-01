
import { Car, Search, MessageCircle, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Find a Ride",
      description: "Search for available rides to your destination based on your schedule",
      color: "bg-ride-primary"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Connect",
      description: "Contact the driver and agree on pickup details",
      color: "bg-blue-500"
    },
    {
      icon: <Car className="h-8 w-8 text-white" />,
      title: "Travel Together",
      description: "Meet your driver, enjoy the journey, and share experiences",
      color: "bg-blue-600"
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Rate & Review",
      description: "Leave feedback and help build our trusted community",
      color: "bg-ride-green"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ride-dark mb-4">How Ride With Me Works</h2>
          <p className="text-lg text-ride-muted max-w-2xl mx-auto">
            Connect with drivers and passengers going your way in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>
              
              <div className="relative mb-8 hidden md:block">
                {index < steps.length - 1 && (
                  <div className="absolute top-[-30px] left-[64px] w-full border-t-2 border-dashed border-gray-200"></div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-ride-dark mb-2">{step.title}</h3>
              <p className="text-ride-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
