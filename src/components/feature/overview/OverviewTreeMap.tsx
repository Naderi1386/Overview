import ChartWrraper from "../charts/ChartWrraper";
import type { AssetType } from "../../../types/assetType";
import { getIPCountPerDomain } from "../../../utils/assetAggregators";
import { CHART_COLORS } from "../../../constants/chartColors";
import CustomTreeMap from "../charts/CustomTreeMap";

const OverviewTreeMap = ({ assets }: { assets: AssetType[] }) => {
  const chartIPData = getIPCountPerDomain(assets);
  return (
    <ChartWrraper>
      <CustomTreeMap
        tooltipItemStyles={{
          color: CHART_COLORS.purple,
          fontWeight: "bold",
          fontSize: 14,
        }}
        tooltipContentStyles={{
          backgroundColor: "white",
          borderRadius: "2px",
          color: "white",
        }}
        title="IP Count per Domain"
        chartData={chartIPData}
        fill={CHART_COLORS.purple}
      />
    </ChartWrraper>
  );
};

export default OverviewTreeMap;
