import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./Home.css";
import "./Profile.js";
import "./Chome.js";
import "./Cmanager.js";

export default function Profile() {
  const [customer, setProfile] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    function getProfile() {
        axios.get("http://localhost:8090/customer/")
            .then((res) => {
                console.log("Response from server:", res.data); 
                setProfile(res.data);
                const reverseProfile = res.data.reverse();
                setProfile(reverseProfile);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                alert(err.message);
            });
    }

    getProfile();
}, []);

      // Function to handle deletion of a booking
        const onDeleteClick = async (cusid) => {
        await axios.delete(`http://localhost:8090/customer/delete/${cusid}`);
        alert('Profile Deleted Successfully');
        window.location.reload(); // Refresh page after successful deletion
      }

  return (
    <div>
    <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Users' Profile</h2>
    
    <table class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10" ref={componentRef}>
            <thead>
            <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
                    {/*<th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>*/}
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Phone Number</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Number</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Type</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Password</th>  
                </tr>
            </thead>
            <tbody>
                {customer.map((customer) => (
                    <tr key={customer.id} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cname}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cnic}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cphone}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cmail}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cvnum}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cvtype}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cpass}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div class="flex items-center justify-start gap-2">
                                {/*Edit booking button */}
                                <a href={'/editBookRead/${bookings._id}'} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Edit
                                </a>
                                {/* Delete booking button  */}
                                <button onClick={() => onDeleteClick(customer._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Delete
                                </button>
                            </div>
                            </td>
                    </tr>
                ))}
            </tbody>
            <tr>
           
            </tr>
        </table>
    </div>

  );}
  

  

