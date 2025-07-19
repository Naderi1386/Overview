import OverviewCards from "../components/feature/overview/OverviewCards";
import OverviewChartsTab from "../components/feature/overview/OverviewChartsTab";
import OverviewHeader from "../components/feature/overview/OverviewHeader";
import { motion } from "framer-motion";
import { assets } from "../constants/assetsData";
import PieCharts from "../components/feature/overview/PieCharts";
const Overview = () => {
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
          <PieCharts assets={assets} />
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
