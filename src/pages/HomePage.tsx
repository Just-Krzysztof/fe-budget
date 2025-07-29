import { TrendingUp, TrendingDown, CircleDollarSign } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Year summary</p>

              <p className="text-lg font-medium text-gray-900 flex">
                <TrendingDown className="rotate-180 text-green-500"></TrendingDown> $240.94
              </p>
              <p className="md:text-lg  font-medium text-gray-900 flex">
                <TrendingUp className="rotate-180 text-red-500"></TrendingUp>$240.94
              </p>
            </div>

            <span className="rounded-full bg-blue-100 p-3 text-blue-600">
              <CircleDollarSign />
            </span>
          </div>

          {/* <div className="mt-1 flex gap-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <p className="flex gap-2 text-xs">
              <span className="font-medium"> 67.81% </span>

              <span className="text-gray-500"> Since last week </span>
            </p>
          </div> */}
        </article>
      </div>
      <div className="w-full">section 50% / 50%</div>
    </>
  );
};
