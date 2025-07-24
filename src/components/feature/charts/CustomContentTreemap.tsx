import type { TreemapNode } from "recharts/types/chart/Treemap";

const CustomContentTreemap = ({
  depth,
  x,
  y,
  width,
  height,
  label,
  value,
  fill,
  contentLabel,
}: TreemapNode & {
  label?: string;
  count?: number;
  fill: string;
  contentLabel: string;
}) => {
  return (
    <g>
      <rect
        strokeWidth={0.5}
        fillOpacity={0.8}
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: fill,
          stroke: "white",
          strokeWidth: 2,
          strokeOpacity: 0.3,
        }}
      />
      {depth === 1 ? (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 6}
            textAnchor="middle"
            fill="#000"
            fontSize={10} 
            dominantBaseline="central"
            opacity={0.8}
          >
            {label}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#555"
            fontSize={9} 
            dominantBaseline="central"
            opacity={0.8}
          >
            {contentLabel}: {value}
          </text>
        </>
      ) : null}
    </g>
  );
};

export default CustomContentTreemap;
