"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FilterOption {
  id: string
  label: string
}

export function PortfolioFilter({ onFilterChange }: { onFilterChange: (filters: string[]) => void }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const industryOptions: FilterOption[] = [
    { id: "healthcare", label: "Healthcare" },
    { id: "retail", label: "Retail" },
    { id: "real-estate", label: "Real Estate" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "fitness", label: "Fitness" },
    { id: "construction", label: "Construction" },
  ]

  const solutionOptions: FilterOption[] = [
    { id: "e-commerce", label: "E-commerce" },
    { id: "booking", label: "Booking" },
    { id: "crm", label: "CRM" },
    { id: "inventory", label: "Inventory" },
    { id: "membership", label: "Membership" },
    { id: "project-management", label: "Project Management" },
  ]

  const packageOptions: FilterOption[] = [
    { id: "mini-system", label: "MiniSystem" },
    { id: "smart-system", label: "SmartSystem" },
    { id: "power-system", label: "PowerSystem" },
  ]

  const toggleFilter = (filterId: string) => {
    setActiveFilters((current) => {
      const newFilters = current.includes(filterId) ? current.filter((id) => id !== filterId) : [...current, filterId]

      onFilterChange(newFilters)
      return newFilters
    })
  }

  const clearFilters = () => {
    setActiveFilters([])
    onFilterChange([])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <h3 className="font-medium">Filter Projects</h3>
        </div>
        {activeFilters.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
            Clear filters
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Industry</h4>
          <div className="flex flex-wrap gap-2">
            {industryOptions.map((option) => (
              <Badge
                key={option.id}
                variant={activeFilters.includes(option.id) ? "default" : "outline"}
                className={`cursor-pointer ${
                  activeFilters.includes(option.id)
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-blue-100 dark:hover:bg-blue-900/30"
                }`}
                onClick={() => toggleFilter(option.id)}
              >
                {option.label}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Solution Type</h4>
          <div className="flex flex-wrap gap-2">
            {solutionOptions.map((option) => (
              <Badge
                key={option.id}
                variant={activeFilters.includes(option.id) ? "default" : "outline"}
                className={`cursor-pointer ${
                  activeFilters.includes(option.id)
                    ? "bg-teal-600 hover:bg-teal-700"
                    : "hover:bg-teal-100 dark:hover:bg-teal-900/30"
                }`}
                onClick={() => toggleFilter(option.id)}
              >
                {option.label}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Package</h4>
          <div className="flex flex-wrap gap-2">
            {packageOptions.map((option) => (
              <Badge
                key={option.id}
                variant={activeFilters.includes(option.id) ? "default" : "outline"}
                className={`cursor-pointer ${
                  activeFilters.includes(option.id)
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "hover:bg-purple-100 dark:hover:bg-purple-900/30"
                }`}
                onClick={() => toggleFilter(option.id)}
              >
                {option.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
