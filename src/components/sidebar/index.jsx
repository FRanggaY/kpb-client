import React from "react";
import { Link } from "react-router-dom";

import {BsJustify, BsX, BsFillPersonFill, BsFillGearFill, BsFillGridFill} from "react-icons/bs";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-sky-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-5">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden block px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-sky-200 m-2 py-3 px-6")}
          >
            <BsJustify />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            KPB
          </Link>
          
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    KPB
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <BsX />
                  </button>
                </div>
              </div>
            </div>
        
            <div>
              <h4>Testing Profile</h4>
              <h3>admin</h3>
              <Link
                to="/login"
              >
                Log Out
              </Link>
            </div>
            {/* Divider */}
            <hr className="my-2 md:min-w-full " />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Access
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/dashboard"
                >
                  <BsFillGridFill
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  />{" "}
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/settings"
                >
                  <BsFillGearFill
                    className={
                      "fas fa-users mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  />{" "}
                  <p>Settings</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold flex items-center " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-white hover:bg-gray-300 bg-gray-400 border-l-4 border-indigo-500/100"
                      : "text-black hover:bg-gray-300")
                  }
                  to="/admin/tables"
                >
                  <BsFillPersonFill className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    } />{" "} 
                  <p>Users</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
