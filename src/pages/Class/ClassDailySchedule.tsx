import { useState } from "react";

// Type definitions
type Period = {
  subject: string;
  topic: string;
};

type DaySchedule = {
  date: string; // YYYY-MM-DD
  periods: Period[];
};

// Simulate topics filled by teacher
const generatePastSchedules = (): DaySchedule[] => {
  const schedules: DaySchedule[] = [];
  const startDate = new Date("2025-01-01");
  const today = new Date();

  // Generate schedules from startDate to today
  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const periods: Period[] = Array.from({ length: 6 }).map((_, i) => ({
      subject: [
        "Math",
        "English",
        "Science",
        "History",
        "Biology",
        "Chemistry",
      ][i],
      topic: `Topic ${i + 1} of ${dateStr}`,
    }));

    schedules.push({ date: dateStr, periods });
  }

  return schedules.reverse(); // latest first
};

const ClassDailySchedule = () => {
  const schedules = generatePastSchedules();
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold mb-4">Daily Schedule</h2>

      <div className="space-y-2">
        {schedules.map((day) => {
          const isOpen = expandedDate === day.date;

          return (
            <div key={day.date} className="bg-zinc-800 rounded-lg shadow">
              {/* Accordion header */}
              <div
                onClick={() => setExpandedDate(isOpen ? null : day.date)}
                className="p-4 cursor-pointer flex justify-between items-center hover:bg-zinc-700 transition"
              >
                <span className="font-bold">{day.date}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>

              {/* Accordion content */}
              {isOpen && (
                <div className="p-4 border-t border-zinc-700 space-y-2">
                  {day.periods.map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between bg-zinc-900 p-2 rounded"
                    >
                      <span>
                        Period {i + 1}: {p.subject}
                      </span>
                      <span className="text-zinc-400">{p.topic}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassDailySchedule;
