import { CHART_COLORS } from "../../../constants/chartColors";
import type { AssetType } from "../../../types/assetType";
import ChartWrraper from "../charts/ChartWrraper";
import CustomPieChart from "../charts/CustomPieChart";

const OverviewPieCharts = ({ assets }: { assets: AssetType[] }) => {
  const assetsWithIP = assets.filter(
    (asset) => asset.ipAddresses && asset.ipAddresses.length > 0
  ).length;
  const chartIPData = [
    { name: "Without IP", value: assets.length - assetsWithIP },
    { name: "With IP", value: assetsWithIP },
  ];
  const assetsByStatus = (val: number) =>
    assets.filter((asset) => asset.status && asset.status === val).length;
  const chartStatusData = [
    { name: "200", value: assetsByStatus(200) },
    { name: "301", value: assetsByStatus(301) },
    { name: "401", value: assetsByStatus(401) },
    { name: "404", value: assetsByStatus(404) },
    { name: "500", value: assetsByStatus(500) },
  ];
  const assetsWithUpdateDate = assets.filter(
    (asset) => asset.updateDate
  ).length;
  const chartUpdateDateData = [
    { name: "Updated", value: assetsWithUpdateDate },
    { name: "No Update", value: assets.length - assetsWithUpdateDate },
  ];
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
