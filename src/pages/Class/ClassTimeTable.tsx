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
      { subject: "د افغانستان معاصر تاریخ", teacher: "Mr. Khan" },
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
      { subject: "د افغانستان معاصر تاریخ", teacher: "Ms. Noor" },
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
      { subject: "د افغانستان معاصر تاریخ", teacher: "Ms. Maryam" },
    ],
  },
  {
    day: "Tuesday",
    periods: [
      { subject: "History", teacher: "Ms. Maryam" },
      { subject: "Chemistry", teacher: "Ms. Fatima" },
      { subject: "English", teacher: "Ms. Sara" },
      { subject: "Biology", teacher: "Mr. Hamid" },
      { subject: "د افغانستان معاصر تاریخ", teacher: "Mr. Ali" },
      { subject: "Math", teacher: "Mr. Khan" },
    ],
  },
  {
    day: "Wednesday",
    periods: [
      { subject: "Biology", teacher: "Mr. Hamid" },
      { subject: "د افغانستان معاصر تاریخ", teacher: "Mr. Ali" },
      { subject: "د اسلام سیاسی نظام", teacher: "Ms. Fatima" },
      { subject: "Math", teacher: "Mr. Khan" },
      { subject: "English", teacher: "Ms. Sara" },
      { subject: "History", teacher: "Ms. Maryam" },
    ],
  },
  {
    day: "Thursday",
    periods: [
      { subject: "Chemistry", teacher: "Ms. Fatima" },
      { subject: "د اسلامی ژوندون تګلاری", teacher: "Mr. Khan" },
      { subject: "فزیک عالی", teacher: "آغلی مریم" },
      { subject: "Science", teacher: "Mr. Ali" },
      { subject: "تعلیمات مدنی", teacher: "Mr. Hamid" },
      { subject: "English", teacher: "Ms. Sara" },
    ],
  },
];

const ClassTimetable = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Class Timetable</h2>

      <table className="min-w-full border  border-zinc-700 text-center">
        <thead className="bg-zinc-300 dark:bg-zinc-800">
          <tr>
            <th className="border border-zinc-700 p-3">Day</th>
            {Array.from({ length: 6 }).map((_, i) => (
              <th key={i} className="border border-zinc-700 p-3">
                Period {i + 1}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {timetable.map((day) => (
            <tr key={day.day}>
              <td className="border border-zinc-700 p-3 font-semibold">
                {day.day}
              </td>

              {day.periods.map((p, i) => (
                <td key={i} className="border border-zinc-700 p-3">
                  <div className="font-semibold text-wrap wrap-break-word">
                    {p.subject}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 text-wrap wrap-break-word">
                    {p.teacher}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <caption className="mx-auto my-2 text-amber-500/90">
          Only For This Year
        </caption>
      </table>
    </div>
  );
};

export default ClassTimetable;
