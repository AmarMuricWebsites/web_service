import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Users,
  Code,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceTabs } from "@/components/service-tabs";
import { PackageComparison } from "@/components/package-comparison";

export default function WhatWeOfferPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-white to-blue-50 dark:from-teal-900/20 dark:via-gray-900 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-teal-500 to-blue-400"
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
            <div className="inline-block rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300 mb-4">
              Our Services
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-blue-600 to-blue-500 dark:from-teal-400 dark:via-blue-300 dark:to-blue-400 mb-6">
              What We Offer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our service packages and find the perfect solution for
              your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive IT Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our range of specialized services designed to meet your
              business needs
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Service Packages
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose Your Perfect Package
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer flexible packages to meet the needs of businesses of all
              sizes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* MiniSystem Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                    Starter Package
                  </Badge>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    12 000 SEK
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">'MiniSystem'</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        1 custom interface (e.g. booking, admin panel, login)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Up to 3 core features
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Mobile & desktop-friendly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Delivery in 2-3 weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        1 feedback round
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        30-day support
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* SmartSystem Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50">
                    Professional Package
                  </Badge>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    28 000 SEK
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">'SmartSystem'</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Up to 4 interfaces
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Up to 8 features
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Custom design
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Email/SMS integration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Delivery in 3-5 weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        2 feedback rounds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        60-day support
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* PowerSystem Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-full rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50">
                    Enterprise Package
                  </Badge>
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    From 45 000 SEK
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">'PowerSystem'</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Unlimited interfaces
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Custom features & logic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Admin dashboards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Cloud deployment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Delivery based on scope
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Dedicated support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Custom integrations
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
              Compare Packages
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find Your Perfect Fit
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Compare our packages side by side to find the one that best meets
              your needs
            </p>
          </div>

          <PackageComparison />

          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Not sure which package is right for you? Contact us for a
              personalized recommendation.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r text-white from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/contact">
                Get a Personalized Recommendation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
              Customizations
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Add-Ons & Extras
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Customize your package with additional features to perfectly match
              your business needs
            </p>
          </div>

          <div className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-right">Price (SEK)</th>
                    <th className="py-4 px-6 text-center">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      Extra page/interface
                    </td>
                    <td className="py-4 px-6 text-right">1 500</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">PDF generation</td>
                    <td className="py-4 px-6 text-right">2 000</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">API Integration</td>
                    <td className="py-4 px-6 text-right">2 500 - 5 000</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Admin panel</td>
                    <td className="py-4 px-6 text-right">2 500</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      Monthly maintenance
                    </td>
                    <td className="py-4 px-6 text-right">1 500/month</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Express delivery</td>
                    <td className="py-4 px-6 text-right">5 000</td>
                    <td className="py-4 px-6 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="sr-only">Details</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Need something not listed here? We can create custom solutions to
              meet your specific requirements.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/30"
            >
              <Link href="/contact">
                Discuss Custom Requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Makes Our Services Special
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              All our packages include these essential features to ensure your
              project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Zap size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Responsive Design</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                All our web applications are fully responsive, ensuring a
                seamless experience across all devices, from desktops to
                smartphones.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Shield size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Security First</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                We implement industry-standard security practices to protect
                your data and ensure your application is secure from common
                vulnerabilities.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                <Code size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clean Code</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our developers write clean, maintainable code that follows best
                practices, making future updates and expansions easier.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                <Clock size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">On-time Delivery</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                We understand the importance of deadlines and work diligently to
                ensure your project is delivered on schedule.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                <Users size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">User-Centric Design</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                We focus on creating intuitive, user-friendly interfaces that
                enhance user experience and drive engagement.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="w-14 h-14 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Server size={28} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Reliable Support</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Our support doesn&apos;t end at delivery. We provide ongoing
                assistance to ensure your application continues to run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
              Client Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from businesses that have transformed their operations with
              our solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
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
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "The SmartSystem package was perfect for our needs. IT System
                Solutions delivered a custom e-commerce platform that has
                significantly increased our sales and streamlined our
                operations."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
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
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "We started with the MiniSystem for our booking system and were
                so impressed that we upgraded to the SmartSystem. The team's
                expertise and support have been invaluable to our business."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
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
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "The PowerSystem package gave us exactly what we needed - a
                fully customized inventory management system that integrates
                with all our existing tools. Worth every krona!"
              </p>
            </div>
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
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white hover:text-white text-white hover:bg-white/10"
                >
                  <Link href="/portfolio">
                    View Our Portfolio
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
                      <Check className="h-6 w-6 text-white" />
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
                      <Check className="h-6 w-6 text-white" />
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
                      <Check className="h-6 w-6 text-white" />
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
