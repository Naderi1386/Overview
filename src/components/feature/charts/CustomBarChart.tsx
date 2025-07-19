import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_COLORS } from "../../../constants/chartColors";

const CustomBarChart = ({
  chartData,
  title,
  barFill,
}: {
  chartData: { label: string; count: number }[];
  title: string;
  barFill: string;
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
            contentStyle={{
              backgroundColor: CHART_COLORS.darkBlue,
              borderRadius: "2px",
              color: "white",
            }}
            labelStyle={{ color: "white" }}
            itemStyle={{ color: "white", fontWeight: "bold", fontSize: 14 }}
          />
          <Bar dataKey="count" fill={barFill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
