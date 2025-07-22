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
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: fill,
          stroke: "whitesmoke",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 7}
            textAnchor="middle"
            fill="#000"
            fontSize={12}
            dominantBaseline="central"
          >
            {label}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 9}
            textAnchor="middle"
            fill="#555"
            fontSize={11}
            dominantBaseline="central"
          >
            {contentLabel}: {value}
          </text>
        </>
      ) : null}
    </g>
  );
};

export default CustomContentTreemap;
