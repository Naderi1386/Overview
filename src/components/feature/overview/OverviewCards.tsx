import type { AssetType } from "../../../types/assetType";
import OverviewCard from "./OverviewCard";

const OverviewCards = ({assets}:{assets:AssetType[]}) => {
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
      <OverviewCard label="Total Assets" value={totalAssets} />
      <OverviewCard label="Unique Domains" value={uniqueDomains} />
      <OverviewCard label="Ports" value={ports} />
      <OverviewCard label="Assets with CNAME" value={assetsWithCNAME} />
      <OverviewCard label="Assets Without IP" value={assetsWithIP} />
    </div>
  );
};

export default OverviewCards;
