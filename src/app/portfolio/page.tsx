import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Portfolio
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our recent projects and see how we've helped businesses
                like yours succeed with custom web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>E-commerce Platform</CardTitle>
                    <CardDescription>
                      Online Store for Fashion Retailer
                    </CardDescription>
                  </div>
                  <Badge>SmartSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  A custom e-commerce solution for a Swedish fashion retailer
                  with inventory management, customer accounts, and payment
                  processing.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">E-commerce</Badge>
                  <Badge variant="outline">Payment Integration</Badge>
                  <Badge variant="outline">Inventory</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Booking System</CardTitle>
                    <CardDescription>
                      Appointment Scheduler for Healthcare Provider
                    </CardDescription>
                  </div>
                  <Badge>MiniSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  An online booking system allowing patients to schedule
                  appointments with healthcare providers, with automated
                  reminders and calendar integration.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Healthcare</Badge>
                  <Badge variant="outline">Booking</Badge>
                  <Badge variant="outline">Calendar</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>CRM System</CardTitle>
                    <CardDescription>
                      Customer Management for Real Estate Agency
                    </CardDescription>
                  </div>
                  <Badge>PowerSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  A comprehensive CRM system for a real estate agency to manage
                  properties, clients, and sales processes with reporting and
                  analytics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Real Estate</Badge>
                  <Badge variant="outline">CRM</Badge>
                  <Badge variant="outline">Analytics</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>
                      Stock Control for Manufacturing Company
                    </CardDescription>
                  </div>
                  <Badge>SmartSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  An inventory management system with barcode scanning, stock
                  alerts, and reporting for a manufacturing business.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Manufacturing</Badge>
                  <Badge variant="outline">Inventory</Badge>
                  <Badge variant="outline">Reporting</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 5"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Member Portal</CardTitle>
                    <CardDescription>
                      Membership System for Fitness Club
                    </CardDescription>
                  </div>
                  <Badge>SmartSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  A member portal for a fitness club with class bookings,
                  membership management, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Fitness</Badge>
                  <Badge variant="outline">Membership</Badge>
                  <Badge variant="outline">Booking</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Project 6"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Project Management Tool</CardTitle>
                    <CardDescription>
                      Task Tracker for Construction Company
                    </CardDescription>
                  </div>
                  <Badge>PowerSystem</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  A project management system for a construction company to
                  track projects, assign tasks, and monitor progress with client
                  access.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Construction</Badge>
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Collaboration</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Ready to Start Your Project?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let's discuss how we can create a custom web application for
                your business.
              </p>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
