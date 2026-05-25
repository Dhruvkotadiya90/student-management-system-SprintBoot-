import { useState , useEffect } from "react";
import { 
  getStudents, 
  addStudent as addStudentAPI, 
  deleteStudent 
} from "./services/StudentService";


function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("list");
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({ name: "", age: "", enrollment: "", city: "", phone: "" });

  const addStudent = () => {
    console.log("Button CLicked");
    if (!form.name || !form.age) return;
  
    addStudentAPI(form).then(() => {
      fetchStudents(); // reload from DB
      setForm({ name: "", age: "", enrollment: "", city: "", phone: "" });
      setPage("list");
    });
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  
  const fetchStudents = () => {
    getStudents().then((res) => {
      setStudents(res.data);
    });
  };

  const handleDelete = (id) => {
    deleteStudent(id).then(() => {
      fetchStudents();
    });
  };

  return (

    

    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-60 p-5 space-y-6 absolute md:relative md:translate-x-0 transform ${open ? "translate-x-0" : "-translate-x-full"} transition duration-200`}>

        <h2 className="text-2xl font-bold">Dashboard</h2>

        <nav className="space-y-2">
          <p
            onClick={() => setPage("list")}
            className={`p-2 rounded cursor-pointer ${page === "list" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Students
          </p>
          <p
            onClick={() => setPage("add")}
            className={`p-2 rounded cursor-pointer ${page === "add" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Add Student
          </p>
          <p
            onClick={() => setPage("contact")}
            className={`p-2 rounded cursor-pointer ${page === "contact" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Contact Us
          </p>

        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>☰</button>
          <h1 className="text-xl font-semibold">Student Management System</h1>
        </div>

        {/* Content */}
        <div className="p-6">



          {/* Student List */}
          {page === "list" && (
            <>
              <h2 className="text-2xl font-bold mb-4">Students</h2>
              <div className="bg-white shadow rounded overflow-hidden">
                <table className="w-full text-center border-collapse">

                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Age</th>
                      <th className="p-3">Enrollment Number</th>
                      <th className="p-3">City</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center p-4 text-gray-500">
                          No students found
                        </td>
                      </tr>
                    ) : (
                      students.map((s) => (
                        <tr key={s.id} className="border-t">
                          <td className="p-3">{s.name}</td>
                          <td className="p-3">{s.age}</td>
                          <td className="p-3">{s.enrollment}</td>
                          <td className="p-3">{s.city}</td>
                          <td className="p-3">{s.phone}</td>
                          <td className="p-3">
                            <button
                              onClick={() => {
                                handleDelete(s.id)
                              }}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>

                </table>
              </div>
            </>
          )}

          {/* Add Student Form */}
          {page === "add" && (
            <>
              <h2 className="text-2xl font-bold mb-4">Add Student</h2>
              <div className="bg-white p-6 rounded shadow space-y-4 max-w-md border">

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

                <input
                  type="number"
                  placeholder="Enrollment Number"
                  value={form.enrollment}
                  onChange={(e) => setForm({ ...form, enrollment: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="number"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <button
                  onClick={addStudent}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add Student
                </button>

              </div>
            </>
          )}

          {page === "contact" && (
            <>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <div className="bg-white p-6 rounded shadow space-y-4">

                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-600">support@studentapp.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Address</h3>
                  <p className="text-gray-600">
                    Rajkot, Gujarat, India
                  </p>
                </div>

              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;