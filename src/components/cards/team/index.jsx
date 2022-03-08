import React, {useState} from "react";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

export default function CardTeam({imgsrc, name, position1, position2, facebook, twitter, instagram}) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <>      
        <div className="lg:h-80 w-36 lg:w-40 border-8 border-white drop-shadow-md overflow-hidden" >
            <div className={hovered ? '' : 'hidden'}>
                <div className="border-t-2 flex gap-4 justify-center py-5">
                    <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href="#fb"><FaFacebookF/></a>
                    <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href="#ig"><FaInstagram/></a>
                    <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href="#tw"><FaTwitter/></a>
                </div>
            </div>
            <div className={hovered ? '' : 'grayscale'}>
                <img src="https://placeimg.com/360/360/people" className="w-full h-full object-cover hover:cursor-pointer" alt="" onClick={toggleHover} />
            </div>
            <div className="text-center bg-white relative">
                <h3 className="py-5 text-lg font-semibold capitalize truncate ...">Tester Aquila tester</h3>
                <div className="flex flex-col gap-2">
                    <div>
                        <button data-tooltip-target="tooltip-dark" type="button" className="lg:truncate ... overflow-hidden w-32 lg:w-36 selection:text-white font-medium text-sm px-5 py-2.5 text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Agensi KPB</button>
                        <div id="tooltip-dark" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Agensi KPB
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <div>
                        <button data-tooltip-target="tooltip-dark2" type="button" className="lg:truncate ... overflow-hidden w-32 lg:w-36 selection:text-white font-medium text-sm px-5 py-2.5 text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Badan Intelijen auila tester blors</button>
                        <div id="tooltip-dark2" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Badan Intelijen auila tester blors
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
