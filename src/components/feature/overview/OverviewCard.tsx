const OverviewCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="py-2 px-4 bg-black/10">
      <div className="text-center">
        <h2 className="font-medium text-white/60 text-md mb-1.5">{label}</h2>
        <p className="font-bold text-2xl">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
