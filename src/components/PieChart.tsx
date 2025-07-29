type PieChartDataItem = {
  value: number;
  color: string;
  label: string;
  currency?: string;
};

type PieChartProps = {
  data: PieChartDataItem[];
};

export const PieChart = ({ data }: PieChartProps) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Create the conic-gradient string
  let cumulativePercentage = 0;
  const gradientParts = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const startAngle = cumulativePercentage;
    const endAngle = cumulativePercentage + percentage;
    cumulativePercentage = endAngle;
    return `${item.color} ${startAngle}% ${endAngle}%`;
  });

  const gradientStyle = {
    background: `conic-gradient(${gradientParts.join(', ')})`,
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className=" w-24 aspect-square rounded-full"
        style={gradientStyle}
        role="img"
        aria-label="Pie chart"
      ></div>
      <ul className="space-y-1 text-sm">
        {data.map((item) => (
          <li key={item.label} className="flex md:items-center items-start gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="wrap-anywhere">
              {/* {item.label} ({((item.value / total) * 100).toFixed(1)}%) */}
              {item.label} ({item.value} zł)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
