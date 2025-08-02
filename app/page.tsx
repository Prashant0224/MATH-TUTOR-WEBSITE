import { BookOpen, Calculator, Clock, Star, Users, Video, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Calculator className="h-6 w-6 text-orange-600" />
          <span className="ml-2 text-lg font-bold">MathTutor Pro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#tutors">
            Tutors
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-orange-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Math with Expert Online Tutoring
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Personalized one-on-one math tutoring from certified teachers. Boost your grades and confidence with
                    our proven teaching methods.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Demo Class
                    <Video className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5</span>
                    <span>from 500+ students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>1000+ students taught</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Online Math Tutoring"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Math Subjects We Cover</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From basic arithmetic to advanced calculus, our expert tutors cover all math levels
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-orange-600" />
                  <CardTitle>Elementary Math</CardTitle>
                  <CardDescription>Basic arithmetic, fractions, decimals, and foundational concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Addition & Subtraction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Multiplication & Division
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Fractions & Decimals
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calculator className="h-8 w-8 text-orange-600" />
                  <CardTitle>Middle School Math</CardTitle>
                  <CardDescription>Algebra basics, geometry, and pre-algebra concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pre-Algebra
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Basic Geometry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Ratios & Proportions
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="h-8 w-8 text-orange-600" />
                  <CardTitle>High School Math</CardTitle>
                  <CardDescription>Algebra, geometry, trigonometry, and calculus</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Algebra I & II
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Geometry & Trigonometry
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pre-Calculus & Calculus
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with personalized math tutoring in just 3 simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Book a Session</h3>
                <p className="text-gray-600">
                  Choose your preferred time slot and math subject. Our scheduling system makes it easy to find the
                  perfect match.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Meet Your Tutor</h3>
                <p className="text-gray-600">
                  Connect with a certified math teacher who understands your learning style and academic goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Start Learning</h3>
                <p className="text-gray-600">
                  Begin your personalized learning journey with interactive lessons and real-time feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section id="tutors" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Expert Tutors</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from certified teachers with years of experience in math education
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    alt="Sarah Johnson"
                    className="mx-auto rounded-full"
                    height="100"
                    src="1672236228253.jpeg"
                    width="100"
                  />
                  <CardTitle>Prashant Sir</CardTitle>
                  <CardDescription>Maths Specialist</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Badge variant="secondary">B.tech(CS)</Badge>
                  <Badge variant="secondary">8+ Years Experience</Badge>
                  
                  <p className="text-sm text-gray-600">
                    Specializes in making complex Maths and calculus concepts easy to understand
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">5.0 (120 reviews)</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    alt="Michael Chen"
                    className="mx-auto rounded-full"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    width="100"
                  />
                  <CardTitle>Priya Mam</CardTitle>
                  <CardDescription>English and Math Expert</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Badge variant="secondary">B.tech</Badge>
                  <Badge variant="secondary">3+ Years Experience</Badge>
                  <p className="text-sm text-gray-600">
                    Expert in visual learning techniques for English and Science
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-grey-400 text-grey-400" />
                    <span className="text-sm text-gray-600 ml-1">4.1 (95 reviews)</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    alt="Emily Rodriguez"
                    className="mx-auto rounded-full"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    width="100"
                  />
                  <CardTitle>Rohit Sir</CardTitle>
                  <CardDescription>Elementary & Middle School Math</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Badge variant="secondary">B.Ed Mathematics</Badge>
                  <Badge variant="secondary">2+ Years Experience</Badge>
                  <p className="text-sm text-gray-600">
                    Patient and encouraging approach perfect for building math confidence
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-grey-400 text-grey-400" />
                    <Star className="h-4 w-4 fill-grey-400 text-grey-400" />
                    <span className="text-sm text-gray-600 ml-1">3.0 (45 reviews)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your learning goals and budget
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Basic</CardTitle>
                  <div className="text-4xl font-bold">
                    450<span className="text-lg font-normal">/hour</span>
                  </div>
                  <CardDescription>Perfect for occasional help</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      One-on-one tutoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Flexible scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-orange-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Standard</CardTitle>
                  <div className="text-4xl font-bold">
                    600<span className="text-lg font-normal">/hour</span>
                  </div>
                  <CardDescription>Best value for regular sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Everything in Basic
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Priority scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Homework help
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Practice materials
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Phone support
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Premium</CardTitle>
                  <div className="text-4xl font-bold">
                    1000<span className="text-lg font-normal">/hour</span>
                  </div>
                  <CardDescription>For serious students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Everything in Standard
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Test prep assistance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Custom study plans
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Parent progress reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      24/7 support
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real feedback from students who improved their math skills with us
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Prashant Sir helped me go from failing algebra to getting an A! Her teaching style made everything click.
                    I actually enjoy math now!"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      alt="Student"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Rohit .</p>
                      <p className="text-sm text-gray-600">PCM Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Prashant Sir Maths lessons were amazing. He used visual examples that made complex concepts easy to
                    understand. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      alt="Student"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Shraddha</p>
                      <p className="text-sm text-gray-600">High School Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Learning?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule your first session or ask any questions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+91 7879864169
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@mathtutorpro.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-600">
                      Mon-Fri: 7PM-9AM
                      <br />
                      Sat-Sun: 10AM-6PM
                    </p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Free Trial</CardTitle>
                  <CardDescription>
                    Start with a complimentary 30-minute session to see if we're the right fit
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Schedule Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-600 text-center">No credit card required • Cancel anytime</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2025 MathTutor Pro. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
