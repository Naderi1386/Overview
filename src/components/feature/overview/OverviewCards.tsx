import type { AssetType } from "../../../types/assetType";
import {
  getAssetsWithCNAME,
  getAssetsWithIP,
  getTotalPorts,
  getUniqueDomains,
} from "../../../utils/assetAggregators";
import OverviewCard from "./OverviewCard";

const OverviewCards = ({ assets }: { assets: AssetType[] }) => {
  return (
    <div className="flex items-center justify-around bg-black/30 border border-white/10 rounded-xl p-1">
      <OverviewCard label="مجموع دارایی‌ها" value={String(assets.length)} />
      <OverviewCard label="دامنه‌های یکتا" value={getUniqueDomains(assets)} />
      <OverviewCard label="پورت‌ها" value={getTotalPorts(assets)} />
      <OverviewCard
        label="دارایی‌ها با CNAME"
        value={getAssetsWithCNAME(assets)}
      />
      <OverviewCard label="دارایی‌ها بدون IP" value={getAssetsWithIP(assets)} />
    </div>
  );
};

export default OverviewCards;
