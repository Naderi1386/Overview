import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { PIE_CHART_COLORS } from "../../../constants/PieChartColors";
const CustomPieChart = ({
  chartData,
  colors,
  title,
}: {
  chartData: { name: string; value: number }[];
  colors: string[];
  title: string;
}) => {
  return (
    <div className="w-[30%] h-64 flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold text-white/60 mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
              `${name}: ${(Number(percent) * 100).toFixed(0)}%`
            }
            isAnimationActive={true}
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
            contentStyle={{
              backgroundColor: PIE_CHART_COLORS.darkBlue,
              borderColor: "white",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "white" }}
            itemStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 14,
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
