import { useState } from 'react'
import * as XLSX from 'xlsx'

function App() {

  
    const [formData, setFormData] = useState({
      name: '',
      gender: '',
      college: '',
      department: '',
      email: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const wb = XLSX.utils.book_new();

      const data = [
        ['Name', 'Gender', 'College', 'Department', 'Email'],
        [formData.name, formData.gender, formData.college, formData.department, formData.email],
      ];

      const ws = XLSX.utils.aoa_to_sheet(data);

      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, 'FormData.xlsx');

      setFormData({
        name: '',
        gender: '',
        college: '',
        department: '',
        email: '',
      });
    };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-400">
        <form  onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <table className="w-full">
            <tr className="mb-4">
              <td className="pr-4"><h1 className="text-lg font-semibold text-gray-700">Name :</h1></td>
              <td><input type="text" name="name"  value={formData.name}
                  onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" ></input></td>
            </tr>

            <tr className="mb-4">
              <td className="pr-4">
                <h1 className="text-lg font-semibold text-gray-700">Gender :</h1></td>
              <td><input  type="text"
              name="gender" value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input></td>
            </tr>

            <tr className="mb-4">
              <td className="pr-4"><h1 className="text-lg font-semibold text-gray-700">College Name :</h1></td>
              <td><input  type="text"
              name="college"  value={formData.college}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input></td>
            </tr>

            <tr className="mb-4">
              <td className="pr-4"><h1 className="text-lg font-semibold text-gray-700">Department:</h1></td>
              <td><input   type="text"
              name="department" value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input></td>
            </tr>

            <tr className="mb-4">
              <td className="pr-4"><h1 className="text-lg font-semibold text-gray-700">Email :</h1></td>
              <td><input type="email"
              name="email" value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input></td>
            </tr>
          </table>
          <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Submit
      </button>
        </form>
      </div>
    </>
  );
}

export default App;
