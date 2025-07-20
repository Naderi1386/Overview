import OverviewCards from "../components/feature/overview/OverviewCards";
import OverviewChartsTab from "../components/feature/overview/OverviewChartsTab";
import OverviewHeader from "../components/feature/overview/OverviewHeader";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "../constants/assetsData";
import OverviewPieCharts from "../components/feature/overview/OverviewPieCharts";
import OverviewTreeMap from "../components/feature/overview/OverviewTreeMap";
import { useSearchParams } from "react-router-dom";
import type { ChartsType } from "../types/ChartsType";
import type { JSX } from "react";
import OverviewBarCharts from "../components/feature/overview/OverviewBarCharts";
import OverviewAreaChart from "../components/feature/overview/OverviewAreaChart";
const Overview = () => {
  const [searchParams] = useSearchParams();
  const chartType = searchParams.get("chartType") as ChartsType;
  // I gave assets to the charts components as a prop to imagine that they are comming from an API
  const chartsSections: Record<ChartsType, JSX.Element> = {
    pie: <OverviewPieCharts assets={assets} />,
    bar: <OverviewBarCharts assets={assets} />,
    treemap: <OverviewTreeMap />,
    line: <OverviewAreaChart assets={assets} />,
  };
  return (
    <section className="px-20 pb-32 pt-10">
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
    </section>
  );
};

export default Overview;
