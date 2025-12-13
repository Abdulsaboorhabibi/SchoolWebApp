import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
