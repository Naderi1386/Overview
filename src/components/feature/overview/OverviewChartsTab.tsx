import { PieChart, BarChart3, GitBranch, LineChart } from "lucide-react";
import { cloneElement } from "react";
import { useSearchParams } from "react-router-dom";
import OverviewChartTabItems from "./OverviewChartTabItems";
const chartItems = [
  {
    label: "توزیع",
    icon: <PieChart className="w-6 h-8 text-primary " />,
    key: "pie",
  },
  {
    label: "مقایسه",
    icon: <BarChart3 className="w-6 h-8 text-sky" />,
    key: "bar",
  },
  {
    label: "ساختار",
    icon: <GitBranch className="w-6 h-8 text-green" />,
    key: "treemap",
  },
  {
    label: "روندها",
    icon: <LineChart className="w-6 h-8 text-red" />,
    key: "area",
  },
];

const OverviewChartsTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const chartType = searchParams.get("chartType") || "pie";
  const handleClick = (key: string) => {
    if (chartType !== key) {
      searchParams.set("chartType", key);
      setSearchParams(searchParams);
    }
  };
  return (
    <div className="tabs tabs-box rounded-xl p-1.5 bg-black/30 border border-white/10 ">
      {chartItems.map((item) => {
        const isActive = item.key === chartType;
        const animatedIcon = cloneElement(item.icon, {
          className: `${
            item.icon.props.className
          } transition-all duration-500 ${isActive && "rotate-[360deg]"} `,
        });
        return (
          <OverviewChartTabItems
            item={item}
            key={item.key}
            isActive={isActive}
            animatedIcon={animatedIcon}
            handleClick={() => handleClick(item.key)}
          />
        );
      })}
    </div>
  );
};

export default OverviewChartsTab;
