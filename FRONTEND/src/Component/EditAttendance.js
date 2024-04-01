import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function AddAttendance(){

    const [nic, setNic] = useState("");  // State for NIC
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [attendance, setAttendance] = useState("");

    const { id } = useParams(); // Get the ID from URL params

    // Fetch staff details from the server on component mount
  useEffect(() => {
    axios.get(`http://localhost:8090/employeeattendance/get/${id}`).then((res) => {
      setNic(res.data.attendance.nic);
      setName(res.data.attendance.name);
      setDate(res.data.attendance.date);
      setAttendance(res.data.attendance.attendance);
    }).catch((err) => {
      alert(err.message);
    });
  }, [id]);

  // Function to update staff details
  function updateAttendance(e) {
    e.preventDefault();

    const updatedAttendance = {
      nic,
      name,
      date,
      attendance,
    };

    // Send updated staff details to the server
    axios
      .put(`http://localhost:8090/employeeattendance/editattendance/${id}`, updatedAttendance)
      .then(() => {
        alert("Attendance Updated");
        window.location.href = "/EmployeeAttendance";
      })
      .catch((err) => {
        alert(err.message);
      });
  }


    return(

      <form onSubmit={updateAttendance}>
        <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
      <center><h1>Update Attendance</h1></center>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            NIC
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="nic"
              id="nic"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={nic} //showing value
              onChange={(e)=>{

                setNic(e.target.value);
              }}
            />
          </div>
        </div>
        </div>
  
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={name} //showing value
              onChange={(e)=>{

                setName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Date
          </label>
          <div className="mt-2">
            <input
              type="month"
              name="date"
              id="date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={date} //showing value
              onChange={(e)=>{

                setDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Attendance
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="attendance"
              id="attendance"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={attendance} //showing value
              onChange={(e)=>{

                setAttendance(e.target.value);
              }}
            />
          </div>
        </div>
  
        
        
  
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
        </button>
      </div>
      </div>
    </form>
    )
}