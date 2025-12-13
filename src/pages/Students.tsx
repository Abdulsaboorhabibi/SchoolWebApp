import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();
  const student = [];
  for (let i = 1; i < 100; i++) {
    student.push(<div key={i}>Student {i}</div>);
  }
  return (
    <div className="m-6 grid grid-cols-1 md:grid-cols-2">
      {student.map((std) => (
        <div
          key={std.key}
          onClick={() => navigate(`/studentDetails/${std.key}`)}
          className="bg-slate-700 rounded p-6 m-1 text-2xl tracking-wide flex justify-between cursor-pointer"
        >
          <div>{std}</div>
          <div className="bg-zinc-900 rounded-full text-center grid place-content-center h-20 w-20">
            {std.key}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Students;
