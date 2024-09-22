import React, { useRef, useState } from "react";
import axios from "axios";
import { PiUserCircleFill } from "react-icons/pi";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import LoginImg from "../assets/regsiter.svg";

import { useMyContext } from "../context/MyContext";

const Register = () => {
  const logo = "https://stomilar-blog.onrender.com/loogo.jpg";
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const { setServerToken, setLogin, dark } = useMyContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const allData = (e) => {
    let { name, value } = e.target;
    let newData = { ...formData, [name]: value };
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passValue = passRef.current.value;
    const nameValue = nameRef.current.value;

    if (emailValue === "") {
      console.log("email field null");
    } else if (passValue === "") {
      console.log("password field null");
    } else if (nameValue === "") {
      console.log("name field null");
    } else {
      console.log("perfect");
      // console.log(formData);
    }

    try {
      const local_url = "http://localhost:3001/register";
      const url = "https://form-4b0c.onrender.com/register";
      const response = await axios.post(url, formData);
      // console.log(response.data);
      const auth_token = await response.data;
      setServerToken(auth_token.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={`loginCon max-w-screen-xl ${dark ? "bg-white" : "bg-white"} h-screen`}
      >
        <div className="w-full md:w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-4">
          {/* LOGIN IMAGE */}
          <div className="hidden md:flex justify-center items-center w-full h-full md:order-1">
            <img
              src={LoginImg}
              alt="login img"
              className="w-[250px] md:w-full h-[250px] md:h-[70%] object-cover md:object-contain"
            />
          </div>

          {/* ===== FORM ===== */}
          <div className="flex justify-center items-center w-full h-full md:order-2">
            <form
              onSubmit={handleSubmit}
              className="w-full md:border max-w-md md:py-8 md:px-8 py-6 px-2 rounded-lg md:shadow-md bg-white flex flex-col gap-4"
            >
             
             <h3 className="w-full text-center md:text-start md:text-2xl text-3xl font-bold capitalize md:mb-8 mb-2 text-black">Sign Up</h3>

              <div className="md:hidden w-[25%] mx-auto mb-8">
                <img src={logo} alt="" />
              </div>
             
              {/* ====== INPUTS ======= */}
              <div className="flex items-center border-b-2 border-gray-300 p-2">
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={allData}
                  className="w-full outline-none placeholder:text-gray-500 placeholder:font-semibold"
                />
                <PiUserCircleFill className="text-gray-500 ml-2" />
              </div>

              <div className="flex items-center border-b-2 border-gray-300 p-2 mt-2">
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

              {/* SUBMIT BTN */}
              <button
                type="submit"
                className="w-full py-2 bg-violet-500 text-white font-semibold rounded-full md:mt-8 mt-12"
              >
                Sign Up
              </button>

              {/* NEXT PAGE BTN */}
              <p className="text-center capitalize mt-4 text-black">
                already have an account?{" "}
                <a
                  className="underline text-violet-500"
                  onClick={(e) => setLogin((e) => !e)}
                >
                  sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
