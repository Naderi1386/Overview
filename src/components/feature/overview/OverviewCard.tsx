const OverviewCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="w-36 text-center bg-gradient-to-br from-[#2f2f2f] to-[#121111] border border-white/10 rounded-xl p-1 hover:shadow-lg transition-all duration-200">
      <p className="text-[13px] text-white/60 mb-1">{label}</p>
      <h3 className="text-white text-sm font-bold">{value}</h3>
    </div>
  );
};

export default OverviewCard;
