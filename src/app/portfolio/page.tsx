import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Code,
  Database,
  LineChart,
  Monitor,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PortfolioPage() {
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
              Our Work
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 dark:from-purple-400 dark:via-blue-300 dark:to-teal-300 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our successful projects and see how we&apos;ve helped
              businesses across Sweden transform their operations with custom
              web solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Success Stories
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Take a look at some of our most impactful projects and the results
              we&apos;ve achieved for our clients
            </p>
          </div>

          {/* Project 1 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 shadow-xl">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-blue-600/20 to-teal-500/20 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-blue-600/20 to-teal-500/20 rounded-tr-3xl"></div>
                <Image
                  width={300}
                  height={300}
                  src="/placeholder.svg?height=600&width=800"
                  alt="HealthConnect Patient Portal"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                  Healthcare
                </Badge>
                <h3 className="text-3xl font-bold">
                  HealthConnect Patient Portal
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                A comprehensive patient management system for a leading Swedish
                healthcare provider. This custom solution streamlined
                appointment scheduling, patient communication, and medical
                record management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">40% reduction</span> in
                      administrative workload
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">30% increase</span> in
                      patient satisfaction
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">25% reduction</span> in
                      missed appointments
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                  React
                </div>
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                  Node.js
                </div>
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                  PostgreSQL
                </div>
                <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
                  AWS
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
              >
                <Link href="/contact">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50">
                  E-commerce
                </Badge>
                <h3 className="text-3xl font-bold">SwedishCraft Marketplace</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                A custom e-commerce platform for artisanal Swedish crafts,
                featuring secure payments, inventory management, and a
                sophisticated recommendation engine to boost sales.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">85% increase</span> in
                      online sales
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">50% higher</span> average
                      order value
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">3x growth</span> in customer
                      base
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Next.js
                </div>
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  MongoDB
                </div>
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Stripe
                </div>
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                  Vercel
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                <Link href="/contact">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-800 shadow-xl">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-purple-600/20 to-pink-500/20 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-tr-3xl"></div>
                <Image
                  width={300}
                  height={300}
                  src="/placeholder.svg?height=600&width=800"
                  alt="SwedishCraft Marketplace"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-amber-100 dark:border-amber-800 bg-white dark:bg-gray-800 shadow-xl">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-amber-600/20 to-orange-500/20 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-amber-600/20 to-orange-500/20 rounded-tr-3xl"></div>
                <Image
                  width={300}
                  height={300}
                  src="/placeholder.svg?height=600&width=800"
                  alt="LogiTrack Fleet Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50">
                  Logistics
                </Badge>
                <h3 className="text-3xl font-bold">
                  LogiTrack Fleet Management
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                A comprehensive fleet management system for a logistics company,
                featuring real-time tracking, maintenance scheduling, and fuel
                consumption analytics to optimize operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">22% reduction</span> in fuel
                      costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">35% decrease</span> in
                      maintenance expenses
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">18% improvement</span> in
                      delivery times
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
                  Vue.js
                </div>
                <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
                  Express
                </div>
                <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
                  MySQL
                </div>
                <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300">
                  Google Maps API
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600"
              >
                <Link href="/contact">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              More Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Additional Success Stories
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore more of our projects across various industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <Card className="group relative overflow-hidden border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                    Finance
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors duration-300">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  InvestSmart Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A financial analytics dashboard for a Swedish investment firm,
                  providing real-time market data and portfolio management
                  tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    React
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    D3.js
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Firebase
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="group relative overflow-hidden border-teal-100 dark:border-teal-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-teal-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-900/50">
                    Education
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-600 transition-colors duration-300">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">EduLearn Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An e-learning platform for a Swedish educational institution,
                  featuring course management, interactive lessons, and student
                  progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Next.js
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    PostgreSQL
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    AWS
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-800 dark:hover:text-teal-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="group relative overflow-hidden border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50">
                    Real Estate
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600 transition-colors duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">PropertyPro CRM</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A customer relationship management system for a Swedish real
                  estate agency, streamlining property listings, client
                  interactions, and sales processes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Angular
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    .NET Core
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    SQL Server
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-amber-100 dark:border-amber-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-amber-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50">
                    Hospitality
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-600 transition-colors duration-300">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">HotelHub Booking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive booking and management system for a chain of
                  boutique hotels in Sweden, featuring reservation management
                  and guest services.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    React
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Node.js
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    MongoDB
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-800 dark:hover:text-amber-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>

            {/* Project Card 5 */}
            <Card className="group relative overflow-hidden border-red-100 dark:border-red-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-red-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50">
                    Manufacturing
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-600 transition-colors duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">ProductionPro ERP</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An enterprise resource planning system for a Swedish
                  manufacturing company, optimizing production processes,
                  inventory, and supply chain management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Vue.js
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Django
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    PostgreSQL
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:text-red-800 dark:hover:text-red-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>

            {/* Project Card 6 */}
            <Card className="group relative overflow-hidden border-green-100 dark:border-green-800 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-green-600/10 to-transparent rounded-bl-3xl"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                    Security
                  </Badge>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-600 transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">SecureAccess Portal</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A secure access management system for a Swedish security firm,
                  featuring multi-factor authentication, access control, and
                  comprehensive audit logging.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    React
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    Spring Boot
                  </div>
                  <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400">
                    MySQL
                  </div>
                </div>
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-800 dark:hover:text-green-300"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How We Deliver Results
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our proven methodology ensures successful project outcomes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <div className="text-xl font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We start by understanding your business needs, goals, and
                challenges through in-depth consultation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
                <div className="text-xl font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We create a detailed project plan with clear milestones,
                deliverables, and timelines.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                <div className="text-xl font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our skilled team builds your solution using the latest
                technologies and best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                <div className="text-xl font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery & Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deploy your solution and provide ongoing support to ensure
                long-term success.
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
                Let&apos;s discuss how we can help your business with a custom
                web application solution tailored to your specific needs.
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
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">View our portfolio</div>
                      <div className="text-sm text-white/80">
                        See how we&apos;ve helped businesses like yours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Custom solutions</div>
                      <div className="text-sm text-white/80">
                        Tailored to your specific business needs
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold">Ongoing support</div>
                      <div className="text-sm text-white/80">
                        We&apos;re with you every step of the way
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
