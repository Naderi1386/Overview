import type { AssetType } from "../../../types/assetType";
import ChartWrraper from "../charts/ChartWrraper";
import { CHART_COLORS } from "../../../constants/chartColors";
import {
  groupAssetsByCreateMonth,
  groupAssetsByUpdateMonth,
} from "../../../utils/assetAggregators";
import CustomAreaChart from "../charts/CustomAreaChart";

const OverviewAreaCharts = ({ assets }: { assets: AssetType[] }) => {
  const chartCreateData = groupAssetsByCreateMonth(assets);
  const chartUpdateData = groupAssetsByUpdateMonth(assets);
  const chartItems = [
    {
      title: "روند ایجاد دارایی‌ها در طول زمان",
      chartData: chartCreateData,
      colors: [CHART_COLORS.lightBlue, CHART_COLORS.lightBlue],
    },
    {
      title: "فعالیت به‌روزرسانی دارایی‌ها در طول زمان",
      chartData: chartUpdateData,
      colors: [CHART_COLORS.yellow, CHART_COLORS.yellow],
    },
  ];
  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomAreaChart
          key={index}
          tooltipItemStyles={{
            color: "black",
            fontWeight: "bold",
            fontSize: 14,
          }}
          tooltipContentStyles={{
            backgroundColor: "white",
            borderRadius: "45px",
            color: "white",
            padding: 10,
          }}
          title={item.title}
          chartData={item.chartData}
          colors={item.colors}
        />
      ))}
    </ChartWrraper>
  );
};

export default OverviewAreaCharts;
