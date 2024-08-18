import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { AiOutlineDelete } from "react-icons/ai";

const Users = () => {
  const [user, setUser] = useState("");
  const [currentClick, setCurrentClick] = useState("");

  const userData = async () => {
    const url = "http://localhost:3000/user";
    const response = await axios.get(url);
    console.log(response.data.data);
    setUser(response.data.data);
  };

  const delRef = useRef();

  const delCurrent = (e) => {
    console.log(e);
  };
  const handleDelete = (e) => {
    // const value = delRef.current.innerText;
    // console.log(e.target);
    delCurrent();
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="cons w-full md:w-[80%] py-8 mx-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white-400">
            <thead className="text-xs bg-slate-900 uppercase text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Confirm Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            {user &&
              user.map((v, i) => {
                return (
                  <tbody key={i}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {v.name}
                      </th>
                      <td className="px-6 py-4" onClick={(e) => delCurrent(e.target)}>
                        {v.email}
                      </td>
                      <td className="px-6 py-4">{v.password}</td>
                      <td className="px-6 py-4">{v.copPass}</td>
                      <td className="px-6 py-4 cursor-pointer">
                        <span onClick={handleDelete}>
                          <AiOutlineDelete />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
