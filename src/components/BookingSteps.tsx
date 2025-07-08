'use client'

interface BookingStepsProps {
  currentStep: number
  totalSteps?: number
}

export default function BookingSteps({ currentStep, totalSteps = 3 }: BookingStepsProps) {
  const steps = [
    { id: 1, name: 'Date & Time', description: 'Select your event details' },
    { id: 2, name: 'Package & Info', description: 'Choose your package and details' },
    { id: 3, name: 'Payment', description: 'Secure payment and confirmation' },
  ]

  return (
    <div className="py-8 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step.id <= currentStep
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.id < currentStep ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
              </div>

              {/* Step Info */}
              <div className="ml-4 hidden sm:block">
                <div className="text-sm font-medium text-gray-900">{step.name}</div>
                <div className="text-xs text-gray-500">{step.description}</div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block mx-8">
                  <div
                    className={`w-16 h-0.5 ${
                      step.id < currentStep ? 'bg-red-600' : 'bg-gray-200'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Progress Bar */}
        <div className="sm:hidden mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-sm font-medium text-gray-900">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 