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
  const chartData = [
    {
      chartData: chartIPData,
      title: "تعداد IP به ازای هر دامنه",
      fill: CHART_COLORS.lightBlue,
      contentLabel: "IP",
    },
    {
      chartData: chartPortsData,
      title: "توزیع تعداد پورت‌ها بر اساس دامنه",
      fill: CHART_COLORS.yellow,
      contentLabel: "پورت‌ها",
    },
  ];
  return (
    <ChartWrraper>
      {chartData.map((item, index) => (
        <CustomTreeMap
          contentLabel={item.contentLabel}
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
          fill={item.fill}
        />
      ))}
    </ChartWrraper>
  );
};

export default OverviewTreeMap;
