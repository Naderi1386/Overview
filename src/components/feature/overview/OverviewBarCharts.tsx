import type { AssetType } from "../../../types/assetType";
import { CHART_COLORS } from "../../../constants/chartColors";
import ChartWrraper from "../charts/ChartWrraper";
import CustomBarChart from "../charts/CustomBarChart";
import {
  getAssetsByStatus,
  getTechnologiesOfAssets,
} from "../../../utils/assetAggregators";

const OverviewBarCharts = ({ assets }: { assets: AssetType[] }) => {
  const barStatusData = getAssetsByStatus(assets, [
    "200",
    "301",
    "401",
    "404",
    "500",
  ]);
  const barTechnologyData = getTechnologiesOfAssets(assets, [
    "WordPress",
    "Node.js",
    "PHP",
    "React",
    "MySQL",
  ]);

  const chartItems = [
    {
      title: "تعداد دارایی‌ها بر اساس کد وضعیت",
      barFill: CHART_COLORS.lightBlue,
      chartData: barStatusData,
    },
    {
      title: "بیشترین تکنولوژی‌های استفاده‌شده",
      barFill: CHART_COLORS.yellow,
      chartData: barTechnologyData,
    },
  ];
  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomBarChart
          key={index}
          tooltipContentStyles={{
            backgroundColor: "white",
            borderRadius: "2px",
            color: "white",
            borderColor: item.barFill,
            padding:10,
            borderWidth:2
          }}
          tooltipItemStyles={{
            color: item.barFill,
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
