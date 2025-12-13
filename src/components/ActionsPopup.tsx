import { useNavigate } from "react-router-dom";

const ActionsPopup = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row gap-8">
        <ul className="space-y-2 flex-1 w-full min-w-[150px]">
          <li
            onClick={() => navigate("/projects")}
            className=" w-full cursor-pointer hover:text-blue-600 px-2 py-1 rounded transition"
          >
            Salaries
          </li>
          <li>
            <a
              href="/users"
              className=" w-full hover:text-blue-600 px-2 py-1 rounded transition"
            >
              Safe
            </a>
          </li>
        </ul>
        <ul className="space-y-2 flex-1 w-full min-w-[150px]">
          <li>
            <a
              href="/reports"
              className=" w-full hover:text-blue-600 px-2 py-1 rounded transition"
            >
              Reports
            </a>
          </li>
          <li>
            <a
              href="/analytics"
              className=" w-full hover:text-blue-600 px-2 py-1 rounded transition"
            >
              Analytics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActionsPopup;
