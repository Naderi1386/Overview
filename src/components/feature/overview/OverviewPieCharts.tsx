import { useNavigate } from "react-router-dom";
import { CHART_COLORS } from "../../../constants/chartColors";
import type { AssetType } from "../../../types/assetType";
import {
  getAssetsByStatus,
  getAssetsWithAndWithoutIP,
  getAssetsWithAndWithoutUpdateDate,
} from "../../../utils/assetAggregators";
import ChartWrraper from "../charts/ChartWrraper";
import CustomPieChart from "../charts/CustomPieChart";
const OverviewPieCharts = ({ assets }: { assets: AssetType[] }) => {
  const navigate = useNavigate();
  const chartIPData = getAssetsWithAndWithoutIP(assets);
  const chartStatusData = getAssetsByStatus(assets, [
    "200",
    "301",
    "401",
    "404",
    "500",
  ]);
  const chartUpdateDateData = getAssetsWithAndWithoutUpdateDate(assets);
  const chartItems = [
    {
      title: "بررسی وجود آی پی در دارایی ها",
      colors: [CHART_COLORS.yellow, CHART_COLORS.lightBlue],
      chartData: chartIPData,
      filterBaseURL: "/assets?filterBy=",
    },
    {
      title: "تفکیک وضعیت پاسخ",
      colors: [
        CHART_COLORS.lightBlue,
        CHART_COLORS.purple,
        CHART_COLORS.cyan,
        CHART_COLORS.yellow,
        CHART_COLORS.orange,
      ],
      chartData: chartStatusData,
      filterBaseURL: "/assets?filterBy=status&value=",
    },
    {
      title: "پوشش به‌روزرسانی دارایی‌ها",
      colors: [CHART_COLORS.lightBlue, CHART_COLORS.yellow],
      chartData: chartUpdateDateData,
      filterBaseURL: "/assets?filterBy=",
    },
  ];
  return (
    <ChartWrraper>
      {chartItems.map((item, index) => (
        <CustomPieChart
          handleNavigate={(name) => navigate(`${item.filterBaseURL}${name}`)}
          tooltipItemStyles={{
            color: "black",
            fontWeight: "bold",
            fontSize: 12,
          }}
          tooltipContentStyles={{
            backgroundColor: "white",
            borderRadius: "45px",
            color: "white",
            padding: 10,
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
