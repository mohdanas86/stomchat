import React, { useRef, useState } from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import LoginImg from "../assets/login.svg";
import axios from "axios";

import {useMyContext} from "../context/MyContext"

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const {setServerToken, login, setLogin, dark} = useMyContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const allData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passValue = passRef.current.value;

    if (emailValue === "") {
      console.log("email field null");
    } else if (passValue === "") {
      console.log("password field null");
    } else {
      console.log("perfect");
      console.log(formData);
    }

    try {
      const url = "https://form-4b0c.onrender.com//login";
      const response = await axios.post(url, formData);
      console.log(response.data);
      const auth_token = await response.data;
      setServerToken(auth_token.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`loginCon max-w-screen-xl mx-auto px-4 ${dark ? "bg-white" : "bg-white"}`}>
        <div className="w-full md:w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          {/* FORM */}
          <div className="flex justify-center items-center w-full order-2 md:order-1">
            <form
              onSubmit={handelSubmit}
              className="w-full border max-w-md p-4 md:p-8 rounded-lg shadow-md bg-white flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold capitalize mb-4 text-black">Sign In</h3>

              {/* INPUTS */}
              <div className="flex items-center border-b-2 border-gray-300 p-2">
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={allData}
                  className="w-full outline-none placeholder:text-gray-500 placeholder:font-semibold"
                />
                <IoMailOutline className="text-gray-500 ml-2" />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 p-2 mt-2">
                <input
                  ref={passRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={allData}
                  className="w-full outline-none placeholder:text-gray-500 placeholder:font-semibold"
                />
                <IoLockClosedOutline className="text-gray-500 ml-2" />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-2 bg-violet-500 text-white font-semibold rounded-lg mt-6"
              >
                Sign In
              </button>

              {/* NEXT PAGE BUTTON */}
              <p className="text-center capitalize mt-4 text-black">
                Don't have an account?{" "}
                <a className="underline text-violet-500" onClick={(e)=>setLogin((e)=>!e)}>
                  Register
                </a>
              </p>
            </form>
          </div>

          {/* LOGIN IMAGE */}
          <div className="flex justify-center items-center w-full order-1 md:order-2">
            <img
              src={LoginImg}
              alt="login img"
              className="w-full h-[300px] md:h-[70%] object-cover md:object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
