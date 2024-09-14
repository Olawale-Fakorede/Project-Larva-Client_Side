
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";

const Register = () => {

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

const handleLogOut = () => {
    // Your login logic here
    navigate('/');
  };


  const [valueForm, setValueForm] = useState({
    name: '',
    studentNumber: '',
    course: '',
    cohort: ''
  });

  const handleChange = (e) => {
    const { name, value} = e.target
    setValueForm({
      ...valueForm,
      [name]: value
    })
};


const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Assuming valueForm is already defined and contains the data to post
  
    try {
      const response = await axios.post('http://localhost:6040/api/students', valueForm);
  
      // Handle successful response (e.g., display success message, redirect)
      console.log('Data successfully posted:', response.data); // Example usage
    } catch (error) {
      // Handle errors gracefully (e.g., display error message)
      console.error('mError posting data:', error);
    }
  };

  return (
        <div className="w-[1300px] h-fit relative bg-[#faf9f9]">
            <div className="w-[1103px] pl-6 pr-9 py-4 left-[247px] top-[1px] absolute bg-white border-b border-[#e6e6e6] justify-between items-center inline-flex">
                <div className="text-[#111111] text-xl font-semibold font-['Inter']">School Attendance</div>
                <div className="justify-start items-center gap-[31px] flex">
                    <div className="w-[140px] flex-col justify-start items-start gap-2 inline-flex">
                        <div className="self-stretch text-[#333333] text-lg font-medium font-['Inter']">Ayantoye David</div>
                        <div className="self-stretch text-[#666666] text-sm font-medium font-['Inter']">Web Development</div>
                    </div>
                    <img className="w-[50px] h-[50px] rounded-full" src="Images/passPortOne.svg" alt='Passport' />
                </div>
            </div>

    <aside className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[581.38px] flex-col justify-start items-start gap-[287px] inline-flex">
            <div className="self-stretch h-[375.38px] flex-col justify-start items-start gap-[142px] flex">
                <img className="w-[104px] h-[37.37px]" src="Images/Logo.png" alt='Logo' />
                <div className="self-stretch h-[196px] flex-col justify-start items-start gap-10 flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleAttendance}>Mark Attendance</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#cc781d] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleRegister}>Register Students</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter'] cursor-pointer" onClick={handleStudent}>Students List</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter'] cursor-pointer">Settings</div>
                    </div>
                </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-center items-center gap-2.5 flex" onClick={handleLogOut}>
                    <MdLogout className="mr-4 mt-1" />
                    <div className="text-[#222222] text-base font-semibold font-['Inter']">Log Out</div>
                </div>
            </div>
        </div>
    </aside>
    
    <div className="h-[62px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
        <div className="self-stretch h-[22px] flex-col justify-start items-center gap-[18px] flex">
            <p className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter'] ml-96">Register Students</p>
        </div>
    </div>

    <div className="h-[555px] left-[584px] top-[166px] absolute flex-col justify-start items-center gap-12 inline-flex">
        <form >
        <div className="self-stretch h-[449px] flex-col justify-start items-center gap-[39px] flex">
            <div className="h-[148px] flex-col justify-start items-center gap-[18px] flex">
                <div className="w-[108px] h-[108px] relative">
                    <div className="w-[108px] h-[108px] left-0 top-0 absolute bg-[#e3e3e3] rounded-full" />
                    <div className="w-[35px] h-[39.38px] left-[37px] top-[34px] absolute">
                    </div>
                </div>
                <div className="self-stretch text-center text-[#cc781d] text-lg font-semibold font-['Inter']">Add Photo</div>
            </div>
            <div className="h-[262px] flex-col justify-start items-start gap-3.5 flex pb-10">
                <div className="self-stretch pl-[17px] pr-2.5 py-[15px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
                    <input className="h-7 w-96 text-[#1a1919] text-base font-medium font-['Inter'] py-[15px] focus:border-t-slate-500 outline-none" 
                        placeholder='Name'
                        type="text" 
                        onChange={handleChange}
                        name='name'
                        value={valueForm.name} 
                    />
                </div>
                <div className="self-stretch pl-[17px] pr-2.5 py-[15px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
                <input className="h-7 w-96 text-[#1a1919] text-base font-medium font-['Inter'] py-[15px] focus:border-t-slate-500 outline-none" 
                        placeholder='Student Number'
                        type="text" 
                        onChange={handleChange}
                        name='studentNumber'
                        value={valueForm.studentNumber} 
                    />
                </div>
                <div className="self-stretch pl-[17px] pr-2.5 py-[15px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
                <input className="h-7 w-96 text-[#1a1919] text-base font-medium font-['Inter'] py-[15px] focus:border-t-slate-500 outline-none" 
                    placeholder='Course'
                    type="text" 
                    onChange={handleChange}
                    name='course'
                    value={valueForm.course} 
                />
                </div>
                <div className="self-stretch pl-[17px] pr-2.5 py-[15px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
                <input className="h-7 w-96 text-[#1a1919] text-base font-medium font-['Inter'] py-[15px] focus:border-t-slate-500 outline-none" 
                    placeholder='Cohort'
                    type="text" 
                    onChange={handleChange}
                    name='cohort'
                    value={valueForm.cohort} 
                />
                </div>
            </div>
        </div>
        <button className="mt-10 w-full self-stretch px-2.5 py-[15px] bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
        onSubmit={handleSubmit}
        >
            <p className="text-white text-lg font-semibold font-['Inter']">
                Register Student
            </p>
        </button>
        </form>
    </div>
</div>
  )
}

export default Register