import { LayoutDashboard } from "lucide-react";

const OverviewHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <LayoutDashboard className="w-6 h-6 text-primary" />
        <h1 className="text-3xl text-white font-bold mb-2">بررسی جامع</h1>
      </div>
      <p className="text-white/60 font-medium">
        مروری مختصر بر دارایی‌ها و نمودارهای کلیدی.
      </p>
    </div>
  );
};

export default OverviewHeader;
