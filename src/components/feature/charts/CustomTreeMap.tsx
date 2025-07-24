import { ResponsiveContainer, Tooltip, Treemap } from "recharts";
import type { CSSProperties } from "react";
import CustomContentTreemap from "./CustomContentTreemap";

const CustomTreeMap = ({
  title,
  chartData,
  fill,
  tooltipContentStyles,
  tooltipItemStyles,
  contentLabel,
}: {
  title: string;
  chartData: { label: string; value: number }[];
  fill: string;
  tooltipContentStyles: CSSProperties;
  tooltipItemStyles: CSSProperties;
  contentLabel: string;
}) => {
  return (
    <div className="w-[45%] h-[300px] pb-4">
      <h3 className="text-white text-base font-semibold mb-2.5 text-center">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
        
          data={chartData}
          dataKey="value"
          nameKey="label"
          stroke={"black"}
          fill={fill}
          content={(props) => (
            <CustomContentTreemap
              {...props}
              fill={fill}
              contentLabel={contentLabel}
            />
          )}
        >
          <Tooltip
            contentStyle={tooltipContentStyles}
            labelStyle={{ color: "white" }}
            itemStyle={tooltipItemStyles}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomTreeMap;
