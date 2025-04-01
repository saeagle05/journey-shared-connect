
import { Shield, Zap, Calendar, DollarSign, MapPin, Accessibility } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-ride-primary" />,
      title: "Free to Use",
      description: "No commission fees - we're supported by partnerships and advertising"
    },
    {
      icon: <Shield className="h-6 w-6 text-ride-primary" />,
      title: "Safety First",
      description: "Verified users, location tracking, and safety check-ins"
    },
    {
      icon: <Zap className="h-6 w-6 text-ride-primary" />,
      title: "Instant Notifications",
      description: "Real-time alerts when your driver is approaching"
    },
    {
      icon: <Calendar className="h-6 w-6 text-ride-primary" />,
      title: "Trip Scheduling",
      description: "Book rides in advance to better plan your journeys"
    },
    {
      icon: <MapPin className="h-6 w-6 text-ride-primary" />,
      title: "Location Tracking",
      description: "See your driver's location in real-time during the trip"
    },
    {
      icon: <Accessibility className="h-6 w-6 text-ride-primary" />,
      title: "Accessibility Options",
      description: "Filter for rides with accommodations for disabilities"
    }
  ];

  return (
    <section className="py-16 bg-ride-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ride-dark mb-4">Why Choose Ride With Me</h2>
          <p className="text-lg text-ride-muted max-w-2xl mx-auto">
            Our platform offers unique benefits that make ride-sharing easier, safer, and more accessible for everyone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 inline-flex p-3 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-ride-dark mb-2">{benefit.title}</h3>
              <p className="text-ride-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
