import { LayoutDashboard } from "lucide-react";

const OverviewHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold mb-2">Comprehensive Overview</h1>
        <LayoutDashboard className="w-6 h-6 text-primary" />
      </div>
      <p className="text-white/60 font-medium">
        A brief overview of assets and key charts.
      </p>
    </div>
  );
};

export default OverviewHeader;
