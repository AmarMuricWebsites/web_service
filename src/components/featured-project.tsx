import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function FeaturedProject() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-100 dark:border-blue-800 bg-white dark:bg-gray-800 shadow-xl">
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-blue-600 hover:bg-blue-700">
          Featured Project
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden h-full min-h-[300px]">
          <Image
            width={500}
            height={500}
            src="/placeholder.svg?height=600&width=600"
            alt="Featured Project"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white md:hidden">
            <h3 className="text-2xl font-bold mb-2">
              Enterprise E-commerce Platform
            </h3>
            <p className="text-white/80">
              Complete online store solution with inventory management
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col">
          <div className="hidden md:block mb-4">
            <h3 className="text-2xl font-bold mb-2">
              Enterprise E-commerce Platform
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Complete online store solution with inventory management
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant="outline"
              className="border-blue-200 dark:border-blue-800"
            >
              E-commerce
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-200 dark:border-blue-800"
            >
              Retail
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-200 dark:border-blue-800"
            >
              PowerSystem
            </Badge>
          </div>

          <div className="space-y-4 mb-6 flex-grow">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Client
              </h4>
              <p className="font-medium">Nordic Fashion Group</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Challenge
              </h4>
              <p>
                The client needed a scalable e-commerce solution to manage their
                growing product catalog and integrate with their existing
                inventory system.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Solution
              </h4>
              <p>
                We developed a custom e-commerce platform with advanced
                inventory management, customer accounts, and seamless payment
                processing.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Results
              </h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    +45%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Sales Increase
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    -60%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Admin Time
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            >
              <Link href="#">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
