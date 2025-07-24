import type { JSX } from "react";

const OverviewChartTabItems = ({
  item,
  handleClick,
  isActive,
  animatedIcon,
}: {
  item: {
    label: string;
    icon: JSX.Element;
    key: string;
  };
  handleClick: () => void;
  isActive: boolean;
  animatedIcon: JSX.Element;
}) => {
  return (
    <div
      onClick={handleClick}
      key={item.key}
      className={`tab flex items-center gap-3 ${
        isActive ? "bg-primary-20 !rounded-xl !text-white !border-2 !border-solid !border-primary" : "text-white/60"
      }`}
    >
      <span className="font-bold">{item.label}</span>
      {animatedIcon}
    </div>
  );
};

export default OverviewChartTabItems;
