import { format } from "date-fns";
import type { AssetType } from "../types/assetType";

export const groupAssetsByCreatedMonth = (assets: AssetType[]) => {
  const groupAssets: Record<string, number> = {};
  if (!assets.length) return;
  assets.forEach((asset) => {
    if (!asset.createdDate) return;
    const monthKey = format(new Date(asset.createdDate), "yyyy-MM");
    if (!groupAssets[monthKey]) groupAssets[monthKey] = 1;
    else groupAssets[monthKey]++;
  });
  return Object.entries(groupAssets).map(([date, count]) => ({
    label: date,
    value: count,
  }));
};
