import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import swal from 'sweetalert';

// components

// import TableDropdown from "../dropdowns/table";

export default function CardGallery({ color }) {
  const [galleryList, setGalleryList] = useState([]);
  // const [paginateList, setPaginateList] = useState([]);

  const deleteGallery = (e, id) => {
    e.preventDefault();

    const thisDeleted = e.currentTarget;
    thisDeleted.innerText = "Deleting";

    axios.delete(`/api/gallery/${id}`).then(res => {
      if(res.status === 200){
        swal("Success", res.data.message, "success");
        thisDeleted.closest("tr").remove();
      }
    }).catch(err => {
        console.log(err.message)
        swal("Warning", 'something wrong', "warning");
    })
    ;
  }

  useEffect(() => {
        axios.get('/api/gallery').then(res => {
            if(res.status === 200){
              setGalleryList(res.data.data)
              // setPaginateList(res.data.data)
            }
        }).catch(err => {
            console.log(err.message)
        })
        ;
  },[]);
  return (
    <>
      <div
        className={
          "relative mt-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Image
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >Edit
                </th>
              </tr>
            </thead>
            <tbody>
            {galleryList.map((gallery, index) => (
                <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i>
                  {gallery.image ? gallery.image : "-" }
                  <img alt="" src={`http://localhost:8000/${gallery.image}`}></img>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i>
                  {gallery.title ? gallery.title : "-" }
                </td>
                  <td className="inline-flex border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {/* <EditGalleryModal link={`edit/${gallery.id}`} /> */}
                      <a href={`gallery/edit/${gallery.id}/`} className="inline text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Update</a>
                      <button className="inline text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e) =>deleteGallery(e, gallery.id)} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

CardGallery.defaultProps = {
  color: "light",
};

CardGallery.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
