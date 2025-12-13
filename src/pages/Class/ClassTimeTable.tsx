type Period = {
  subject: string;
  teacher: string;
};

type DaySchedule = {
  day: string;
  periods: Period[];
};

const timetable: DaySchedule[] = [
  {
    day: "Saturday",
    periods: [
      { subject: "Math", teacher: "Mr. Khan" },
      { subject: "English", teacher: "Ms. Sara" },
      { subject: "Science", teacher: "Mr. Ali" },
      { subject: "History", teacher: "Ms. Maryam" },
      { subject: "Biology", teacher: "Mr. Hamid" },
      { subject: "Chemistry", teacher: "Ms. Fatima" },
    ],
  },
  {
    day: "Sunday",
    periods: [
      { subject: "Physics", teacher: "Mr. Ali" },
      { subject: "Math", teacher: "Mr. Khan" },
      { subject: "English", teacher: "Ms. Sara" },
      { subject: "Computer", teacher: "Mr. Zubair" },
      { subject: "Islamiyat", teacher: "Ms. Rahima" },
      { subject: "Geography", teacher: "Ms. Noor" },
    ],
  },
  {
    day: "Monday",
    periods: [
      { subject: "Math", teacher: "Mr. Khan" },
      { subject: "Science", teacher: "Mr. Ali" },
      { subject: "English", teacher: "Ms. Sara" },
      { subject: "Biology", teacher: "Mr. Hamid" },
      { subject: "Chemistry", teacher: "Ms. Fatima" },
      { subject: "History", teacher: "Ms. Maryam" },
    ],
  },
];

const ClassTimetable = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-3xl font-bold mb-4">Class Timetable</h2>

      <table className="min-w-full border border-slate-700 text-center">
        <thead className="bg-slate-800">
          <tr>
            <th className="border border-slate-700 p-3">Day</th>
            {Array.from({ length: 6 }).map((_, i) => (
              <th key={i} className="border border-slate-700 p-3">
                Period {i + 1}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {timetable.map((day) => (
            <tr key={day.day} className="bg-slate-900">
              <td className="border border-slate-700 p-3 font-bold">
                {day.day}
              </td>

              {day.periods.map((p, i) => (
                <td key={i} className="border border-slate-700 p-3">
                  <div className="font-semibold">{p.subject}</div>
                  <div className="text-sm text-slate-400">{p.teacher}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTimetable;
