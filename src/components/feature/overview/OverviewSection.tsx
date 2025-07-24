import { useSearchParams } from "react-router-dom";
import type { ChartsType } from "../../../types/ChartsType";
import type { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OverviewPieCharts from "./OverviewPieCharts";
import OverviewBarCharts from "./OverviewBarCharts";
import OverviewTreeMap from "./OverviewTreeMap";
import OverviewAreaCharts from "./OverviewAreaCharts";
import { assets } from "../../../constants/assetsData";
import OverviewHeader from "./OverviewHeader";
import OverviewChartsTab from "./OverviewChartsTab";
import OverviewCards from "./OverviewCards";

const OverviewSection = () => {
  const [searchParams] = useSearchParams();
  const chartType = searchParams.get("chartType") as ChartsType;
  // I gave assets to the charts components as a prop to imagine that they are comming from an API
  const chartsSections: Record<ChartsType, JSX.Element> = {
    pie: <OverviewPieCharts assets={assets} />,
    bar: <OverviewBarCharts assets={assets} />,
    treemap: <OverviewTreeMap assets={assets} />,
    area: <OverviewAreaCharts assets={assets} />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 150, duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <OverviewHeader />
        <OverviewChartsTab />
      </div>
      <div className="mt-8">
        <OverviewCards assets={assets} />
      </div>
      <div className="mt-16 px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={chartType}
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {chartsSections[chartType] ?? chartsSections.pie}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
