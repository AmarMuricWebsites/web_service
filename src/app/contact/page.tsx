import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-white to-blue-100 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-50 dark:opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-purple-500 to-blue-400"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3,
                  transform: `scale(${Math.random() * 0.8 + 0.2})`,
                  animation: `float ${
                    Math.random() * 10 + 15
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300 mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 dark:from-purple-400 dark:via-blue-300 dark:to-teal-300 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions or ready to start your project? Reach out to us
              today and {"let's"} discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <Card className="border-blue-100 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        info@itsystemsolutions.se
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        support@itsystemsolutions.se
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900/30">
                      <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        +46 70 123 45 67 (Sweden)
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        +381 60 123 45 67 (Serbia)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Locations</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">Stockholm, Sweden</p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Sveavägen 123, 111 57 Stockholm
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Belgrade, Serbia</p>
                          <p className="text-gray-500 dark:text-gray-400">
                            Bulevar Kralja Aleksandra 123, 11000 Belgrade
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Monday - Friday: 9:00 AM - 5:00 PM CET
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-100 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer a 30-minute free consultation to understand your
                    needs and suggest the right system. After the meeting, we
                    send you a simple project proposal.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">No obligation</span> - Our
                        consultation is completely free with no strings attached
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Expert advice</span> - Get
                        insights from experienced developers and consultants
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Clear roadmap</span> -
                        Receive a detailed plan for your {"project's"}
                        implementation
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                  >
                    <Link href="/book-consultation">
                      Book Your Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-100 dark:border-blue-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        className="border-blue-200 dark:border-blue-800"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        className="border-blue-200 dark:border-blue-800"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-blue-200 dark:border-blue-800"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="border-blue-200 dark:border-blue-800"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>What are you interested in?</Label>
                    <RadioGroup
                      defaultValue="custom-web-app"
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="custom-web-app"
                          id="custom-web-app"
                        />
                        <Label htmlFor="custom-web-app">
                          Custom Web Application
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="database-solution"
                          id="database-solution"
                        />
                        <Label htmlFor="database-solution">
                          Database Solution
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="api-integration"
                          id="api-integration"
                        />
                        <Label htmlFor="api-integration">API Integration</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="analytics-reporting"
                          id="analytics-reporting"
                        />
                        <Label htmlFor="analytics-reporting">
                          Analytics & Reporting
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="customer-portal"
                          id="customer-portal"
                        />
                        <Label htmlFor="customer-portal">Customer Portal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Approximate budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-20k">
                          10,000 - 20,000 SEK
                        </SelectItem>
                        <SelectItem value="20-50k">
                          20,000 - 50,000 SEK
                        </SelectItem>
                        <SelectItem value="50-100k">
                          50,000 - 100,000 SEK
                        </SelectItem>
                        <SelectItem value="100k+">100,000+ SEK</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      className="min-h-[120px] border-blue-200 dark:border-blue-800"
                      placeholder="Tell us about your project and requirements"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white">
                    Contact us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {/* FAQ Item 1 */}
            <Card className="border-blue-100 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How much does a custom web application cost?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The cost depends on the complexity and scope of your
                      project. Our packages start at 12,000 SEK for simple
                      applications. We provide detailed quotes after
                      understanding your specific requirements during our free
                      consultation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Item 2 */}
            <Card className="border-teal-100 dark:border-teal-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900/30">
                    <MessageSquare className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How long does it take to develop a custom web application?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Development timelines vary based on project complexity.
                      Simple applications can be completed in 2-3 weeks, while
                      more complex systems may take 5-8 weeks or longer. We
                      provide a detailed timeline in our project proposal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Item 3 */}
            <Card className="border-purple-100 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                    <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Do you provide ongoing support after the project is
                      completed?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes, we offer various support packages to ensure your
                      application continues to run smoothly. Our standard
                      packages include 30-60 days of support, and we offer
                      extended maintenance plans for ongoing assistance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Item 4 */}
            <Card className="border-amber-100 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900/30">
                    <MessageSquare className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      How do you handle communication during the project?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We maintain clear communication throughout the project
                      with regular updates and progress reports. Our Swedish
                      team handles all client communication, ensuring smooth
                      interaction and understanding of your needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80">
                Book a free consultation to discuss your project and discover
                how our custom solutions can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/book-consultation">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white hover:text-white text-white hover:bg-white/10"
                >
                  <Link href="/what-we-offer">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-white/20 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">
                        Free 30-minute consultation
                      </div>
                      <div className="text-sm text-white/80">
                        No obligation, just valuable insights
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">
                        Personalized recommendation
                      </div>
                      <div className="text-sm text-white/80">
                        Tailored to your specific needs
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Clear project proposal</div>
                      <div className="text-sm text-white/80">
                        Transparent pricing and timeline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
