import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [openYear, setOpenYear] = useState<number | null>(null);

  const years = [2023, 2024, 2025];

  const classes = [
    "First Class",
    "Second Class",
    "Third Class",
    "Fourth Class",
    "Fifth Class",
    "Sixth Class",
    "Seventh Class",
    "Eighth Class",
    "Ninth Class",
    "Tenth Class",
    "Eleventh Class",
    "Twelfth Class",
  ];

  const allowedClasses = ["First Class", "Fifth Class", "Seventh Class"];

  return (
    <div className="m-4 space-y-4">
      <h1 className="text-xl font-semibold mb-4">Academic Years</h1>

      {years.map((year) => (
        <div
          key={year}
          className="border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden"
        >
          {/* YEAR HEADER */}
          <div
            onClick={() => setOpenYear(openYear === year ? null : year)}
            className="flex justify-between items-center p-6 bg-zinc-200 dark:bg-zinc-800 cursor-pointer hover:bg-zinc-300 hover:dark:bg-zinc-700 transition-all"
          >
            <h2 className="text-xl font-semibold">{year}</h2>
            <span className="text-xl">{openYear === year ? "▲" : "▼"}</span>
          </div>

          {/* CLASSES */}
          {openYear === year && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-zinc-100 dark:bg-zinc-900">
              {classes.map((className) => {
                const isMember = allowedClasses.includes(className);

                return (
                  <div
                    key={className}
                    onClick={() => {
                      if (isMember) {
                        navigate(`/${year}/class/${className}`);
                      }
                    }}
                    className={`p-6 rounded-lg cursor-pointer text-center transition-all grid place-content-center
                      ${
                        isMember
                          ? "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 border-green-900 border-2 shadow-2xl dark:hover:bg-zinc-600"
                          : "bg-gray-300 dark:bg-gray-300 cursor-not-allowed opacity-60"
                      }
                    `}
                  >
                    <h3 className="text-xl font-semibold">{className}</h3>
                    {!isMember && (
                      <div className="grid place-content-center">
                        <p className="text-sm font-semibold bg-red-700/30 rounded-2xl py-2 px-6 text-red-900 mt-2">
                          No Access
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
