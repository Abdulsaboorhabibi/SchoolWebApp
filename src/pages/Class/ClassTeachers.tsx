const ClassTeachers = () => {
  const teachers = [
    { name: "Mr. Khan", subject: "Math" },
    { name: "Ms. Sara", subject: "English" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Teachers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teachers.map((t) => (
          <div key={t.name} className="p-6 bg-slate-800 rounded">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-slate-300">{t.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassTeachers;
