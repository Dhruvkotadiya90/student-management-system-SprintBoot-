import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("list");
  const [students, setStudents] = useState([
    { name: "Dhruv", age: 20 },
    { name: "Rahul", age: 22 },
  ]);

  const [form, setForm] = useState({ name: "", age: "" });

  const addStudent = () => {
    if (!form.name || !form.age) return;
    setStudents([...students, form]);
    setForm({ name: "", age: "" });
    setPage("list");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 p-5 space-y-6 absolute md:relative md:translate-x-0 transform ${open ? "translate-x-0" : "-translate-x-full"} transition duration-200`}>
        
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <nav className="space-y-2">
          <p onClick={() => setPage("list")} className="hover:bg-gray-700 p-2 rounded cursor-pointer">Students</p>
          <p onClick={() => setPage("add")} className="hover:bg-gray-700 p-2 rounded cursor-pointer">Add Student</p>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>☰</button>
          <h1 className="text-xl font-semibold">Student Management</h1>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Student List */}
          {page === "list" && (
            <>
              <h2 className="text-2xl font-bold mb-4">Students</h2>
              <div className="bg-white shadow rounded overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3">{s.name}</td>
                        <td className="p-3">{s.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Add Student Form */}
          {page === "add" && (
            <>
              <h2 className="text-2xl font-bold mb-4">Add Student</h2>
              <div className="bg-white p-6 rounded shadow space-y-4 max-w-md">
                
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="number"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <button
                  onClick={addStudent}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Student
                </button>

              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;