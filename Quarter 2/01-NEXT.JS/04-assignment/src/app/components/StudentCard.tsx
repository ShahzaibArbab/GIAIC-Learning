import React from "react";

type StudentCardProps = {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
};

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass }) => {
  return (  <>
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-6 bg-gray-300">
    <div className="max-w-fit rounded-2xl overflow-hidden shadow-lg m-2 bg-blue-400">
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 bg-gray-700 text-black text-center">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 rounded-full bg-blue-500">{name}</div>
        <p className=" text-white text-base mb-1 bg-gray-800 rounded-full">Age: {age}</p>
        <p className=" text-white text-base mb-1 p-1  bg-gray-800 rounded-full">Roll Number: {rollNumber}</p>
        <p className=" text-white text-base mb-1 p-1 bg-gray-800 rounded-full">Class: {studentClass}</p>
      </div>
    </div>
    </div>
    </div>
  </>
  );
};

export default StudentCard;
