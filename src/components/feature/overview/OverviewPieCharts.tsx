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
      title: "پوشش IP دارایی‌ها",
      colors: [CHART_COLORS.yellow, CHART_COLORS.lightBlue],
      chartData: chartIPData,
    },
    {
      title: "تفکیک وضعیت پاسخ",
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
      title: "پوشش به‌روزرسانی دارایی‌ها",
      colors: [CHART_COLORS.lightBlue, CHART_COLORS.yellow],
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
