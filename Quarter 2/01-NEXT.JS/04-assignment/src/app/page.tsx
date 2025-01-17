import React from "react";
import StudentCard from "./components/StudentCard";

const Home: React.FC = () => {
  const students = [
    { name: "Ali", age: 15, rollNumber: "001", studentClass: "10th Grade" },
    { name: "Sara", age: 14, rollNumber: "002", studentClass: "9th Grade" },
    { name: "Shahzaib", age: 16, rollNumber: "003", studentClass: "11th Grade" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
        />
      ))}
    </div>
  );
};

export default Home;
