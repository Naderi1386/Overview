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
      title: "بررسی وجود آی دی در دارایی ها",
      colors: [CHART_COLORS.yellow, CHART_COLORS.lightBlue],
      chartData: chartIPData,
    },
    {
      title: "تفکیک وضعیت پاسخ",
      colors: [
        CHART_COLORS.cyan,
        CHART_COLORS.yellow,
        CHART_COLORS.purple,
        CHART_COLORS.lightBlue,
        CHART_COLORS.orange,
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
            backgroundColor: "white",
            borderColor: CHART_COLORS.darkBlue,
            borderRadius: "40px",
            borderWidth: 2,
          }}
          tooltipItemStyles={{
            color: CHART_COLORS.darkBlue,
            fontWeight: "bold",
            fontSize: 12,
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
