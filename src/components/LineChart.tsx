type DataPoint = {
  value: number;
  label: string;
};

type LineChartProps = {
  incomeData: DataPoint[];
  expensesData: DataPoint[];
  saveData: DataPoint[];
  maxRecords?: number;
  className?: string;
};

const colors = {
  income: '#22c55e',
  expenses: '#ef4444',
  save: '#3b82f6',
};

export const LineChart = ({
  incomeData,
  expensesData,
  saveData,
  maxRecords = 10,
  className,
}: LineChartProps) => {
  const slicedIncome = incomeData.slice(-maxRecords);
  const slicedExpenses = expensesData.slice(-maxRecords);
  const slicedSave = saveData.slice(-maxRecords);

  const allData = [...slicedIncome, ...slicedExpenses, ...slicedSave];
  const labels = [...new Set(allData.map((d) => d.label))].sort();
  const maxValue = Math.max(...allData.map((d) => d.value), 0);

  const generatePath = (data: DataPoint[]): string => {
    if (data.length < 2) return '';
    const sortedData = [...data].sort((a, b) => labels.indexOf(a.label) - labels.indexOf(b.label));
    return sortedData
      .map((point, i) => {
        const x = (labels.indexOf(point.label) / (labels.length - 1)) * 100;
        const y = 100 - (point.value / maxValue) * 100;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(' ');
  };

  const yAxisLabels = [...Array(5)].map((_, i) => ({
    value: (maxValue / 4) * (4 - i),
    position: `${(i / 4) * 100}%`,
  }));

  return (
    <div className={`w-full rounded-lg border border-gray-100 bg-white p-4 md:p-6 ${className}`}>
      <div className="flex">
        {/* Y-Axis */}
        <div className="relative flex-shrink-0 pr-4 text-xs text-right text-gray-500">
          {yAxisLabels.map(({ value, position }, i) => (
            <div
              key={i}
              className="absolute right-4"
              style={{
                top: position,
                transform:
                  i === 4 ? 'translateY(-100%)' : i === 0 ? 'translateY(0)' : 'translateY(-50%)',
              }}
            >
              {value.toFixed(0)}
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="relative w-full aspect-video">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
            aria-labelledby="chart-title"
            role="img"
          >
            <title id="chart-title">Income, Expenses, and Savings Line Chart</title>
            {/* Grid Lines */}
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={(i * 100) / 4}
                x2="100"
                y2={(i * 100) / 4}
                stroke="#e5e7eb"
                strokeDasharray="2,2"
              />
            ))}

            {/* Data Paths */}
            <path
              d={generatePath(slicedIncome)}
              fill="none"
              stroke={colors.income}
              strokeWidth="0.5"
            />
            <path
              d={generatePath(slicedExpenses)}
              fill="none"
              stroke={colors.expenses}
              strokeWidth="0.5"
            />
            <path d={generatePath(slicedSave)} fill="none" stroke={colors.save} strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* X-Axis Labels */}
      <div className="relative mt-4 h-4 w-full">
        {labels.map((label, i) => (
          <span
            key={label}
            className="absolute text-xs text-gray-500"
            style={{
              left: `${(i / (labels.length - 1)) * 100}%`,
              transform:
                i === 0
                  ? 'translateX(0)'
                  : i === labels.length - 1
                    ? 'translateX(-100%)'
                    : 'translateX(-50%)',
            }}
          >
            {new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: colors.income }}></span>
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: colors.expenses }}
          ></span>
          <span>Expenses</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: colors.save }}></span>
          <span>Savings</span>
        </div>
      </div>
    </div>
  );
};
