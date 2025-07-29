import { TrendingUp, TrendingDown, CircleDollarSign } from 'lucide-react';
import { PieChart } from '../components/PieChart';
import { LineChart } from '../components/LineChart';

const pieChartData = [
  { value: 12, color: 'rgba(255, 99, 132, 1)', label: 'Income' },
  { value: 19, color: 'rgba(54, 162, 235, 1)', label: 'Expenses' },
];

const pieChartData2 = [
  { value: 200, color: 'rgba(255, 99, 132, 1)', label: 'Income' },
  { value: 190, color: 'rgba(54, 162, 235, 1)', label: 'Expenses' },
];

// Corrected line chart data
const lineChartIncome = [
  { value: 150, label: '2025-07-16' },
  { value: 260, label: '2025-07-17' },
  { value: 340, label: '2025-07-18' },
  { value: 160, label: '2025-07-19' },
  { value: 260, label: '2025-07-20' },
  { value: 360, label: '2025-07-21' },
  { value: 260, label: '2025-07-22' },
  { value: 260, label: '2025-07-23' },
  { value: 360, label: '2025-07-24' },
  { value: 160, label: '2025-07-25' },
  { value: 360, label: '2025-07-26' },
];
const lineChartExpenses = [
  { value: 350, label: '2025-07-16' },
  { value: 260, label: '2025-07-17' },
  { value: 940, label: '2025-07-18' },
  { value: 860, label: '2025-07-19' },
  { value: 760, label: '2025-07-20' },
  { value: 660, label: '2025-07-21' },
  { value: 560, label: '2025-07-22' },
  { value: 460, label: '2025-07-23' },
  { value: 360, label: '2025-07-24' },
  { value: 260, label: '2025-07-25' },
  { value: 160, label: '2025-07-26' },
];
const lineChartSave = [
  { value: 50, label: '2025-07-16' },
  { value: 60, label: '2025-07-17' },
  { value: 40, label: '2025-07-18' },
  { value: 60, label: '2025-07-19' },
  { value: 60, label: '2025-07-20' },
  { value: 60, label: '2025-07-21' },
  { value: 60, label: '2025-07-22' },
  { value: 60, label: '2025-07-23' },
  { value: 60, label: '2025-07-24' },
  { value: 60, label: '2025-07-25' },
  { value: 60, label: '2025-07-26' },
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
      <div className="w-full flex flex-col mt-4">
        <div className="md:w-[50%]">s</div>
        <div className="md:w-[50%]">
          <LineChart
            incomeData={lineChartIncome}
            expensesData={lineChartExpenses}
            saveData={lineChartSave}
            maxRecords={10}
          />
        </div>
      </div>
      <div className="w-full bg-slate-400">section 50% / 50%</div>
      {/* <div className="mt-4 w-full">
        <LineChart
          incomeData={lineChartIncome}
          expensesData={lineChartExpenses}
          saveData={lineChartSave}
          maxRecords={20}
        />
      </div> */}
    </>
  );
};
