
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Date from './Date';
import Course from './Course';
import Cohort from './Cohort';
import Bulkaction from './Bulkaction';
// import Getattendance from './Getattendance';

const Attendance = () => {

  
  const navigate = useNavigate();


  const handleAttendance = () => {
    // Your login logic here
    navigate('/attendance');
};

  const handleRegister = () => {
      // Your login logic here
      navigate('/register');
  };

  const handleStudent = () => {
    // Your login logic here
    navigate('/studentlist');
};

const handleSetting = () => {
  // Your login logic here
  navigate('/settings');
};

const handleLogOut = () => {
  // Your login logic here
  navigate('/');
};

const [selectedComponent, setSelectedComponent] = useState(null);

const handleComponentClick = (component) => {
  setSelectedComponent(component   === selectedComponent ? null : component);

};

const [getStudent, setGetStudent] = useState([]);

// useEffect(() => {
  axios.get('http://localhost:6040/api/students')
    .then(response => {
      console.log(response.data);
      setGetStudent(response.data);
    })
    .catch(error => {
      console.error(error);
    });
// }, []);


// const [ getStudent, setGetStudent ] = useState()

//   axios.get('http://localhost:6040/api/students')
//     .then(response => {
//       console.log(response.data);
//       getStudent(response.data)
//     })
//     .catch(error => {
//       console.error(error);
//     });


// axios.get('http://localhost:6040/api/students')
// console.log(allStudents);

      
  return (
        <div className="w-[375px] lg:w-[1300px] h-full lg:h-[500px] relative bg-[#faf9f9] lg:bg-[#faf9f9]">
          {/* Head */}
          <div className="w-[1103px] pl-6 pr-9 py-4 left-[247px] top-[1px] absolute bg-white border-b border-[#e6e6e6] justify-between items-center inline-flex">
            <div className="text-[#111111] text-xl font-semibold font-['Inter']">School Attendance</div>
            <div className="justify-start items-center gap-[31px] flex">
              <div className="w-[140px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-[#333333] text-lg font-medium font-['Inter']">Ayantoye David</div>
                <div className="self-stretch text-[#666666] text-sm font-medium font-['Inter']">Web Development</div>
              </div>
              <img className="w-[50px] h-[50px] rounded-full" src="Images/passPortOne.svg" alt="Passport" />
            </div>
          </div>

      {/* ASIDE */}
  <aside className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
    <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[100px] inline-flex">
        <img className="w-[104px] h-[37.37px]" src="/Images/Logo.png" alt="Logo"/>

      <div className="h-[275.38px] flex-col justify-start items-start gap-[102px] lg:flex">
        <div className="self-stretch h-[176px] flex-col justify-start items-start gap-7 flex lg:flex">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <p className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleAttendance}>
              Mark Attendance
            </p>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <p className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleRegister}>
              Register Students
            </p>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <p className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleStudent}>
              Student List
            </p>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <p className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleSetting}>
              Settings
            </p>
          </div>

          <div className="justify-start items-center lg:gap-4 inline-flex sm:mt-24">
          <div className="justify-center items-center gap-2.5 flex"
          onClick={handleLogOut}
          >
          <p className="text-[#222222] text-base font-semibold font-['Inter'] inline-flex">
              <MdLogout className="mr-4 mt-1" />
              Log Out
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  </aside>

      {/* Serch and Date aspect line */}
  <div className="w-[1103px] h-[215px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
    <div className="self-stretch h-[91px] flex-col justify-start items-center gap-[18px] flex">
      <div className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter']">Mark Attendance</div>
      <div className="self-stretch justify-start items-center gap-[54px] inline-flex">
        <div className="h-[15px] md:w-[] lg:h-[49px] w-[20px] md:w[] lg:w-[940px] pl-5 pr-2.5 py-4 bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-2.5 flex">
          <IoMdSearch className="text-2xl text-[#9b9a9a] font-bold"/>
          <input className="h-[15px] md:w-[] lg:h-[40px] w-[20px] md:w[] lg:w-[890px] text-[#181818] text-base font-medium font-['Inter'] focus:border-none outline-none" 
          type="text" 
          placeholder="Search" 
          />
        </div>
        <LuListFilter className="text-2xl text-[#cc781d] font-bold"/>
      </div>
    </div>

    <div className="justify-center items-center flex">
        <div className="w-[1000px] justify-between items-center inline-flex">
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex"
          // onClick={() => setShowCalendar(true)}
          >
            <p className="w-[109px] text-[#2c2c2c] text-base font-semibold font-['Inter']">Date Selector</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
            
          </div>
          
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex"
            onClick={() => handleComponentClick("course")}
          >
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Course</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>

          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex"
            onClick={() => handleComponentClick("cohort")}
          >
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Cohort</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex"
            onClick={() => handleComponentClick("bulkaction")}
          >
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Bulk Action</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
        </div>
    </div>

        
        {selectedComponent === "date" && <Date />}
        {selectedComponent === "course" && <Course />}
        {selectedComponent === "cohort" && <Cohort />}
        {selectedComponent === "bulkaction" && <Bulkaction />}
        {/* <Course />
        <Cohort />
        <Bulkaction /> */}
  </div>

      {/* <Getattendance/> */}
      <div className='bg-black w-[1103px] h-fit pl-[30px] pr-[37px] py-5 left-[247px] top-[297px] absolute border-b border-[#e6e6e6] grid grid-cols-5 justify-center gap-[10px]'>

    {getStudent.map((student) => (
        <div className='text-white font-bold font-[inter] border-1 rounded-md items-center'>
        <h1>{student.name}</h1>
        <p>{student.studentNumber}</p>
        <p>{student.course}</p>
        <span className='flex flex-row gap-3'>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='present-btn'
            // onClick={handleButtonClick('present')}
            >
                Present
            </button>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='absent-btn'
            // onClick={handleButtonClick('absent')}
            >
                Absent
            </button>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='left-btn'
            // onClick={handleButtonClick('left')}
            >
                Left
            </button>
        </span>
        </div>
    ))}

</div>
</div>
  )
}

export default Attendance
