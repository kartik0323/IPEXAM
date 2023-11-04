import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Addrecord = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    fname: "",
    work: "",
    nationality: "",
    salary: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setdata((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
 
  const SubmitRecord = (e) => {
    e.preventDefault();

    const { name, fname, work, nationality, salary } = data;
    

    axios
      .post("http://localhost:5000/employee/register", {
        name,
        fname,
        work,
        nationality,
        salary,
      })
      .then((res) => {
        setdata({ name: "", fname: "", work: "", nationality: "", salary: "" });
        console.log("record added successfully");
      })
      .catch((err) => window.alert(err.response.data));

    toast.success("Recorder added successfully");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <div className="container mx-auto p-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 className="text-lg font-bold">Register</h1>
          <form onSubmit={SubmitRecord} className="flex flex-col mt-4">
            <input
              type="text"
              required
              onChange={handlechange}
              name="name"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="STUDENT"
            />
            <input
              type="text"
              required
              onChange={handlechange}
              name="fname"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="PERCENTAGE"
            />
            <input
              type="text"
              required
              onChange={handlechange}
              name="work"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="STANDARD"
            />
            <input
              type="text"
              required
              onChange={handlechange}
              name="nationality"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="ACTIVITY"
            />
            <input
              type="text"
              required
              onChange={handlechange}
              name="salary"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="ADDRESS"
            />
            <button
              type="submit"
              required
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Submit
            </button>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Back to Home Page?
                <Link to="/" className="ml-1 font-medium text-blue-400">
                  Back
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addrecord;
