
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Getattendance = () => {
    
const [getStudent, setGetStudent] = useState([]);

useEffect(() => {
  axios.get('http://localhost:6040/api/students')
    .then(response => {
      console.log(response.data);
      setGetStudent(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, [getStudent]);

    // For the buttons
const [ attendance, setAttendance ] = useState({
    present: false,
    absent: false,
    left: false
});

useEffect(() => {
    const fetchData = async () => {
      await fetchAttendanceData();
    };
    fetchData();
  }, 
);
  
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://localhost:6040/api/attendance');
      setAttendance(response.data);
      updateButtonColors();
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case 'present':
        setAttendance({ present: true, absent: false, left: false });
        break;
      case 'absent':
        setAttendance({ present: false, absent: true, left: false });
        break;
      case 'left':
        setAttendance({ present: false, absent: false, left: true });
        break;
      default:
        break;
    }
    updateButtonColors();
    sendAttendanceData();
  };

  const sendAttendanceData = async () => {
    try {
      await axios.post('http://localhost:6040/api/attendance', attendance);
      console.log('Attendance updated successfully');
    } catch (error) {
      console.error(error);
    }
  };


  const updateButtonColors = () => {
    // const presentBtn = document.getElementById('present-btn');
    // const absentBtn = document.getElementById('absent-btn');
    // const leftBtn = document.getElementById('left-btn');

    // if (attendance.present) {
    //   presentBtn.style.backgroundColor = '#0F0'; // Green
    //   absentBtn.style.backgroundColor = '#fff';
    //   leftBtn.style.backgroundColor = '#fff';
    // } else if (attendance.absent) {
    //   presentBtn.style.backgroundColor = '#fff';
    //   absentBtn.style.backgroundColor = '#FFFF00'; // Yellow
    //   leftBtn.style.backgroundColor = '#fff';
    // } else if (attendance.left) {
    //   presentBtn.style.backgroundColor = '#fff';
    //   absentBtn.style.backgroundColor = '#fff';
    //   leftBtn.style.backgroundColor = '#F00'; // Red
    // }
  };

  

  return ( 
  <div className='bg-black w-[1103px] h-fit pl-[30px] pr-[37px] py-5 left-[247px] top-[297px] absolute border-b border-[#e6e6e6] grid grid-cols-5 justify-center gap-[10px]'>

    {getStudent.map((student) => (
        <div className='text-white font-bold font-[inter] border-1 rounded-md items-center'>
        <h1>{student.name}</h1>
        <p>{student.studentNumber}</p>
        <p>{student.course}</p>
        <span className='flex flex-row gap-3'>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='present-btn'
            onClick={handleButtonClick('present')}
            >
                Present
            </button>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='absent-btn'
            onClick={handleButtonClick('absent')}
            >
                Absent
            </button>
            <button className='border-1 rounded-full p-auto w-7 items-center  font-extrabold '
            id='left-btn'
            onClick={handleButtonClick('left')}
            >
                Left
            </button>
        </span>
        </div>
    ))}

</div>
  )
}

export default Getattendance