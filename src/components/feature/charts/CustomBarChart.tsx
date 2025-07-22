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
}: {
  chartData: { label: string; value: number }[];
  title: string;
  barFill: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
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
                <span style={{ color: barFill, fontSize: 14 }}>{label}:</span>
                <span style={tooltipItemStyles}> {payload[0]?.value}</span>
              </div>
            )}
          />
          <Bar dataKey="value" fill={barFill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
