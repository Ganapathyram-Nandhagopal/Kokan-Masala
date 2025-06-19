import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Mail, Clock, Users, Award, Leaf } from "lucide-react"

export default function FoodCompanyWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">FreshBite</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">
              Menu
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">Order Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Premium Quality Since 1995</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fresh Food,
                  <span className="text-orange-600"> Exceptional</span>
                  <br />
                  Taste
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience culinary excellence with our farm-to-table approach. We source the finest ingredients to
                  create memorable dining experiences for our customers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  Explore Menu
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-600">10K+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Delicious food presentation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-gray-600">Best Food Quality 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Story</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Crafting Culinary Excellence Since 1995</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in the food industry, we've maintained our commitment to
              quality, freshness, and exceptional taste.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Farm Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We partner with local farms to source the freshest, highest quality ingredients for all our dishes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Chefs</h3>
                <p className="text-gray-600">
                  Our team of experienced chefs brings creativity and passion to every dish we prepare.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every product goes through rigorous quality checks to ensure it meets our high standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Menu</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Signature Dishes & Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated menu featuring both classic favorites and innovative creations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Grilled Salmon",
                price: "$28",
                description: "Fresh Atlantic salmon with herbs and lemon",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Truffle Pasta",
                price: "$24",
                description: "Handmade pasta with truffle oil and parmesan",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Wagyu Steak",
                price: "$45",
                description: "Premium wagyu beef cooked to perfection",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Lobster Bisque",
                price: "$18",
                description: "Rich and creamy lobster soup with cognac",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Duck Confit",
                price: "$32",
                description: "Slow-cooked duck leg with cherry sauce",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Chocolate Soufflé",
                price: "$14",
                description: "Decadent chocolate dessert with vanilla ice cream",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((dish, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-semibold text-orange-600">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Food Solutions</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Quick and reliable delivery service to your doorstep within 30 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Catering Services</h3>
                  <p className="text-gray-600">Professional catering for events, parties, and corporate functions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Menu</h3>
                  <p className="text-gray-600">
                    Personalized menu planning for special dietary requirements and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/placeholder.svg?height=500&width=600" alt="Food service" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Food Blogger",
                content:
                  "Absolutely incredible! The quality and taste exceeded all my expectations. FreshBite has become my go-to for special occasions.",
              },
              {
                name: "Michael Chen",
                role: "Restaurant Owner",
                content:
                  "Their catering service for our grand opening was flawless. Professional, delicious, and beautifully presented.",
              },
              {
                name: "Emily Davis",
                role: "Event Planner",
                content:
                  "I've worked with many food companies, but FreshBite stands out for their attention to detail and exceptional service.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Contact Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience exceptional food? Contact us today to place an order or discuss your catering needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Culinary Street
                  <br />
                  Food District, NY 10001
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                  <br />
                  Mon-Sun: 9AM-10PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">
                  hello@freshbite.com
                  <br />
                  catering@freshbite.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-4">FreshBite</div>
              <p className="text-gray-400 mb-4">
                Crafting exceptional culinary experiences with fresh ingredients and passionate expertise.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-white transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dine-in</li>
                <li>Takeaway</li>
                <li>Delivery</li>
                <li>Catering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Culinary Street</li>
                <li>Food District, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@freshbite.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreshBite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
