import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CSSProperties } from "react";
const CustomBarChart = ({
  chartData,
  title,
  barFill,
  tooltipContentStyles,
  tooltipItemStyles,
  handleNavigate,
}: {
  chartData: { label: string; value: number }[];
  title: string;
  barFill: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  handleNavigate?: (name: string) => void;
}) => {
  return (
    <div className="w-[45%] h-72">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.35}
            stroke={"white"}
          />
          <XAxis dataKey="label" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip
            content={({ label, payload }) => (
              <div style={tooltipContentStyles}>
                <span style={{ color: "black", fontSize: 14 }}>{label}:</span>
                <span style={tooltipItemStyles}> {payload[0]?.value}</span>
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
                handleNavigate(String(label));
              }
            }}
            tabIndex={-1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
