import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CustomAreaChartProps } from "../../../types/CustomChartsProps";

const CustomAreaChart = ({
  title,
  chartData,
  colors,
  tooltipContentStyles,
  tooltipItemStyles,
  interval
}: CustomAreaChartProps) => {
  return (
    <div className="w-[45%] h-72">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
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
            interval={interval}
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
            contentStyle={tooltipContentStyles}
            labelStyle={{ color: "white" }}
            itemStyle={tooltipItemStyles}
            content={({ label, payload }) => (
              <div style={tooltipContentStyles}>
                <span
                  style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
                >
                  {label}:
                </span>
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
