const OverviewCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className=" py-2 px-4 items-start">
      <div>
        <h2 className="font-medium text-white/60 text-lg mb-2">{label}</h2>
        <p className="font-bold text-3xl">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
