import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {
  let loading: boolean = true;

  useEffect(() => {
    const refrestToken = async () => {
      loading = false;
    };

    refrestToken();
  }, []);

  if (loading) <p>Loading...</p>;

  return (
    <div className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white overflow-clip">
      <Outlet />
    </div>
  );
};

export default MainLayout;
