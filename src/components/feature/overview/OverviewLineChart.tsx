import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AssetType } from "../../../types/assetType";
import ChartWrraper from "../charts/ChartWrraper";
import { CHART_COLORS } from "../../../constants/chartColors";
import { groupAssetsByCreatedMonth } from "../../../lib/assetAggregators";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const OverviewLineChart = ({ assets }: { assets: AssetType[] }) => {
  console.log(groupAssetsByCreatedMonth(assets));
  return (
    <ChartWrraper>
      <div className="w-[45%] h-72">
        <h3 className="text-white text-base font-semibold mb-2.5 text-center">
          testing Line charts
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
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
              dataKey="uv"
              stroke={CHART_COLORS.lightBlue}
              fill={CHART_COLORS.lightBlue}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrraper>
  );
};

export default OverviewLineChart;
