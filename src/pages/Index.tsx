
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import BenefitsSection from "@/components/home/BenefitsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MessageCircle, Car } from "lucide-react";

const Index = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Passenger",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "I've been using Ride With Me for my daily commute and it's saved me so much money. The drivers are friendly and I've made some great connections!"
    },
    {
      name: "Michael T.",
      role: "Driver",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "As a driver, I love how easy it is to find passengers going my way. It helps me offset my fuel costs and the company makes long drives more enjoyable."
    },
    {
      name: "Emma K.",
      role: "Passenger",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The safety features give me peace of mind when riding with new people. The verification process and driver ratings help me feel secure on every trip."
    }
  ];

  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ride-dark mb-4">What Our Users Say</h2>
            <p className="text-lg text-ride-muted max-w-2xl mx-auto">
              Join thousands of happy drivers and passengers in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-ride-dark">{testimonial.name}</h4>
                    <p className="text-sm text-ride-muted">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-500 mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-ride-muted italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ride-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Share the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community today and start sharing rides, saving money, and making connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-ride-primary hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Find a Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ride-primary mb-2">15,000+</div>
              <p className="text-ride-muted">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ride-primary mb-2">25,000+</div>
              <p className="text-ride-muted">Rides Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ride-primary mb-2">500+</div>
              <p className="text-ride-muted">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
