import type { AssetType } from "../../../types/assetType";
import OverviewCard from "./OverviewCard";

const OverviewCards = ({ assets }: { assets: AssetType[] }) => {
  const totalAssets = String(assets.length);
  const uniqueDomains = String(
    new Set(assets.map((asset) => asset.domain)).size
  );
  const ports = String(
    assets
      .map((asset) => (asset.ports ? asset.ports : 0))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  const assetsWithCNAME = String(assets.filter((asset) => asset.cname).length);
  const assetsWithIP = String(
    assets.filter((asset) => asset.ipAddresses?.length).length
  );

  return (
    <div className="flex items-center justify-around bg-black/30 border border-white/10 rounded-xl p-1">
      <OverviewCard label="مجموع دارایی‌ها" value={totalAssets} />
      <OverviewCard label="دامنه‌های یکتا" value={uniqueDomains} />
      <OverviewCard label="پورت‌ها" value={ports} />
      <OverviewCard label="دارایی‌ها با CNAME" value={assetsWithCNAME} />
      <OverviewCard label="دارایی‌ها بدون IP" value={assetsWithIP} />
    </div>
  );
};

export default OverviewCards;
