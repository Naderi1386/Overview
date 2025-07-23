import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="text-center pt-36">
        <h1 className="text-3xl font-bold mb-6">صفحه مورد نظر یافت نشد 🙁</h1>
        <span
          onClick={() => navigate(-1)}
          role="button"
          className="text-white underline text-sm font-semibold cursor-pointer"
        >
          بازگشت
        </span>
      </div>
    </section>
  );
};

export default NoMatch;
