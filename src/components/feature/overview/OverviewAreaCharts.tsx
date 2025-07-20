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
  return (
    <ChartWrraper>
      <CustomAreaChart
        title="Asset Creation Trend Over Time"
        chartData={chartCreateData}
        colors={[CHART_COLORS.lightBlue, CHART_COLORS.lightBlue]}
      />
      <CustomAreaChart
        title=" Asset Update Activity Over Time"
        chartData={chartUpdateData}
        colors={[CHART_COLORS.yellow, CHART_COLORS.yellow]}
      />
    </ChartWrraper>
  );
};

export default OverviewAreaCharts;
