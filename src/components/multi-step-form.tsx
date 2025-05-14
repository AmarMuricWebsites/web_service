"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

interface FormStep {
  id: string
  title: string
  description: string
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps: FormStep[] = [
    {
      id: "contact",
      title: "Contact Information",
      description: "Tell us how to reach you",
    },
    {
      id: "project",
      title: "Project Details",
      description: "Tell us about your project",
    },
    {
      id: "requirements",
      title: "Requirements",
      description: "Specific needs and features",
    },
    {
      id: "budget",
      title: "Budget & Timeline",
      description: "Your budget and timeline expectations",
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 1500)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetForm = () => {
    setCurrentStep(0)
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your message has been received. We'll get back to you within 24 hours to discuss your project.
        </p>
        <Button onClick={resetForm}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                index === 0 ? "items-start" : index === steps.length - 1 ? "items-end" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }`}
              >
                {index < currentStep ? <Check className="h-4 w-4" /> : <span>{index + 1}</span>}
              </div>
              <div className="text-xs mt-1 hidden sm:block">{step.title}</div>
            </div>
          ))}
        </div>
        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step title */}
      <div className="mb-6">
        <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{steps[currentStep].description}</p>
      </div>

      {/* Step content */}
      <div className="mb-8">
        {currentStep === 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First name
                </label>
                <input
                  id="first-name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last name
                </label>
                <input
                  id="last-name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company name
              </label>
              <input
                id="company"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your company name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="project-type" className="text-sm font-medium">
                Project type
              </label>
              <select
                id="project-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="web-app">Web Application</option>
                <option value="e-commerce">E-commerce</option>
                <option value="crm">CRM System</option>
                <option value="booking">Booking System</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="project-description" className="text-sm font-medium">
                Project description
              </label>
              <textarea
                id="project-description"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Describe your project"
              ></textarea>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Required features</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-1" className="rounded border-gray-300" />
                  <label htmlFor="feature-1" className="text-sm">
                    User authentication
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-2" className="rounded border-gray-300" />
                  <label htmlFor="feature-2" className="text-sm">
                    Admin dashboard
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-3" className="rounded border-gray-300" />
                  <label htmlFor="feature-3" className="text-sm">
                    Payment processing
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-4" className="rounded border-gray-300" />
                  <label htmlFor="feature-4" className="text-sm">
                    File uploads
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-5" className="rounded border-gray-300" />
                  <label htmlFor="feature-5" className="text-sm">
                    Reporting/analytics
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feature-6" className="rounded border-gray-300" />
                  <label htmlFor="feature-6" className="text-sm">
                    API integration
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="additional-requirements" className="text-sm font-medium">
                Additional requirements
              </label>
              <textarea
                id="additional-requirements"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Any other specific requirements"
              ></textarea>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium">
                Budget range (SEK)
              </label>
              <select
                id="budget"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Select budget range
                </option>
                <option value="10-20k">10,000 - 20,000 SEK</option>
                <option value="20-30k">20,000 - 30,000 SEK</option>
                <option value="30-50k">30,000 - 50,000 SEK</option>
                <option value="50k+">50,000+ SEK</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-medium">
                Desired timeline
              </label>
              <select
                id="timeline"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="asap">As soon as possible</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="additional-notes" className="text-sm font-medium">
                Additional notes
              </label>
              <textarea
                id="additional-notes"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Any other information you'd like to share"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button onClick={nextStep} disabled={isSubmitting} className="flex items-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
              {currentStep === steps.length - 1 ? null : <ArrowRight className="h-4 w-4" />}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
