import { PIE_CHART_COLORS } from "../../../constants/PieChartColors";
import type { AssetType } from "../../../types/assetType";
import CustomPieChart from "./CustomPieChart";

const PieCharts = ({ assets }: { assets: AssetType[] }) => {
  const assetsWithIP = assets.filter(
    (asset) => asset.ipAddresses && asset.ipAddresses.length > 0
  ).length;
  const chartIPData = [
    { name: "Without IP", value: assets.length - assetsWithIP },
    { name: "With IP", value: assetsWithIP },
  ];
  const assetsBtStatus = (val: number) =>
    assets.filter((asset) => asset.status && asset.status === val).length;
  const chartStatusData = [
    { name: "200", value: assetsBtStatus(200) },
    { name: "301", value: assetsBtStatus(301) },
    { name: "401", value: assetsBtStatus(401) },
    { name: "404", value: assetsBtStatus(404) },
    { name: "500", value: assetsBtStatus(500) },
  ];
  const assetsWithUpdateDate = assets.filter(
    (asset) => asset.updateDate
  ).length;
  const chartUpdateDateData = [
    { name: "Updated", value: assetsWithUpdateDate },
    { name: "No Update", value: assets.length - assetsWithUpdateDate },
  ];

  return (
    <div
      className="w-full bg-white/5 rounded-xl py-5 shadow-md border-2 border-white/10 flex flex-wrap justify-around gap-x-4"
      tabIndex={-1}
      style={{ outline: "none" }}
    >
      <CustomPieChart
        title="IP Coverage of Assets"
        colors={[PIE_CHART_COLORS.red, PIE_CHART_COLORS.green]}
        chartData={chartIPData}
      />
      <CustomPieChart
        chartData={chartStatusData}
        title="Response Status Breakdown"
        colors={[
          PIE_CHART_COLORS.green,
          PIE_CHART_COLORS.yellow,
          PIE_CHART_COLORS.purple,
          PIE_CHART_COLORS.lightBlue,
          PIE_CHART_COLORS.red,
        ]}
      />
      <CustomPieChart
        chartData={chartUpdateDateData}
        title="Asset Update Coverage"
        colors={[PIE_CHART_COLORS.green, PIE_CHART_COLORS.red]}
      />
    </div>
  );
};

export default PieCharts;
