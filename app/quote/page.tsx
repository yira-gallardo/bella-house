'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectTypes = [
  { id: "kitchen", label: "Kitchen Renovation", image: "/img/work-6.png" },
  { id: "bathroom", label: "Bathroom Renovation", image: "/img/work-7.png" },
  { id: "basement", label: "Basement Development", image: "/img/work-1.png" },
  { id: "painting", label: "Interior Painting", image: "/img/work-4.png" },
  { id: "full-home", label: "Full Home Renovation", image: "/img/work-5.png" },
  { id: "other", label: "Other", image: "/img/work-8.png" },
]

const budgetOptions = [
  { id: "2k-5k", label: "$2k - $5k" },
  { id: "5k-15k", label: "$5k - $15k" },
  { id: "15k-30k", label: "$15k - $30k" },
  { id: "30k-60k", label: "$30k - $60k" },
  { id: "60k+", label: "$60k+" },
]

const timelineOptions = [
  { id: "asap", label: "ASAP" },
  { id: "1-3months", label: "1 - 3 months" },
  { id: "3-6months", label: "3 - 6 months" },
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    description: "",
    address: "",
    city: "Calgary",
    postalCode: "",
    name: "",
    email: "",
    phone: "",
  })

  const totalSteps = 4

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(5)
  }

  return (
    <main className="flex min-h-[calc(100vh-128px)] items-center justify-center bg-[#f0efed] px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg sm:p-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-normal italic text-gray-800 sm:text-4xl">
            Tell Us About Your Project
          </h1>
          <p className="mt-2 text-gray-500">
            Get a free estimate within 24 hours
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < step ? "bg-[#C8A97E]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">Step {step} of {totalSteps}</p>
        </div>

        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800">
              What type of project are you interested in?
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {projectTypes.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`relative flex flex-col overflow-hidden rounded-xl border-2 transition-all ${
                    selectedProject === project.id
                      ? "border-[#C8A97E] ring-2 ring-[#C8A97E]/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={project.image}
                      alt={project.label}
                      fill
                      className="object-cover"
                    />
                    {selectedProject === project.id && (
                      <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A97E]">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="bg-white px-2 py-3">
                    <span className="text-sm font-medium text-gray-700">{project.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Project Details + Budget + Timeline */}
        {step === 2 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800">
              Tell us about your project
            </h2>
            
            {/* Description */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Describe your project</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                placeholder="We would like a modern kitchen renovation with a large island, quartz countertops, and new cabinetry."
              />
            </div>

            {/* Budget and Timeline */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Budget */}
              <div>
                <h3 className="text-base font-medium text-gray-800">Approximate budget</h3>
                <div className="mt-4 space-y-3">
                  {budgetOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                          selectedBudget === option.id
                            ? "border-[#C8A97E] bg-[#C8A97E]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedBudget === option.id && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="budget"
                        value={option.id}
                        checked={selectedBudget === option.id}
                        onChange={() => setSelectedBudget(option.id)}
                        className="sr-only"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-base font-medium text-gray-800">Desired timeline</h3>
                <div className="mt-4 space-y-3">
                  {timelineOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                          selectedTimeline === option.id
                            ? "border-[#C8A97E] bg-[#C8A97E]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTimeline === option.id && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={selectedTimeline === option.id}
                        onChange={() => setSelectedTimeline(option.id)}
                        className="sr-only"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Project Location */}
        {step === 3 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800">
              Project Location
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Please provide the location of your project.
            </p>
            
            <div className="mt-6 space-y-4">
              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                    placeholder="Street Address"
                  />
                </div>
              </div>

              {/* City and Postal Code Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                    placeholder="Calgary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                    placeholder="Enter Postal Code"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              We proudly serve Calgary and surrounding areas.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C8A97E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C8A97E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Response within 24h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#C8A97E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No obligation</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800">
              How can we reach you?
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;ll contact you to discuss your estimate.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:border-[#C8A97E] focus:outline-none focus:ring-2 focus:ring-[#C8A97E]/20"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Your information is safe with us. We will never share your details.
            </p>
          </div>
        )}

        {/* Step 5: Success */}
        {step === 5 && (
          <div className="mt-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D6B98C] to-[#C8A97E]">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl font-normal italic text-gray-800">
              Thank You!
            </h2>

            {/* Message */}
            <p className="mt-4 text-gray-600">
              Your request has been submitted successfully.
            </p>
            <p className="mt-2 text-gray-500">
              One of our team members will contact you within <span className="font-medium text-gray-700">24 hours</span> to discuss your project.
            </p>

            {/* What to Expect */}
            <div className="mt-8 rounded-xl bg-[#f5f3f0] p-6">
              <h3 className="text-sm font-medium text-gray-700">What happens next?</h3>
              <ul className="mt-4 space-y-3 text-left text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A97E] text-xs font-medium text-white">1</span>
                  <span>We review your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A97E] text-xs font-medium text-white">2</span>
                  <span>A specialist will call you to discuss your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A97E] text-xs font-medium text-white">3</span>
                  <span>We schedule a free on-site consultation</span>
                </li>
              </ul>
            </div>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="mt-8 inline-block rounded-full px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Navigation Buttons */}
        {step <= 4 && (
          <>
            <div className="mt-8 flex gap-4">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedProject) ||
                    (step === 2 && (!formData.description.trim() || !selectedBudget || !selectedTimeline)) ||
                    (step === 3 && (!formData.address.trim() || !formData.city.trim() || !formData.postalCode.trim()))
                  }
                  className="flex-1 rounded-full px-6 py-3 text-base font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 rounded-full px-6 py-3 text-base font-medium text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #D6B98C, #C8A97E)" }}
                >
                  Submit
                </button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your information is secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Trusted by 100+ homeowners</span>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
