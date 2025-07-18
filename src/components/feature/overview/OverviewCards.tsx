import { assets } from "../../../constants/assetsData";
import OverviewCard from "./OverviewCard";

const OverviewCards = () => {
  const totalAssets = String(assets.length);
  return (
    <div className="flex items-center justify-between border-t border-white/10 pt-3">
      <OverviewCard label="Total Assets" value={totalAssets} />
      <OverviewCard label="Unique Domains" value="50" />
      <OverviewCard label="Open Ports" value="50" />
      <OverviewCard label="Assets with CNAME" value="50" />
      <OverviewCard label="Average Update Age" value="50" />
    </div>
  );
};

export default OverviewCards;
