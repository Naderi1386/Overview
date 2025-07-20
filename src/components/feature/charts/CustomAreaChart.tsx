import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_COLORS } from "../../../constants/chartColors";

const CustomAreaChart = ({
  title,
  chartData,
  colors,
}: {
  title: string;
  chartData: { label: string; count: number }[];
  colors: string[];
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
            contentStyle={{
              backgroundColor: CHART_COLORS.darkBlue,
              borderRadius: "2px",
              color: "white",
            }}
            labelStyle={{ color: "white" }}
            itemStyle={{ color: "white", fontWeight: "bold", fontSize: 14 }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke={colors[0]}
            fill={colors[1]}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;
