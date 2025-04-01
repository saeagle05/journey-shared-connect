
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Star, Car, Calendar, MapPin, MessageCircle, Shield } from "lucide-react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="pt-20 pb-10 bg-ride-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Profile Header */}
              <div className="bg-ride-primary h-32 relative"></div>
              
              <div className="px-6 sm:px-8 relative">
                <div className="flex flex-col sm:flex-row sm:items-end -mt-16 mb-6">
                  <div className="flex-shrink-0 bg-white p-2 rounded-full inline-block border-4 border-white shadow-md">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-12 w-12 text-ride-primary" />
                    </div>
                  </div>
                  
                  <div className="sm:ml-6 mt-4 sm:mt-0 sm:mb-4">
                    <div className="flex items-center flex-wrap">
                      <h1 className="text-2xl font-bold text-ride-dark">John Doe</h1>
                      <Badge variant="outline" className="ml-3 bg-blue-50 text-ride-primary border-blue-200">
                        <Shield className="h-3 w-3 mr-1" /> Verified
                      </Badge>
                    </div>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-gray-500 mr-4">4.92 (24 reviews)</span>
                      <span className="text-gray-500">Member since January 2023</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 sm:ml-auto sm:mb-4">
                    <Button variant="outline" className="mr-2">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button className="bg-ride-primary hover:bg-ride-secondary">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Profile Tabs */}
              <Tabs defaultValue="about" className="px-6 sm:px-8 pb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="trips">My Trips</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">About Me</h3>
                        <p className="text-gray-600">
                          Hi there! I'm John, a software engineer who loves road trips and meeting new people. 
                          I often travel between Boston and New York for work and like to share the ride with 
                          interesting people. I'm a safe driver with over 10 years of experience.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Preferences</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                              <svg className="h-5 w-5 text-ride-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h.01M15 8h.01M9 16h.01M15 16h.01M5 12h.01M19 12h.01" />
                              </svg>
                            </div>
                            <span>Light conversation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                              <svg className="h-5 w-5 text-ride-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                              </svg>
                            </div>
                            <span>Music lover</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                              <svg className="h-5 w-5 text-ride-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                              </svg>
                            </div>
                            <span>Pet friendly</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-50 p-2 rounded-full mr-3">
                              <svg className="h-5 w-5 text-ride-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <span>No smoking</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Vehicle Information</h3>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Car className="h-12 w-12 text-ride-primary mr-4" />
                            <div>
                              <h4 className="font-medium">Toyota Prius (2019)</h4>
                              <p className="text-sm text-gray-600">Electric Hybrid • Blue</p>
                              <div className="mt-2 flex items-center">
                                <Badge variant="outline" className="mr-2 bg-green-50 text-green-700 border-green-200">
                                  Electric
                                </Badge>
                                <Badge variant="outline" className="mr-2 bg-blue-50 text-ride-primary border-blue-200">
                                  Eco-friendly
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Verification</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-green-600 mr-3" />
                            <span>ID Verified</span>
                          </div>
                          <Badge className="bg-green-600">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-green-600 mr-3" />
                            <span>Phone Verified</span>
                          </div>
                          <Badge className="bg-green-600">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-green-600 mr-3" />
                            <span>Email Verified</span>
                          </div>
                          <Badge className="bg-green-600">✓</Badge>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <Car className="h-5 w-5 text-green-600 mr-3" />
                            <span>Driver's License</span>
                          </div>
                          <Badge className="bg-green-600">✓</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="trips">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Upcoming Trips</h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 text-ride-primary mr-2" />
                              <span className="font-medium">Jun 15, 2023 • 8:00 AM</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-ride-primary" />
                              </div>
                              <span className="text-gray-700">New York</span>
                              <svg className="h-4 w-4 text-gray-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                              <div className="bg-green-100 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-green-600" />
                              </div>
                              <span className="text-gray-700">Boston</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="mb-2">Driver</Badge>
                            <p className="text-sm text-gray-600">3 passengers</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
                          <Button size="sm" className="bg-ride-primary hover:bg-ride-secondary">View Details</Button>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 text-ride-primary mr-2" />
                              <span className="font-medium">Jun 18, 2023 • 2:30 PM</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-ride-primary" />
                              </div>
                              <span className="text-gray-700">Boston</span>
                              <svg className="h-4 w-4 text-gray-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                              <div className="bg-green-100 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-green-600" />
                              </div>
                              <span className="text-gray-700">New York</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">Passenger</Badge>
                            <p className="text-sm text-gray-600">With Emma S.</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
                          <Button size="sm" className="bg-ride-primary hover:bg-ride-secondary">View Details</Button>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 mt-6">Past Trips</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="font-medium text-gray-700">May 22, 2023</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="bg-gray-200 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-gray-600" />
                              </div>
                              <span className="text-gray-700">New York</span>
                              <svg className="h-4 w-4 text-gray-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                              <div className="bg-gray-200 p-1.5 rounded-full mr-2">
                                <MapPin className="h-3 w-3 text-gray-600" />
                              </div>
                              <span className="text-gray-700">Boston</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2 bg-gray-100">Driver</Badge>
                            <div className="flex items-center justify-end">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="text-sm text-gray-600">5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <h3 className="text-lg font-semibold">Reviews (24)</h3>
                        <div className="ml-4 flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-1" />
                          <span className="font-bold text-lg">4.92</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <User className="h-5 w-5 text-ride-primary" />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium">Sarah M.</h4>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-500 text-sm">May 2023</span>
                              </div>
                              <div className="flex text-yellow-500 my-1">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                              </div>
                              <p className="text-gray-700">
                                John was an excellent driver! Very punctual and the car was clean. 
                                We had a great conversation during the trip and he made sure I was 
                                comfortable the whole time.
                              </p>
                              <Badge variant="outline" className="mt-2 bg-gray-50 text-gray-700">
                                New York → Boston
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-b border-gray-200 pb-6">
                          <div className="flex items-start">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <User className="h-5 w-5 text-ride-primary" />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium">James K.</h4>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-500 text-sm">April 2023</span>
                              </div>
                              <div className="flex text-yellow-500 my-1">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                              </div>
                              <p className="text-gray-700">
                                Great experience! John is a safe driver and we arrived on time.
                                His car is really comfortable and he's a pleasure to talk with.
                              </p>
                              <Badge variant="outline" className="mt-2 bg-gray-50 text-gray-700">
                                New York → Boston
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings">
                  <div className="max-w-3xl">
                    <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input defaultValue="John Doe" className="ride-input" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <Input defaultValue="john@example.com" className="ride-input" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <Input defaultValue="+1 555-123-4567" className="ride-input" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <Input defaultValue="Boston, MA" className="ride-input" />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-md font-medium mb-3">Notification Preferences</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span>New ride requests</span>
                            <div className="flex items-center">
                              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Messages from users</span>
                            <div className="flex items-center">
                              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Trip reminders</span>
                            <div className="flex items-center">
                              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Marketing and promotions</span>
                            <div className="flex items-center">
                              <input type="checkbox" className="toggle toggle-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="button" variant="outline" className="mr-2">
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-ride-primary hover:bg-ride-secondary">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
