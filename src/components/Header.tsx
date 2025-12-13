import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ActionsPopup from "./ActionsPopup";
import useTheme from "../hooks/use-Theme";

const Header = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    );
  };

  return (
    <div>
      <header className="bg-white text-zinc-800 shadow dark:bg-zinc-800 dark:text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1
            className="text-3xl font-bold hover:text-blue-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            SCHOOL MIS
          </h1>
          <div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-blue-400 cursor-pointer"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="hover:text-blue-400 cursor-pointer"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="hover:text-blue-400 cursor-pointer"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <div className="group relative">
                    <h2 className="hover:text-blue-400 cursor-pointer">
                      Actions
                    </h2>
                    <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-400 absolute end-1/6 top-6 z-10 shadow-xl bg-white border-3 border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 rounded-md p-3">
                      <ActionsPopup />
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <button
                      onClick={toggleTheme}
                      className="p-1 rounded bg-transparent hover:bg-blue-600 transition"
                    >
                      {theme === "dark"
                        ? "🌙"
                        : theme === "light"
                        ? "☀️"
                        : "💻"}
                    </button>
                  </div>
                </li>

                {true ? (
                  <>
                    <li>
                      <NavLink
                        to="/auth/login"
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/auth/register"
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/settings"
                        className="hover:text-blue-400 cursor-pointer"
                      >
                        {/* {user.user?.lastName ??
                          user.user?.firstName ??
                          user.user?.unique_name} */}
                        username
                      </NavLink>
                    </li>
                    <li>
                      <h2
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={() => {
                          //logout();
                          navigate("/auth/login");
                        }}
                      >
                        Logout
                      </h2>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
