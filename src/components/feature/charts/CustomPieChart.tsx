import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import type { CSSProperties } from "react";
const CustomPieChart = ({
  chartData,
  colors,
  title,
  tooltipContentStyles,
  tooltipItemStyles,
}: {
  chartData: { label: string; value: number }[];
  colors: string[];
  title: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
}) => {
  return (
    <div className="w-[30%] h-64 flex flex-col items-center justify-center">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={55}
            dataKey="value"
            nameKey="label"
            label={({ name, percent }) =>
              `${name}: ${(Number(percent) * 100).toFixed(0)}%`
            }
            isAnimationActive={true}
            paddingAngle={5}
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index]}
                stroke="#1f2937"
                strokeWidth={1}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipContentStyles}
            labelStyle={{ color: "white" }}
            itemStyle={tooltipItemStyles}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
