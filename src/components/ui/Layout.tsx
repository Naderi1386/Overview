import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <main className="min-h-screen text-white bg-onyx">
      <Outlet />
    </main>
  );
}

export default Layout