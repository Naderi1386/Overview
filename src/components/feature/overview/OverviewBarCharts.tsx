import type { AssetType } from "../../../types/assetType";
import { CHART_COLORS } from "../../../constants/chartColors";
import ChartWrraper from "../charts/ChartWrraper";
import CustomBarChart from "../charts/CustomBarChart";
import {
  getAssetsByStatus,
  getAssetsWithSingleAndMultipleIP,
} from "../../../utils/assetAggregators";

const OverviewBarCharts = ({ assets }: { assets: AssetType[] }) => {
  const barStatusData = getAssetsByStatus(assets, [
    "200",
    "301",
    "401",
    "404",
    "500",
  ]);
  const barIPData = getAssetsWithSingleAndMultipleIP(assets);
  const chartItems = [
    {
      title: "Asset Count by Status Code",
      barFill: CHART_COLORS.lightBlue,
      chartData: barStatusData,
    },
    {
      title: "Asset Distribution by IP Count",
      barFill: CHART_COLORS.yellow,
      chartData: barIPData,
    },
  ];
  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomBarChart
          key={index}
          tooltipContentStyles={{
            backgroundColor: CHART_COLORS.darkBlue,
            borderRadius: "2px",
            color: "white",
          }}
          tooltipItemStyles={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
          }}
          title={item.title}
          barFill={item.barFill}
          chartData={item.chartData}
        />
      ))}
    </ChartWrraper>
  );
};

export default OverviewBarCharts;
