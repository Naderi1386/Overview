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
    { label: "Without IP", value: assetWithoutIP },
    { label: "With IP", value: assetWithIP },
  ];
};

export const getAssetsByStatus = (assets: AssetType[], status: string[]) => {
  const results = status.map((status) => ({
    label: status,
    value: assets.filter(
      (asset) => asset.status && asset.status === Number(status)
    ).length,
  }));
  return results;
};

export const getAssetsWithAndWithoutUpdateDate = (assets: AssetType[]) => {
  const assetWithUpdate = assets.filter((asset) => asset.updateDate).length;
  const assetsWithoutUpdate = assets.length - assetWithUpdate;
  return [
    { label: "updated", value: assetWithUpdate },
    { label: "No Update", value: assetsWithoutUpdate },
  ];
};

export const getAssetsWithSingleAndMultipleIP = (assets: AssetType[]) => {
  const assetsWithSignleIP = assets.filter(
    (asset) => asset.ipAddresses && asset.ipAddresses?.length === 1
  ).length;
  const assetsWithMultipleIP = assets.filter(
    (asset) => asset.ipAddresses && asset.ipAddresses?.length > 1
  ).length;
  return [
    {
      label: "No IP",
      value: assets.length - assetsWithMultipleIP - assetsWithSignleIP,
    },
    { label: "1 IP", value: assetsWithSignleIP },
    { label: "Multiple IPs", value: assetsWithMultipleIP },
  ];
};

export const getPortCountPerDomain = (assets: AssetType[]) => {
  const groupDomains: Record<string, number> = {};
  if (!assets.length) return [];
  assets.forEach((asset) => {
    if (!asset.ports) return;
    groupDomains[asset.domain] = asset.ports;
  });
  return Object.entries(groupDomains).map(([label, count]) => ({
    label,
    count,
  }));
};

export const getUniqueDomains = (assets: AssetType[]) => {
  return String(new Set(assets.map((asset) => asset.domain)).size);
};

export const getTotalPorts = (assets: AssetType[]) => {
  return String(
    assets
      .map((asset) => (asset.ports ? asset.ports : 0))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
};

export const getAssetsWithCNAME = (assets: AssetType[]) => {
  return String(assets.filter((asset) => asset.cname).length);
};

export const getAssetsWithIP = (assets: AssetType[]) => {
  return String(assets.filter((asset) => asset.ipAddresses?.length).length);
};
