
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";
import { Shield, Zap, User } from "lucide-react";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="pt-20 pb-10 bg-ride-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-ride-dark mb-4">Join Our Community</h1>
                <p className="text-lg text-ride-muted mb-6">
                  Create an account to find rides or share your journey with others.
                </p>
                
                <div className="space-y-6 max-w-md">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <User className="h-5 w-5 text-ride-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ride-dark mb-1">Create Your Profile</h3>
                      <p className="text-ride-muted text-sm">
                        Share your preferences and connect with like-minded travelers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Shield className="h-5 w-5 text-ride-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ride-dark mb-1">Verified Community</h3>
                      <p className="text-ride-muted text-sm">
                        We verify all users to ensure safety and trust in our community
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Zap className="h-5 w-5 text-ride-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ride-dark mb-1">Quick Signup Process</h3>
                      <p className="text-ride-muted text-sm">
                        Our signup process is simple and fast. Start sharing rides in minutes!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md">
                <AuthForm defaultTab="register" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
