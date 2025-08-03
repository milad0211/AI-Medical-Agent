import React from "react";
import Image from "next/image";
import { doctorAgent } from "./DoctorAgentCard";

type props = {
  doctorAgent: doctorAgent;
  setSelectedDoctor:any;
  selectedDoctor:doctorAgent;
};
const SuggestedDoctorCard = ({ doctorAgent , setSelectedDoctor,selectedDoctor }: props) => {
  return (
    <div className={`flex flex-col items-center justify-center border rounded-2xl p-5 shadow hover:border-blue-500 cursor-pointer 
    ${selectedDoctor?.id == doctorAgent.id && 'border-blue-500'} `} onClick={()=>setSelectedDoctor(doctorAgent)}>
      <Image
        src={`/${doctorAgent?.image}`}
        alt={doctorAgent?.specialist}
        width={70}
        height={70}
        className="w-[50px] h-[50px] rounded-4xl object-cover
        "
      />
      <h2 className="font-bold text-sm text-center">
        {doctorAgent?.specialist}
      </h2>
      <p className="text-center text-xs line-clamp-2">
        {doctorAgent?.description}
      </p>
    </div>
  );
};

export default SuggestedDoctorCard;
