"use client"

import type React from "react"

import { useState } from "react"
import { Code, Database, LineChart, MessageSquare, Monitor, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ServiceTab {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<string>("web-apps")

  const tabs: ServiceTab[] = [
    {
      id: "web-apps",
      title: "Web Applications",
      icon: <Monitor className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Custom Web Applications</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We build tailor-made web applications designed specifically for your business needs. Our solutions are
            scalable, secure, and built with modern technologies to ensure optimal performance.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              </div>
              <span>Business process automation</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              </div>
              <span>Customer portals and dashboards</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              </div>
              <span>Booking and reservation systems</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Web Application Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      id: "databases",
      title: "Database Solutions",
      icon: <Database className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Database Solutions</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our database solutions provide secure, efficient data storage and management for your business. We design
            optimized database structures that ensure data integrity and fast access.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              </div>
              <span>Custom database design and implementation</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              </div>
              <span>Data migration and integration</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              </div>
              <span>Performance optimization and scaling</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Database Solution Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      id: "api",
      title: "API Integration",
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">API Integration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect your systems and services seamlessly with our API integration services. We help you leverage
            third-party services and create unified workflows across your business.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
              </div>
              <span>Third-party API integration</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
              </div>
              <span>Custom API development</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
              </div>
              <span>API documentation and maintenance</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="API Integration Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      icon: <LineChart className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Analytics & Reporting</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Turn your data into actionable insights with our analytics and reporting solutions. We create custom
            dashboards and reports that help you make informed business decisions.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></div>
              </div>
              <span>Custom dashboard development</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></div>
              </div>
              <span>Data visualization and reporting</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></div>
              </div>
              <span>Business intelligence integration</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Analytics Dashboard Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      id: "portals",
      title: "Customer Portals",
      icon: <MessageSquare className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Customer Portals</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enhance your customer experience with custom portals that provide self-service options, account management,
            and personalized interactions with your business.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
              </div>
              <span>User account management</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
              </div>
              <span>Self-service functionality</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
              </div>
              <span>Secure document sharing and communication</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Customer Portal Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      id: "security",
      title: "Security Solutions",
      icon: <ShieldCheck className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Security Solutions</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Protect your business data and applications with our comprehensive security solutions. We implement industry
            best practices to safeguard your systems from threats.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
              </div>
              <span>Secure authentication and authorization</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
              </div>
              <span>Data encryption and protection</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
              </div>
              <span>Security audits and compliance</span>
            </li>
          </ul>
          <div className="pt-4">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Security Solution Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={cn(
                "flex items-center gap-2 rounded-full",
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                  : "border-blue-200 dark:border-blue-800",
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}
