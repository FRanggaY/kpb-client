import React from "react";

export default function CardAdvertisement() {
    return (
        <>      
        <div className=" w-80 lg:w-96 border-8 bg-white border-white drop-shadow-md" >
            <img src="https://placeimg.com/360/360/people" className="w-full h-40 object-cover" alt=""  />
            <a href="#iklan" className="py-5 text-lg font-semibold capitalize truncate ... hover:underline hover:text-blue-700">Ini adalah iklan</a>
        </div>
        </>
    );
}
