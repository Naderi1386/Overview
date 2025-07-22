import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CSSProperties } from "react";

const CustomAreaChart = ({
  title,
  chartData,
  colors,
  tooltipContentStyles,
  tooltipItemStyles,
}: {
  title: string;
  chartData: { label: string; value: number }[];
  colors: string[];
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
}) => {
  return (
    <div className="w-[45%] h-72">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            contentStyle={tooltipContentStyles}
            labelStyle={{ color: "white" }}
            itemStyle={tooltipItemStyles}
            content={({ label, payload }) => (
              <div style={tooltipContentStyles}>
                <span style={{ color: colors[0], fontSize: 14 }}>{label}:</span>
                <span style={tooltipItemStyles}> {payload[0]?.value}</span>
              </div>
            )}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={colors[0]}
            fill={colors[1]}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;
