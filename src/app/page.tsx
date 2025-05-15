import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  LineChart,
  MessageSquare,
  Monitor,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroImage from "@/public/web.jpg";
import Image from "next/image";
import { Logos } from "@/components/logots";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="absolute top-1/4 -left-20 h-60 w-60 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        </div>

        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Swedish Quality, Serbian Expertise
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                  Custom{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    Web Solutions
                  </span>{" "}
                  for Swedish Businesses
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                  High-quality applications at competitive prices thanks to our
                  unique Swedish-Serbian development model.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full h-14 px-8 text-lg"
                >
                  <Link href="/what-we-offer">Explore Our Services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                >
                  <Link href="/contact">
                    Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">50+ businesses</span> trust our
                  solutions
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 shadow-xl">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-blue-600/20 to-teal-500/20 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-blue-600/20 to-teal-500/20 rounded-tr-3xl"></div>
                <Image
                  src={HeroImage}
                  alt="IT System Solutions Dashboard"
                  className="w-full h-auto"
                  width={600}
                  height={500}
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-lg border border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Trusted Quality</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ISO 9001 Certified
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 rounded-lg border border-teal-100 dark:border-teal-800 bg-white dark:bg-gray-800 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                    <Zap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Fast Delivery</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      2-5 Week Turnaround
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Logos />

      <section className="w-full py-20 md:py-28 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tailored Web Solutions for Your Business
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-400 text-lg">
              From small business websites to complex enterprise systems, we
              have a solution for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <Card className="group relative overflow-hidden border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors duration-300">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Custom Web Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tailor-made web applications designed to solve your specific
                  business challenges and streamline operations.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="group relative overflow-hidden border-teal-100 dark:border-teal-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-teal-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-600 transition-colors duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Database Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Robust database design and implementation to securely store
                  and manage your business data.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-800 dark:hover:text-teal-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="group relative overflow-hidden border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600 transition-colors duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">API Integration</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Seamless integration with third-party services and APIs to
                  extend your application&apos;s functionality.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 4 */}
            <Card className="group relative overflow-hidden border-amber-100 dark:border-amber-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-amber-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-600 transition-colors duration-300">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Analytics & Reporting
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Data visualization and reporting tools to help you make
                  informed business decisions.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-800 dark:hover:text-amber-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 5 */}
            <Card className="group relative overflow-hidden border-red-100 dark:border-red-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-red-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-600 transition-colors duration-300">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Portals</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Secure client portals that enhance customer experience and
                  streamline communication.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:text-red-800 dark:hover:text-red-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Service Card 6 */}
            <Card className="group relative overflow-hidden border-green-100 dark:border-green-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-green-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-600 transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Security Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Robust security implementations to protect your data and
                  ensure compliance with regulations.
                </p>
                <Link
                  href="/what-we-offer"
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full h-14 px-8 text-lg"
            >
              <Link href="/what-we-offer">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Satisfied Clients
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Across Sweden
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                100+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Projects Delivered
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                On time and on budget
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                8+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Years Experience
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                In web development
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                99%
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Client Retention
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Repeat business rate
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How We Bring Your Ideas to Life
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-400 text-lg">
              Our streamlined development process ensures quality results and
              clear communication at every step.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-500 to-purple-600 hidden md:block"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We start by understanding your business needs, goals, and
                    challenges through in-depth consultation. Our team then
                    creates a detailed project plan.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white border-4 border-white dark:border-gray-900">
                      1
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 md:hidden">
                        1
                      </div>
                      <h4 className="text-xl font-bold md:hidden">
                        Discovery & Planning
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Free 30-minute consultation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Requirements gathering
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Project scope definition
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="order-last md:text-left mb-8 md:mb-0 md:pl-12">
                  <div className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-2">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Proposal & Agreement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Based on your requirements, we create a detailed proposal
                    including timeline, deliverables, and pricing. Once
                    approved, we formalize the agreement.
                  </p>
                </div>

                <div className="relative order-first">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white border-4 border-white dark:border-gray-900">
                      2
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-teal-100 dark:border-teal-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 md:hidden">
                        2
                      </div>
                      <h4 className="text-xl font-bold md:hidden">
                        Proposal & Agreement
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Detailed cost breakdown
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Timeline and milestones
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Clear deliverables
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <div className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Design & Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team designs and develops your custom solution, with
                    regular updates and progress reports to keep you informed
                    throughout the process.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white border-4 border-white dark:border-gray-900">
                      3
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-purple-100 dark:border-purple-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 md:hidden">
                        3
                      </div>
                      <h4 className="text-xl font-bold md:hidden">
                        Design & Development
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          UI/UX design
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Agile development process
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Regular progress updates
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="order-last md:text-left mb-8 md:mb-0 md:pl-12">
                  <div className="text-lg font-medium text-amber-600 dark:text-amber-400 mb-2">
                    Step 4
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Testing & Feedback
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We thoroughly test the solution and provide you with a
                    preview for feedback. Your input helps us refine and perfect
                    the final product.
                  </p>
                </div>

                <div className="relative order-first">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white border-4 border-white dark:border-gray-900">
                      4
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-100 dark:border-amber-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 md:hidden">
                        4
                      </div>
                      <h4 className="text-xl font-bold md:hidden">
                        Testing & Feedback
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Comprehensive testing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Client review sessions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Refinement based on feedback
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <div className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">
                    Step 5
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Deployment & Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We deploy your solution and provide comprehensive training.
                    Our support continues after launch to ensure everything runs
                    smoothly.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white border-4 border-white dark:border-gray-900">
                      5
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-green-100 dark:border-green-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 md:hidden">
                        5
                      </div>
                      <h4 className="text-xl font-bold md:hidden">
                        Deployment & Support
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Smooth deployment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          User training
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Ongoing support packages
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Client Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-400 text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about working with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-bold">
                  AB
                </div>
                <div>
                  <div className="font-bold">Anna Bergström</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    CEO, TechSweden AB
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;IT System Solutions delivered exactly what we needed.
                Their team understood our business requirements perfectly and
                created a custom solution that has significantly improved our
                operations.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-bold">
                  EL
                </div>
                <div>
                  <div className="font-bold">Erik Lindqvist</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Operations Manager, Retail Solutions
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;Working with IT System Solutions was a pleasure from start
                to finish. Their communication was excellent, and they delivered
                our project on time and within budget. Highly recommended!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-bold">Maria Johansson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Founder, HealthTech Sweden
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;The booking system IT System Solutions created for our
                healthcare practice has transformed how we manage appointments.
                Our staff and patients love it, and it&apos;s saved us countless
                hours.&quot;
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-14 px-8 text-lg border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
            >
              <Link href="/portfolio">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
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

      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-blue-600 to-teal-500 dark:from-blue-700 dark:to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-[40px] border-white"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full border-[30px] border-white"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 rounded-full border-[20px] border-white"></div>
          </div>
        </div>

        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your free 30-minute consultation today and discover how our
              custom web solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full h-14 px-8 text-lg"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full h-14 px-8 text-lg"
              >
                <Link href="/what-we-offer">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-blue-500/50 flex items-center justify-center text-xs font-medium text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white">
                Join our growing list of satisfied clients
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
