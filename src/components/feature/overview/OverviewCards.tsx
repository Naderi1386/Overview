import type { AssetType } from "../../../types/assetType";
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
    <div className="flex items-center justify-around flex-wrap gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 shadow-lg">
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
    </div>
  );
};

export default OverviewCards;
