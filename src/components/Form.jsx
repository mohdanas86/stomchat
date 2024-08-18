import React, { useState } from "react";
import Axios from "axios";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [show, setShow] = useState(true);
  const [coShow, setCoShow] = useState(true);

  const [userData, setUserData] = useState("");
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    copPass: "",
  });

  const allValue = (e) => {
    const nameVale = e.target.name;
    const value = e.target.value;

    setFromData({ ...formData, [nameVale]: value });
    setUserData(formData);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const postUrl = "http://localhost:3000/register/";

    try {
      if (formData.name === "") {
        console.log("fill name");
        toast.error("enter your name");
      } else if (formData.email === "") {
        console.log("fill email");
        toast.error("enter your email");
      } else if (formData.password === "") {
        console.log("fill password");
        toast.error("enter your password");
      } else if (formData.copPass === "") {
        console.log("fill confirm password");
        toast.error("enter your confirm password");
      } else {
        const response = await Axios.post(postUrl, formData);
        console.log(response.data.data);
        toast.success("Submited successfuly");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="formCon w-full bg-violet-200 h-full fixed flex justify-center items-center">
        <div className="formSubCon w-full md:w-[1200px] flex justify-center items-center mx-auto px-4 md:px-0 py-4">
          <form
            onSubmit={handelSubmit}
            className="w-[80%] md:w-[50%] flex flex-col justify-start items-start md:px-8 px-4 py-8 rounded bg-white shadow-sm gap-3"
          >
            <h2 className="title font-semibold text-2xl mb-4 md:mb-2">
              Registration form
            </h2>

            {/* NAME */}
            <div className="input-box py-2 w-full">
              <input
                type="text"
                id="name"
                className="border border-slate-700 rounded py-1 px-4 w-full"
                name="name"
                onChange={allValue}
                placeholder="full name"
              />
            </div>

            {/* email */}
            <div className="input-box py-2 w-full">
              <input
                type="email"
                id="email"
                className="border border-slate-700 rounded py-1 px-4 w-full"
                name="email"
                onChange={allValue}
                placeholder="email"
              />
            </div>

            {/* Password */}
            <div className="input-box flex justify-center items-center py-2 w-full relative">
              <input
                type={show ? "password" : "text"}
                id="password"
                className="border border-slate-700 rounded py-1 px-4 w-full"
                name="password"
                onChange={allValue}
                placeholder="password"
              />
              <span
                className="top-4 right-5 absolute cursor-pointer"
                onClick={() => setShow((e) => !e)}
              >
                {show ? <LuEye /> : <LuEyeOff />}
              </span>
            </div>

            {/* confirm password */}
            <div className="input-box py-2 w-full relative">
              <input
                type={coShow ? "password" : "text"}
                id="conPassword"
                className="border border-slate-700 rounded py-1 px-4 w-full"
                name="copPass"
                onChange={allValue}
                placeholder="confirm password"
              />
              <span
                className="top-4 right-5 absolute cursor-pointer"
                onClick={() => setCoShow((e) => !e)}
              >
                {coShow ? <LuEye /> : <LuEyeOff />}
              </span>
            </div>

            <div className="input-box py-2 w-full mt-4">
              <input
                type="submit"
                className="submit cursor-pointer border border-transparent text-white bg-blue-500 rounded py-1 px-4 w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
