import Link from "next/link";
import {
  ChevronUpIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Who we are
        </h2>

        {/* Description */}
        <div className="text-gray-700 space-y-4 text-left mb-12 text-sm md:text-base">
          <p>
            Property Box Nigeria Limited is a construction and civil works
            company established in 2014 as a limited liability company.
          </p>
          <p>
            The company was founded with the objective to enter the construction
            environment as a young, dynamic civil and building company and since
            its inception has been active in building development,
            rehabilitation and maintenance.
          </p>
          <p>
            It has successfully accomplished diversified public projects such
            as, schools, community buildings, sport and recreation projects,
            tourism development projects, roads, boreholes and several
            infrastructural projects, as well as including the development,
            reconstruction and renovation of office, residential, and commercial
            buildings.
          </p>
        </div>

        {/* Top Cards (Chat Bubble Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative bg-white border shadow-sm p-6 text-left rounded-md">
            <div className="absolute w-4 h-4 bg-white border-l border-b border-gray-300 left-6 -bottom-2 -rotate-45 z-0"></div>
            <h3 className="font-bold mb-2">OUR VISION</h3>
            <p>
              To be a respected and renowned building contractor delivering
              beyond expectation, always.
            </p>
          </div>

          <div className="relative bg-white border shadow-sm p-6 text-left rounded-md">
            <div className="absolute w-4 h-4 bg-white border-l border-b border-gray-300 left-6 -bottom-2 -rotate-45 z-0"></div>
            <h3 className="font-bold mb-2">OUR MISSION</h3>
            <p>
              To procure projects at competitive pricing, providing a safe
              working condition and to deliver quality work within a reasonable
              time frame.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex items-center justify-center mb-16 w-full max-w-6xl mx-auto px-6">
          {/* Colored Segments Behind Steps */}
          <div className="absolute inset-0 flex justify-between items-center z-0">
            <div className="h-[2px] w-1/4 bg-blue-600"></div>
            <div className="h-[2px] w-1/4 bg-green-600"></div>
            <div className="h-[2px] w-1/4 bg-yellow-400"></div>
            <div className="h-[2px] w-1/4 bg-red-600"></div>
          </div>

          {/* Steps */}
          <div className="relative z-10 flex justify-between w-full max-w-6xl">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <ChevronUpIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-green-600">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-yellow-400">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <ChevronUpIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-red-600">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards (Chat Bubble Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-white border shadow-sm p-6 text-left rounded-md">
            <div className="absolute w-4 h-4 bg-white border-l border-t border-gray-300 left-6 -top-2 rotate-45 z-0"></div>
            <h3 className="font-bold mb-2">OUR PHILOSOPHY</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                To create detailed work schedule and resources plan to meet
                client’s project objective.
              </li>
              <li>
                Establish and maintain clear lines of communication with all
                project stakeholders.
              </li>
              <li>
                Track project progress, escalate and resolve any bottleneck to
                project delivery.
              </li>
              <li>Quality control of work done.</li>
              <li>
                Complete and commission the project on time and in budget.
              </li>
            </ul>
          </div>

          <div className="relative bg-white border shadow-sm p-6 text-left rounded-md">
            <div className="absolute w-4 h-4 bg-white border-l border-t border-gray-300 left-6 -top-2 rotate-45 z-0"></div>
            <h3 className="font-bold mb-2">OUR TECHNOLOGICAL SOLUTION</h3>
            <p className="text-sm leading-relaxed">
              <span className="font-bold text-red-600">
                PropertyBox Property Management Software
              </span>{" "}
              is a comprehensive web-based software package for rental and
              landed property management, helping letting agents, landlords and
              individuals with rental property portfolios manage all aspects of
              letting – from landlords and tenants to repairs and application of
              rental management fees. <br />
              <Link
                href="/register"
                className="text-red-600 font-semibold hover:underline mt-2 inline-block"
              >
                Create Free Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
