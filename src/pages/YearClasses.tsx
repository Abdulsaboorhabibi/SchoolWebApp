import { useNavigate } from "react-router-dom";
import { useState } from "react";

const YearClasses = () => {
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
      <h1 className="text-4xl font-bold mb-4">Academic Years</h1>

      {years.map((year) => (
        <div
          key={year}
          className="border border-slate-700 rounded-lg overflow-hidden"
        >
          {/* YEAR HEADER */}
          <div
            onClick={() => setOpenYear(openYear === year ? null : year)}
            className="flex justify-between items-center p-6 bg-slate-800 cursor-pointer hover:bg-slate-700 transition"
          >
            <h2 className="text-3xl font-semibold">{year}</h2>
            <span className="text-2xl">{openYear === year ? "▲" : "▼"}</span>
          </div>

          {/* CLASSES */}
          {openYear === year && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-900">
              {classes.map((cls) => {
                const isMember = allowedClasses.includes(cls);

                return (
                  <div
                    key={cls}
                    onClick={() => {
                      if (isMember) {
                        navigate(`/class/${year}/${cls}`);
                      }
                    }}
                    className={`p-6 rounded-lg cursor-pointer text-center transition
                      ${
                        isMember
                          ? "bg-slate-700 hover:bg-slate-600"
                          : "bg-gray-600 cursor-not-allowed opacity-60"
                      }
                    `}
                  >
                    <h3 className="text-xl font-bold">{cls}</h3>
                    {!isMember && (
                      <p className="text-sm text-gray-300 mt-1">No Access</p>
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

export default YearClasses;
