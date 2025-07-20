import { PieChart, BarChart3, GitBranch, LineChart } from "lucide-react";
import { cloneElement } from "react";
import { useSearchParams } from "react-router-dom";
const chartItems = [
  {
    label: "Distribution",
    icon: <PieChart className="w-6 h-8 text-primary " />,
    key: "pie",
  },
  {
    label: "Comparison",
    icon: <BarChart3 className="w-6 h-8 text-sky" />,
    key: "bar",
  },
  {
    label: "Structure",
    icon: <GitBranch className="w-6 h-8 text-green" />,
    key: "treemap",
  },
  {
    label: "Trends",
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
    <div className="tabs tabs-box rounded-xl p-1.5 bg-black/30 border border-white/10">
      {chartItems.map((item) => {
        const isActive = item.key === chartType;
        const animatedIcon = cloneElement(item.icon, {
          classNames: `transition-all duration-75 ${isActive && "rotate-90"} `,
        });
        return (
          <div
            onClick={() => handleClick(item.key)}
            key={item.key}
            className={`tab flex items-center gap-3 ${
              isActive && "bg-primary-20 !rounded-xl !text-white"
            }`}
          >
            <span className="font-semibold">{item.label}</span>
            {animatedIcon}
          </div>
        );
      })}
    </div>
  );
};

export default OverviewChartsTab;
