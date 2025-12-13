interface Subject {
  id: number;
  name: string;
  teacher: string;
  cover: string;
}

const ClassSubjects = () => {
  const subjects: Subject[] = [
    {
      id: 1,
      name: "Mathematics",
      teacher: "Mr. Khan",
      cover: "https://source.unsplash.com/400x200/?math",
    },
    {
      id: 2,
      name: "English",
      teacher: "Ms. Sara",
      cover: "https://source.unsplash.com/400x200/?english",
    },
    {
      id: 3,
      name: "Science",
      teacher: "Mr. Ali",
      cover: "https://source.unsplash.com/400x200/?science",
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold">Subjects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <div
            key={sub.id}
            className="bg-slate-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-all"
          >
            <img
              src={sub.cover}
              alt={sub.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-2xl font-semibold">{sub.name}</h3>
              <p className="text-slate-300 mt-1">Teacher: {sub.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSubjects;
