import { Check, X } from "lucide-react";

export function PackageComparison() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"></th>
            <th className="p-4 text-center bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700">
              <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
                MiniSystem
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Starter Package
              </div>
              <div className="text-xl font-bold mt-2 text-blue-600 dark:text-blue-400">
                12 000 SEK
              </div>
            </th>
            <th className="p-4 text-center bg-purple-50 dark:bg-purple-900/20 border-b border-gray-200 dark:border-gray-700 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                SmartSystem
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Professional Package
              </div>
              <div className="text-xl font-bold mt-2 text-purple-600 dark:text-purple-400">
                28 000 SEK
              </div>
            </th>
            <th className="p-4 text-center bg-amber-50 dark:bg-amber-900/20 border-b border-gray-200 dark:border-gray-700">
              <div className="text-lg font-bold text-amber-700 dark:text-amber-300">
                PowerSystem
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Enterprise Package
              </div>
              <div className="text-xl font-bold mt-2 text-amber-600 dark:text-amber-400">
                From 45 000 SEK
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Number of interfaces
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              1
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Up to 4
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Unlimited
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Features
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Up to 3
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Up to 8
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Custom
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Responsive design
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Cloud deployment
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Custom integrations
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Custom design
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Email/SMS integration
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>

          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Admin dashboard
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>

          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Delivery time
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              2-3 weeks
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              3-5 weeks
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Based on scope
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Feedback rounds
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              1
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              2
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Unlimited
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
              Support period
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              30 days
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              60 days
            </td>
            <td className="p-4 text-center border-b border-gray-200 dark:border-gray-700">
              Dedicated
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
