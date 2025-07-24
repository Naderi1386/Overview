import type { CSSProperties } from "react";

const CustomTooltipContent = ({
  label,
  value,
  tooltipContentStyles,
  tooltipItemStyles,
}: {
  label: string;
  value: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
}) => {
  return (
    <div style={tooltipContentStyles}>
      <span style={{ color: "black", fontSize: 14, fontWeight: "bold" }}>
        {label}:
      </span>
      <span style={tooltipItemStyles}> {value}</span>
    </div>
  );
};

export default CustomTooltipContent;
