import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { RiPieChart2Fill } from "react-icons/ri";
import { BsChatSquareTextFill } from "react-icons/bs";

import {
  FaHeartbeat,
  FaComments,
  FaUserFriends,
  FaUserCircle,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineHelp } from "react-icons/md";
import { ImExit } from "react-icons/im";

import "./style/main.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App grid grid-cols-12 h-screen font-vazirReg">
        {/* // ! ------------------------------------ SideBar --------------------------- */}
        <div className="col-span-2 bg-slate-50 drop-shadow-md shadow-violet-500">
          <span className="block px-5 py-5 font-vazirSemibold cursor-default select-none  text-violet-900">
            <span className="bg-violet-100 block h-full p-3 ">
              <FaHeartbeat className="inline-block text-2xl ml-2 " />
              کلینیک زیبایی دهقان
            </span>
          </span>
          <ul className="">
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `  ${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block py-3 font-vazirMedium text-sm px-2  transition-colors duration-300 rounded-md`
                }
              >
                <RiPieChart2Fill className=" text-xl inline-block ml-2" />
                داشبورد
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/requests"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2 transition-colors duration-300 rounded-md`
                }
              >
                <BsChatSquareTextFill className="text-xl inline-block ml-2" />
                درخواست ها
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/visits"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2  transition-colors duration-300 rounded-md`
                }
              >
                <FaUserFriends className="text-xl inline-block ml-2" />
                ویزیت ها
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/comments"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2  transition-colors duration-300 rounded-md`
                }
              >
                <FaComments className="text-xl inline-block ml-2" />
                نظرات
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2 transition-colors duration-300 rounded-md`
                }
              >
                <FaUserCircle className="text-xl inline-block ml-2" />
                پروفایل
              </NavLink>
            </li>
            <span className="px-5 block mt-8 mb-2">
              <span className="block w-full bg-gradient-to-r from-violet-600/10 via-violet-600/50 to-violet-600/10 h-px "></span>
            </span>

            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2  transition-colors duration-300 rounded-md`
                }
              >
                <MdOutlineHelp className="text-2xl inline-block ml-2" />
                پشتیبانی
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2  transition-colors duration-300 rounded-md`
                }
              >
                <AiFillSetting className="text-2xl inline-block ml-2" />
                تنظیمات
              </NavLink>
            </li>
            <li className="cursor-pointer py-1 px-5">
              <NavLink
                to="/exit"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-700 text-violet-100 hover:bg-violet-800"
                      : "text-violet-900 hover:bg-violet-200 "
                  } text-violet-900 block font-vazirMedium text-sm py-3 px-2  transition-colors duration-300 rounded-md`
                }
              >
                <ImExit className="text-2xl inline-block ml-2" />
                خروج
              </NavLink>
            </li>
          </ul>
        </div>
        {/* // ! ------------------------------------ -------- -------------------------- */}
        {/* // ! ------------------------------------ Content --------------------------- */}

        <div className="col-span-10 bg-slate-100">
          <header className=" text-violet-900 flex justify-start items-center pr-5 h-20 text-3xl font-vazirBold">
            داشبوردwwww
          </header>
          <section className="bg-cyan-500 h-[calc(100%_-_5rem)] grid grid-cols-12">
            <div className="col-span-12 ">
              <div className=" w-80 h-60 rounded-3xl bg-gradient-to-tl from-indigo-400 to-violet-700 p-3">
                <div className="h-16 flex items-center justify-between">
                  <h4 className="font-vazirBold text-xl text-white">
                    آخرین درخواست ها
                    <span className="bg-white p-3 rounded-full ">
                      <BsChatSquareTextFill className="text-4xl  inline-block text-violet-700 " />
                    </span>
                  </h4>
                </div>
                <div className="bg-violet-400 h-[calc(100%_-_4rem)] rounded-lg overflow-auto ">
                  <ul className="px-2 py-1">
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                    <li>محمد امیری</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 bg-teal-400"></div>
            <div className="col-span-12 bg-cyan-400"></div>
          </section>
        </div>
        {/* // ! ------------------------------------ -------- -------------------------- */}
      </div>
    </BrowserRouter>
  );
}

export default App;
