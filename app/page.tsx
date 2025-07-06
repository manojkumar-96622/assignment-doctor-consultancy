'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Users, Heart, Shield, Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 p-2 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">Dr. Serena Blake</div>
                <div className="text-xs text-gray-500">Clinical Psychology</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-600 hover:text-teal-600 transition-colors">Hero</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
            </div>
            <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              (323) 555-0192
            </Button>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#hero" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors">Hero</a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#faq" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
              <Button className="w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                (323) 555-0192
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Hero with dramatic sky background */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <p className="text-lg md:text-xl text-blue-100 font-medium drop-shadow-lg">
              Christian Counseling Services in Richmond & Central Virginia
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Professional Counseling for
            <span className="block text-blue-200">Christian Healing and Growth</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Begin your journey today towards spiritual growth, deeper relationships,
            <br />and lasting inner peace.
          </p>
          <p className="text-lg md:text-xl mb-2 text-blue-100 font-medium drop-shadow-lg">
            I want to work with you for...
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 font-semibold flex items-center justify-center drop-shadow-lg">
            <Heart className="w-6 h-6 mr-2" />
            Greater Love in Your Relationships
          </p>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-100 drop-shadow-lg">
              <span className="flex items-center">
                <span className="text-yellow-400 mr-1">⭐</span>
                Top Rated
              </span>
              <span>40+ Years Experience</span>
              <span>Testimonials</span>
              <span>Media Mentions</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl font-bold px-12 py-5 rounded-full border-4 border-white shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 hover:border-blue-200">
              <span className="flex items-center justify-center">
                <span className="mr-3 text-2xl animate-pulse">✨</span>
                Start Healing Today
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-white/90 backdrop-blur-sm border-4 border-white text-gray-900 hover:bg-white hover:text-blue-700 text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300">
              <span className="flex items-center justify-center">
                Learn More
              </span>
              <div className="absolute inset-0 bg-blue-100/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Matching the therapist profile layout */}
      <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
                  About the Therapist • PsyD • Licensed Clinical Therapist in California, CA
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Dr. Serena Blake
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                 
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-teal-50 rounded-2xl">
                    <div className="text-3xl font-bold text-teal-600 mb-2">8+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-teal-50 rounded-2xl">
                    <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Client Sessions</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                    <img 
                      src="https://ir.ozone.ru/s3/multimedia-p/w500/6866258893.jpg" 
                      alt="Dr. Serena Blake" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Matching the circular image layout */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized therapeutic services designed to support your unique journey toward healing and growth
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Anxiety & Stress Management */}
              <div className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg" 
                    alt="Anxiety & Stress Management" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Anxiety & Stress Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn effective coping strategies and mindfulness techniques to manage anxiety and stress. 
                  Through evidence-based approaches, we'll work together to develop personalized tools that help 
                  you regain control and find peace in your daily life.
                </p>
              </div>

              {/* Relationship Counseling */}
              <div className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg" 
                    alt="Relationship Counseling" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Counseling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strengthen your connections through improved communication and understanding. 
                  Whether working with couples or individuals, we focus on building healthy relationship 
                  patterns and resolving conflicts in a supportive environment.
                </p>
              </div>

              {/* Trauma Recovery */}
              <div className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg" 
                    alt="Trauma Recovery" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Heal from past experiences with compassionate, trauma-informed care. 
                  Using specialized techniques and a safe therapeutic environment, we'll work at your pace 
                  to process difficult experiences and build resilience for the future.
                </p>
              </div>
            </div>
          </div>

          {/* Session Fees */}
          <div className="mt-16 text-center">
            <div className="bg-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Session Fees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-teal-600 mb-2">$200</div>
                  <div className="text-gray-600 font-medium">Individual Session</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-teal-600 mb-2">$240</div>
                  <div className="text-gray-600 font-medium">Couples Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Matching the accordion style */}
      <section id="faq" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about therapy services and policies</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
    
              
              <AccordionItem value="item-2" className="border-b border-gray-100">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 text-lg font-medium">
                  Do you accept insurance?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  No, but a superbill is provided for self-submission.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-100">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 text-lg font-medium">
                  Are online sessions available? 
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                   Yes—all virtual sessions via Zoom.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-gray-100">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 text-lg font-medium">
                 What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                 24-hour notice required.
                </AccordionContent>
              </AccordionItem>
              
            
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section - Matching the form design */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to begin your healing journey? Contact me to schedule your consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Office Location</h3>
                  <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                  <p className="text-gray-600 text-lg">(323) 555-0192</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                  <p className="text-gray-600">serena@blakepsychology.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">Office Hours</h3>
                  <p className="text-gray-600">
                    <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM<br />
                    <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Matching the reference design */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
              <p className="text-gray-600 text-center mb-8">
                Simply fill out the form below and Dr. Serena Blake is ready to work with you soon. Please make sure to include all the information requested. This form is secure and confidential.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input 
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="mt-2 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-2 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={4}
                    className="mt-2 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Please describe what brings you here and how I can help..."
                  />
                </div>
                
                <div>
                  <Label htmlFor="preferredTime" className="text-gray-700 font-medium">Preferred Contact Time</Label>
                  <Input 
                    id="preferredTime"
                    type="text"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="mt-2 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="e.g., Monday afternoons, evenings, weekends"
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700 font-medium">Preferred Contact Method</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="phone-contact" name="contact-method" className="text-teal-600" />
                      <label htmlFor="phone-contact" className="text-gray-600">Phone</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="email-contact" name="contact-method" className="text-teal-600" />
                      <label htmlFor="email-contact" className="text-gray-600">Email</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeToContact" className="text-sm text-gray-600 leading-relaxed">
                    By clicking submit you consent to receive texts and emails from Dr. Serena Blake. Message and data rates may apply. Message frequency varies.
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-medium rounded-xl"
                  disabled={!formData.agreeToContact}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-teal-600 p-2 rounded-full">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Dr. Serena Blake</h3>
              </div>
              <p className="text-gray-400">
                Licensed Clinical Psychologist providing compassionate care for anxiety, relationships, and trauma recovery.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hero" className="hover:text-white transition-colors">Hero</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>(323) 555-0192</p>
                <p>serena@blakepsychology.com</p>
                <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dr. Serena Blake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}