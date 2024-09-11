/* eslint-disable react/prop-types */
import { useState } from "react";
import { VscAdd, VscRemove } from "react-icons/vsc";

const Accordion = ({ item }) => {

    const [openAccordion, setOpenAccordion] = useState(false)
  
    return (

        <div className={`px-6 lg:px-[0px] group ${ openAccordion ? 'is-active' : '' }`}>
        <div onClick={() => setOpenAccordion(!openAccordion)} className="cursor-pointer px-4 lg:px-6 gap-8 flex items-center bg-[#F7F7F7] justify-between duration-500">
          <h2 className="font-montserrat text-[#000000] w-48 sm:w-auto text-[14px] lg:font-[600] lg:text-[20px] py-2 lg:mr-8 lg:py-4 duration-500">{item.question}</h2>
          {
            openAccordion ?
            <VscRemove className="text-sm lg:text-xl group-[.is-active]:font-bold duration-500" />
            :
            <VscAdd className="text-sm lg:text-xl group-[.is-active]:font-bold duration-500" />
          }
        </div>
        {/* <hr className="bg-[#1E143C] h-0.5" /> */}
        <div className = "py-1 overflow-hidden max-h-0 group-[.is-active]:max-h-[250px] px-4 lg:px-6 mb-4 bg-[#F7F7F7] duration-500">
          <p className="font-montserrat text-[13px] text-gray-500 lg:tracking-widest lg:mb-6 lg:text-[15px]">{item.answer}</p>
        </div>
      </div>
    )
}



export default Accordion;