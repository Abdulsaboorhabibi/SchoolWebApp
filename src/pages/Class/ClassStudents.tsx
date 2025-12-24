import { useState } from "react";

interface Student {
  id: number;
  name: string;
  fatherName: string;
  rollNo: number;
}

const ClassStudents = () => {
  const [students] = useState<Student[]>([
    { id: 1, name: "Ahmad", fatherName: "Khan", rollNo: 1 },
    { id: 2, name: "Bilal", fatherName: "Ali", rollNo: 2 },
    { id: 3, name: "Sami", fatherName: "Hassan", rollNo: 3 },
    { id: 3, name: "Sami", fatherName: "Hassan", rollNo: 3 },
    { id: 3, name: "Sami", fatherName: "Hassan", rollNo: 3 },
    { id: 3, name: "Sami", fatherName: "Hassan", rollNo: 3 },
  ]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Class Students</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-zinc-200 dark:bg-zinc-800 cursor-pointer rounded-xl p-6 shadow hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
          >
            <h3 className="text-xl font-semibold">{student.name}</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Father: {student.fatherName}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Roll No: {student.rollNo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassStudents;
