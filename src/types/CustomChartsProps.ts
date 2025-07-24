import type { CSSProperties } from "react";

export type CustomPieChartProps = {
  chartData: { label: string; value: number }[];
  colors: string[];
  title: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  handleNavigate?: (name: string) => void;
};

export type CustomBarChartProps = {
  chartData: { label: string; value: number }[];
  title: string;
  barFill: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  handleNavigate?: (name: string) => void;
};

export type CustomTreeMapProps = {
  title: string;
  chartData: { label: string; value: number }[];
  fill: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  contentLabel: string;
};
export type CustomAreaChartProps = {
  title: string;
  chartData: { label: string; value: number }[];
  colors: string[];
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  interval?: number;
};
