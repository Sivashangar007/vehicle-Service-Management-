import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function StaffDetails() {
  const [staffdetails, setStaff] = useState([]); // State for storing staff details

  // Fetch staff details from the server on component mount
  useEffect(() => {
    function getStaff() {
      axios.get("http://localhost:8070/staffdetails/").then((res) => {
        console.log(res);
        setStaff(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getStaff();
  }, [])

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8070/staffdetails/delete/${userId}`);
    alert('User Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  return (
    

    <div>
  {/* Table to display staff details */}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr class="bg-blue-500 text-white"> {/* Added bg-blue-500 for blue background and text-white for white text */}
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Designation</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Mobile no</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Join date</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop through staff details and display in table rows */}
        {staffdetails.map((staffdetails, index) => (
          <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.nic}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.designation}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.address}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.email}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.mobileno}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.joindate}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center justify-end gap-2">
                {/* Edit staff button */}
                <a href={`/editstaff/${staffdetails._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                </a>
                {/* Delete staff button  */}
                <button onClick={() => onDeleteClick(staffdetails._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Button to add a new staff member */}
  <div className="mt-4">
    <a href="/addstaff" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add
    </a>
  </div>
</div>

  );
};
