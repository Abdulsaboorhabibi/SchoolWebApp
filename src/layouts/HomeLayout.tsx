import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col ">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
