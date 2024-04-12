import React, {useState} from "react";
import axios from "axios";


export default function AddAttendance(){

    const [nic, setNic] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [attendance, setAttendance] = useState("");

    function sendData(e){
      e.preventDefault();
      //alert("Inserted");

      const newAttendance = {

          nic,
          name,
          date,
          attendance
      }

      axios.post("http://localhost:8090/employeeattendance/addattendance",newAttendance).then(()=>{

            alert("Attendance Added")
            window.location.reload();
        }).catch((err)=>{
            alert(err.response.data.message)
        })

    }

    return(

      <form onSubmit={sendData}>
        <div class="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5 mx-auto w-2/3">
      <center><h1>Add Attendance</h1></center>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label class="block text-sm font-medium leading-6 text-gray-900">
            NIC
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="nic"
              id="nic"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              pattern="[0-9]{9}[vV]{1}|[0-9]{12}"
              onChange={(e)=>{

                setNic(e.target.value);
              }}
              required/>
          </div>
        </div>
        </div>
  
        <div class="sm:col-span-6">
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>{

                setName(e.target.value);
              }}
              required/>
          </div>
        </div>

        <div class="sm:col-span-3 sm:col-start-1">
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Date
          </label>
          <div class="mt-2">
            <input
              type="month"
              name="date"
              id="date"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>{

                setDate(e.target.value);
              }}
              required/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label class="block text-sm font-medium leading-6 text-gray-900">
            Attendance
          </label>
          <div class="mt-2">
            <input
              type="number"
              name="attendance"
              id="attendance"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>{

                setAttendance(e.target.value);
              }}
              required/>
          </div>
        </div>
  
        
        
  
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <a href="/employeeattendance" type="button" class="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </a>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
        </button>
      </div>
      </div>
    </form>
    )
}