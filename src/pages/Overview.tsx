import OverviewCards from "../components/feature/overview/OverviewCards";
import OverviewHeader from "../components/feature/overview/OverviewHeader";

const Overview = () => {
  return (
    <section className="px-20 py-32">
      <div className="flex items-center justify-between">
        <OverviewHeader />
      </div>
      <div className="mt-14">
        <OverviewCards />
      </div>
    </section>
  );
}

export default Overview