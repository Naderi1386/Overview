import type { AssetType } from "../../../types/assetType";
import { CHART_COLORS } from "../../../constants/chartColors";
import ChartWrraper from "../charts/ChartWrraper";
import CustomBarChart from "../charts/CustomBarChart";

const OverviewBarCharts = ({ assets }: { assets: AssetType[] }) => {
  const assetsByStatus = (val: number) =>
    assets.filter((asset) => asset.status && asset.status === val).length;

  const barStatusData = [
    { label: "200", count: assetsByStatus(200) },
    { label: "301", count: assetsByStatus(301) },
    { label: "401", count: assetsByStatus(401) },
    { label: "404", count: assetsByStatus(404) },
    { label: "500", count: assetsByStatus(500) },
  ];

  const assetsWithSingleIP = assets.filter(
    (asset) => asset.ipAddresses?.length === 1
  ).length;

  const assetsWithMulIP = assets.filter(
    (asset) => asset.ipAddresses && asset.ipAddresses.length > 1
  ).length;

  const assetsWithoutIP = assets.filter(
    (asset) => !asset.ipAddresses || asset.ipAddresses.length === 0
  ).length;

  const barIPData = [
    { label: "No IP", count: assetsWithoutIP },
    { label: "1 IP", count: assetsWithSingleIP },
    { label: "Multiple IPs", count: assetsWithMulIP },
  ];

  return (
    <ChartWrraper>
      <CustomBarChart
        tooltipContentStyles={{
          backgroundColor: CHART_COLORS.darkBlue,
          borderRadius: "2px",
          color: "white",
        }}
        tooltipItemStyles={{ color: "white", fontWeight: "bold", fontSize: 14 }}
        title="Asset Count by Status Code"
        barFill={CHART_COLORS.lightBlue}
        chartData={barStatusData}
      />
      <CustomBarChart
        tooltipContentStyles={{
          backgroundColor: CHART_COLORS.darkBlue,
          borderRadius: "2px",
          color: "white",
        }}
        tooltipItemStyles={{ color: "white", fontWeight: "bold", fontSize: 14 }}
        title=" Asset Distribution by IP Count"
        barFill={CHART_COLORS.yellow}
        chartData={barIPData}
      />
    </ChartWrraper>
  );
};

export default OverviewBarCharts;
