"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/components/Navbar";
import Bottombar from "@/app/components/Bottombar";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  let [password, set_password] = useState('');
  let [isStarted, set_isStarted] = useState(true);
  let [data, set_data] = useState(null);
  let [timer, set_timer] = useState(0);

  useEffect(() => {
    try {
      (async () => {
        let res = await fetch("https://tc-backend.onrender.com/data");
        res = await res.json();
        let { isStart , data, timer} = res;
        set_isStarted(isStart);
        set_data(data)
        set_timer(timer)
      })();
    } catch (error) {
      toast.warn(error.message);
    }
  }, []);

  

  let start = () => {

    if (!password) return toast.warn("Please Enter Password");

    try {
      (async () => {
        let res = await fetch("https://tc-backend.onrender.com/start", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        });
        res = await res.json();
        let {success, isStart, message } = res;
        set_isStarted(isStart);
        

        if(success) {
          toast.success(message);
          set_password('')
        }
        else toast.warn(message);
      })();
    } catch (error) {
      toast.success(error.message);
    }
  };

  let stop = () => {
    if (!password) return toast.warn("Please Enter Password");
    try {
      (async () => {
        let res = await fetch("https://tc-backend.onrender.com/stop", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        });
        res = await res.json();
      
        let { success , isStart, message } = res;
        set_isStarted(isStart);
        
        if(success) {
          toast.success(message);
          set_password('')
        }
        else toast.warn(message);
      })();
    } catch (error) {
      toast.warn(error.message);
    }
  };

 

  return (
    <>
      <Navbar />
      <div style={{ height: "70vh" }}>
      <span style={{display:'flex',justifyContent:'center',marginTop:'0.75rem'}}> RUNNING : {timer} </span>
      <span style={{display:'flex',marginLeft : '1rem',marginTop:'0.75rem'}}> Error Message : { data ? data.Error : 'No Error' } </span>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
        
          <div
            style={{
              display: "flex",
              textAlign: "center",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label style={{ fontSize: "0.75rem" }} htmlFor="first_name">
              {" "}
              PASSWORD{" "}
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => set_password(e.target.value.trim())}
            />
          </div>

          <button
            onClick={() => {
              if (!isStarted) start();
            }}
            type="button"
            style={{ opacity: isStarted ? "0.5" : "1" }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            START
          </button>

          <button
            type="button"
            onClick={() => {
              if (isStarted) stop();
            }}
            style={{ opacity: isStarted ? "1" : "0.5" }}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            STOP
          </button>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  NUMBER
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
              </tr>
            </thead>
            <tbody>
            

              <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Number 6
              </th>
              <td className="px-6 py-4">{ data ? data.Number_6 : <Skeleton /> }</td>
            </tr>

            

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NUMBER 7
                </th>
                <td className="px-6 py-4">{ data ? data.Number_7 : <Skeleton /> }</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NUMBER 8
                </th>
                <td className="px-6 py-4">{ data ? data.Number_8 : <Skeleton /> }</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NUMBER 9
                </th>
                <td className="px-6 py-4">{ data ? data.Number_9 : <Skeleton /> }</td>
              </tr>

              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  NUMBER 10
                </th>
                <td className="px-6 py-4">{ data ? data.Number_10 : <Skeleton /> }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
