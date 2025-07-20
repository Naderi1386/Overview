import { format } from "date-fns";
import type { AssetType } from "../types/assetType";

export const groupAssetsByCreateMonth = (assets: AssetType[]) => {
  const groupAssets: Record<string, number> = {};
  if (!assets.length) return [];
  assets.forEach((asset) => {
    if (!asset.createdDate) return;
    const monthKey = format(new Date(asset.createdDate), "yyyy-MM");
    if (!groupAssets[monthKey]) groupAssets[monthKey] = 1;
    else groupAssets[monthKey]++;
  });
  return Object.entries(groupAssets).map(([date, count]) => ({
    label: date,
    count,
  }));
};

export const groupAssetsByUpdateMonth = (assets: AssetType[]) => {
  const groupAssets: Record<string, number> = {};
  if (!assets.length) return [];
  assets.forEach((asset) => {
    if (!asset.updateDate) return;
    const monthKey = format(new Date(asset.updateDate), "yyyy-MM");
    if (!groupAssets[monthKey]) groupAssets[monthKey] = 1;
    else groupAssets[monthKey]++;
  });
  return Object.entries(groupAssets).map(([date, count]) => ({
    label: date,
    count,
  }));
};

export const getIPCountPerDomain = (assets: AssetType[]) => {
  if (!assets.length) return [];

  const domainIPMap: Record<string, number> = {};

  assets.forEach((asset) => {
    if (!asset.ipAddresses) return;

    domainIPMap[asset.domain] = asset.ipAddresses.length;
  });

  return Object.entries(domainIPMap).map(([label, count]) => ({
    label,
    count,
  }));
};
