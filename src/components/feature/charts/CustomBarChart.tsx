import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CustomBarChartProps } from "../../../types/CustomChartsProps";

const CustomBarChart = ({
  chartData,
  title,
  barFill,
  tooltipContentStyles,
  tooltipItemStyles,
  handleNavigate,
}: CustomBarChartProps) => {
  return (
    <div className="w-[45%] h-72">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="white" opacity={0.1} />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "white",
              opacity: 0.5,
              fontSize: 14,
              fontWeight: 400,
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "white",
              opacity: 0.5,
              fontSize: 14,
              fontWeight: 400,
            }}
          />
          <Tooltip
            content={({ label, payload }) => (
              <div style={tooltipContentStyles}>
                <span
                  style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
                >
                  {label}:
                </span>
                <span style={tooltipItemStyles}> {payload?.[0]?.value}</span>
              </div>
            )}
          />
          <Bar
            className={`${handleNavigate && "cursor-pointer"}`}
            dataKey="value"
            fill={barFill}
            onClick={(data) => {
              if (!chartData.length) return;
              const label = data.payload.label as string;
              if (label && typeof handleNavigate === "function") {
                handleNavigate(label);
              }
            }}
            tabIndex={-1}
            strokeWidth={0.8}
            stroke="white"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
