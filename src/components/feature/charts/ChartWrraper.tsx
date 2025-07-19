import type { ReactNode } from "react";

const ChartWrraper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white/5 rounded-xl py-10 shadow-md border-2 border-white/10 flex flex-wrap justify-around gap-x-4">
      {children}
    </div>
  );
};

export default ChartWrraper;
