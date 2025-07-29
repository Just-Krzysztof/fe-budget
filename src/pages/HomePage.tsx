import { TrendingUp, TrendingDown, CircleDollarSign } from 'lucide-react';
import { PieChart } from '../components/PieChart';

const pieChartData = [
  { value: 12, color: 'rgba(255, 99, 132, 1)', label: 'Income' },
  { value: 19, color: 'rgba(54, 162, 235, 1)', label: 'Expenses' },
];

const pieChartData2 = [
  { value: 200, color: 'rgba(255, 99, 132, 1)', label: 'Income' },
  { value: 190, color: 'rgba(54, 162, 235, 1)', label: 'Expenses' },
];

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
        </article>
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3">
          <div className="flex flex-col items-center justify-between">
            <p className="text-sm text-gray-500 self-start">This Month</p>
            <div className="relative flex h-full w-full justify-between">
              <PieChart data={pieChartData} />
            </div>
          </div>
        </article>
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3">
          <div className="flex flex-col items-center justify-between">
            <p className="text-sm text-gray-500 self-start">Last Month</p>
            <div className="relative flex h-full w-full justify-between">
              <PieChart data={pieChartData2} />
            </div>
          </div>
        </article>
      </div>
      <div className="w-full"></div>
      <div className="w-full bg-slate-400">section 50% / 50%</div>
    </>
  );
};
