export function ClientLogos() {
  return (
    <div className="w-full py-8">
      <h3 className="text-center text-lg font-medium text-gray-600 dark:text-gray-400 mb-8">
        Trusted by businesses across Sweden
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-70">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-700 h-12 w-32 rounded flex items-center justify-center">
              <div className="text-lg font-bold text-gray-500 dark:text-gray-400">Client {i}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
