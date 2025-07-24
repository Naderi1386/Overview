import OverviewSection from "../components/feature/overview/OverviewSection";
const Overview = () => {
  return (
    <section className="px-20 pb-32 pt-10 relative">
      <div className="absolute inset-0 m-auto w-[50rem] h-[35rem] rounded-[100%] bg-white/5 blur-3xl"></div>
      <OverviewSection />
    </section>
  );
};

export default Overview;
