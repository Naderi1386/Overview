import type { AssetType } from "../../../types/assetType";
import { motion } from "framer-motion";
import {
  getAssetsWithCNAME,
  getAssetsWithIP,
  getMostUsedTechnology,
  getTotalPorts,
  getUniqueDomains,
} from "../../../utils/assetAggregators";
import OverviewCard from "./OverviewCard";

const OverviewCards = ({ assets }: { assets: AssetType[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeIn", delay: 0.05 }}
      whileHover={{
        boxShadow: "0 0 20px rgba(255,255,255,0.15)",
      }}
      className="flex items-center justify-around flex-wrap gap-4 backdrop-blur-md border-2 border-white/10 rounded-xl p-3 shadow-lg"
    >
      <OverviewCard label="مجموع دارایی‌ها" value={String(assets.length)} />
      <OverviewCard label="دامنه‌های یکتا" value={getUniqueDomains(assets)} />
      <OverviewCard label="پورت‌ها" value={getTotalPorts(assets)} />
      <OverviewCard
        label="دارایی‌ها با CNAME"
        value={getAssetsWithCNAME(assets)}
      />
      <OverviewCard label="دارایی‌ها بدون IP" value={getAssetsWithIP(assets)} />
      <OverviewCard
        label="پرکاربردترین فناوری"
        value={getMostUsedTechnology(assets)}
      />
    </motion.div>
  );
};

export default OverviewCards;
