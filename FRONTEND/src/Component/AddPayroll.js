import React, {useState} from "react";
import axios from "axios";
<<<<<<< HEAD
=======

>>>>>>> 7287847b93da60722f41095c478b67f74d9792e7

export default function AddPayroll(){

    const [nic, setNic] = useState("");
    const [name, setName] = useState("");
    const [otstatus, setOtstatus] = useState("");
    const [otpayment, setOtpayment] = useState("");
    const [penaltyamt, setPenaltyamt] = useState("");
    const [bonus, setBonus] = useState("");
    const [salary, setSalary] = useState("");

    function sendData(e){
        //e.preventDefault();
        //alert("Inserted");

        const newPayroll = {

            nic,
            name,
            otstatus,
            otpayment,
            penaltyamt,
            bonus,
            salary
        }

        axios.post("http://localhost:8090/employeepayroll/addpayroll",newPayroll).then(()=>{

            alert("Payroll Added")
            window.location.reload();
        }).catch((err)=>{
            alert(err)
        })

    }

    return(

        <form onSubmit={sendData}>
          <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
          <center><h1>Add Payroll</h1></center>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                NIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nic"
                  id="nic"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setNic(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                OT Status
              </label>
              <div className="mt-2">
                <select
                  id="otstatus"
                  name="otstatus"
                  input="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                  setOtstatus(e.target.value);
                  }}
                 required>
                  <option selected>Choose...</option>
                  <option>Yes</option>
                  <option>No</option>
                  </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                OT Payment
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="otpayment"
                  id="otpayment"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setOtpayment(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Bonus
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bonus"
                  id="bonus"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setBonus(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Penalty Amt
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="penaltyamt"
                  id="penaltyamt"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setPenaltyamt(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>{

                    setSalary(e.target.value);
                  }}
                />
              </div>
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