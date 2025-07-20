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

export const getAssetsWithAndWithoutIP = (asset: AssetType[]) => {
  const assetWithIP = asset.filter((asset) => asset.ipAddresses?.length).length;
  const assetWithoutIP = asset.length - assetWithIP;
  return [
    { name: "Without IP", value: assetWithoutIP },
    { name: "With IP", value: assetWithIP },
  ];
};

export const getAssetsByStatus = (assets: AssetType[], status: string[]) => {
  const results = status.map((status) => ({
    name: status,
    value: assets.filter((asset) => asset.status === Number(status)).length,
  }));
  return results;
};

export const getAssetsWithAndWithoutUpdateDate = (assets: AssetType[]) => {
  const assetWithUpdate = assets.filter((asset) => asset.updateDate).length;
  const assetsWithoutUpdate = assets.length - assetWithUpdate;
  return [
    { name: "updated", value: assetWithUpdate },
    { name: "No Update", value: assetsWithoutUpdate },
  ];
};
