import { useState } from "react";

type Student = {
  id: number;
  name: string;
};

const AttendanceSheet = () => {
  const students: Student[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
  }));

  const [attendance, setAttendance] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  const presentStudents = students.filter((s) => attendance[s.id]);
  const absentStudents = students.filter((s) => !attendance[s.id]);

  const submitAttendance = async () => {
    if (submitted) return;

    setSaving(true);

    const payload = {
      date: new Date().toISOString().split("T")[0],
      attendance,
    };

    console.log("Saved attendance:", payload);

    // simulate API call
    await new Promise((res) => setTimeout(res, 1200));

    setSaving(false);
    setSubmitted(true);
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-4xl font-bold">Attendance</h2>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-green-700 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold">Present</h3>
          <p className="text-5xl font-bold">{presentStudents.length}</p>
        </div>

        <div className="bg-red-700 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold">Absent</h3>
          <p className="text-5xl font-bold">{absentStudents.length}</p>
        </div>
      </div>

      {/* Present Students */}
      <div>
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          Present Students
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {presentStudents.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                if (submitted) return;
                setAttendance((prev) => ({
                  ...prev,
                  [s.id]: false,
                }));
              }}
              className={`flex justify-between items-center p-4 rounded-lg transition
                ${
                  submitted
                    ? "bg-green-700 opacity-70 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-500 cursor-pointer"
                }`}
            >
              <span className="text-lg">{s.name}</span>
              <span className="font-bold text-xl">P</span>
            </div>
          ))}
        </div>
      </div>

      {/* Absent Students */}
      <div>
        <h3 className="text-2xl font-bold text-red-400 mb-4">
          Absent Students
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {absentStudents.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                if (submitted) return;
                setAttendance((prev) => ({
                  ...prev,
                  [s.id]: true,
                }));
              }}
              className={`flex justify-between items-center p-4 rounded-lg transition
                ${
                  submitted
                    ? "bg-slate-800 opacity-70 cursor-not-allowed"
                    : "bg-slate-800 hover:bg-slate-700 cursor-pointer"
                }`}
            >
              <span className="text-lg">{s.name}</span>
              <span className="font-bold text-xl text-red-500">A</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        disabled={submitted || saving}
        onClick={submitAttendance}
        className={`w-full py-4 text-xl font-bold rounded-xl transition
          ${
            submitted
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
      >
        {saving
          ? "Saving Attendance..."
          : submitted
          ? "Attendance Submitted"
          : "Submit Attendance"}
      </button>
    </div>
  );
};

export default AttendanceSheet;
