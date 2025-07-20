import ChartWrraper from "../charts/ChartWrraper";
import type { AssetType } from "../../../types/assetType";
import {
  getIPCountPerDomain,
  getPortCountPerDomain,
} from "../../../utils/assetAggregators";
import { CHART_COLORS } from "../../../constants/chartColors";
import CustomTreeMap from "../charts/CustomTreeMap";

const OverviewTreeMap = ({ assets }: { assets: AssetType[] }) => {
  const chartIPData = getIPCountPerDomain(assets);
  const chartPortsData = getPortCountPerDomain(assets);
  console.log(chartPortsData);
  const chartData = [
    {
      chartData: chartIPData,
      title: "IP Count per Domain",
      fill: CHART_COLORS.lightBlue,
      contentLabel: "IP",
    },
    {
      chartData: chartPortsData,
      title: "Port Count Distribution by Domain",
      fill: CHART_COLORS.yellow,
      contentLabel: "Ports",
    },
  ];
  return (
    <ChartWrraper>
      {chartData.map((item, index) => (
        <CustomTreeMap
          contentLabel={item.contentLabel}
          key={index}
          tooltipItemStyles={{
            color: item.fill,
            fontWeight: "bold",
            fontSize: 14,
          }}
          tooltipContentStyles={{
            backgroundColor: "white",
            borderRadius: "2px",
            color: "white",
          }}
          title={item.title}
          chartData={item.chartData}
          fill={item.fill}
        />
      ))}
    </ChartWrraper>
  );
};

export default OverviewTreeMap;
