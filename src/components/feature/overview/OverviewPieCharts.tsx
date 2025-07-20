import { CHART_COLORS } from "../../../constants/chartColors";
import type { AssetType } from "../../../types/assetType";
import {
  getAssetsByStatus,
  getAssetsWithAndWithoutIP,
  getAssetsWithAndWithoutUpdateDate,
} from "../../../utils/assetAggregators";
import ChartWrraper from "../charts/ChartWrraper";
import CustomPieChart from "../charts/CustomPieChart";

const OverviewPieCharts = ({ assets }: { assets: AssetType[] }) => {
  const chartIPData = getAssetsWithAndWithoutIP(assets);
  const chartStatusData = getAssetsByStatus(assets, [
    "200",
    "301",
    "401",
    "404",
    "500",
  ]);
  const chartUpdateDateData = getAssetsWithAndWithoutUpdateDate(assets);
  const chartItems = [
    {
      title: "IP Coverage of Assets",
      colors: [CHART_COLORS.red, CHART_COLORS.green],
      chartData: chartIPData,
    },
    {
      title: "Response Status Breakdown",
      colors: [
        CHART_COLORS.green,
        CHART_COLORS.yellow,
        CHART_COLORS.purple,
        CHART_COLORS.lightBlue,
        CHART_COLORS.red,
      ],
      chartData: chartStatusData,
    },
    {
      title: "Asset Update Coverage",
      colors: [CHART_COLORS.green, CHART_COLORS.red],
      chartData: chartUpdateDateData,
    },
  ];

  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomPieChart
          tooltipContentStyles={{
            backgroundColor: CHART_COLORS.darkBlue,
            borderColor: "white",
            borderRadius: "2px",
          }}
          tooltipItemStyles={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
          }}
          key={index}
          title={item.title}
          chartData={item.chartData}
          colors={item.colors}
        />
      ))}
    </ChartWrraper>
  );
};
export default OverviewPieCharts;
