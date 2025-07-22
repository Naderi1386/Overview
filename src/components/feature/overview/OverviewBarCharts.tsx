import type { AssetType } from "../../../types/assetType";
import { CHART_COLORS } from "../../../constants/chartColors";
import ChartWrraper from "../charts/ChartWrraper";
import CustomBarChart from "../charts/CustomBarChart";
import {
  getAssetsByStatus,
  getTechnologiesOfAssets,
} from "../../../utils/assetAggregators";
import { useNavigate } from "react-router-dom";

const OverviewBarCharts = ({ assets }: { assets: AssetType[] }) => {
  const navigate = useNavigate();
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
      filterBaseURL: "/assets?filterBy=status&value=",
    },
    {
      title: "بیشترین تکنولوژی‌های استفاده‌شده",
      barFill: CHART_COLORS.yellow,
      chartData: barTechnologyData,
      filterBaseURL: "/assets?filterBy=technology&value=",
    },
  ];
  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomBarChart
          handleNavigate={(name) => navigate(`${item.filterBaseURL}${name}`)}
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
          barFill={item.barFill}
          chartData={item.chartData}
        />
      ))}
    </ChartWrraper>
  );
};

export default OverviewBarCharts;
