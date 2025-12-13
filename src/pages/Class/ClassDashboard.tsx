import { useNavigate, useParams } from "react-router-dom";

const ClassDashboard = () => {
  const { year, className } = useParams();
  const navigate = useNavigate();

  const cards = [
    { title: "Timetable", path: "timetable" },
    { title: "Students", path: "students" },
    { title: "Attendance", path: "attendance" },
    { title: "Daily Schedule", path: "schedule" },
    { title: "Teachers", path: "teachers" },
    { title: "Subjects", path: "subjects" },
  ];

  return (
    <div className="m-6 space-y-6">
      <h1 className="text-4xl font-bold">
        {className} – {year}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(`/class/${year}/${className}/${card.path}`)}
            className="p-10 rounded-xl bg-slate-800 hover:bg-slate-700 cursor-pointer transition shadow-lg text-center"
          >
            <h2 className="text-3xl font-semibold">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDashboard;
