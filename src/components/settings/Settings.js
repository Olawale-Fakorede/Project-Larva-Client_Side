
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdLogout } from "react-icons/md";
import Profile from './Profile';
import Password from './Password';

const Settings = () => {
    const [showPassword, setShowPassword] = useState(false);
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

  function changeProfile() {
    setShowPassword(true);
    document.getElementById('profile').style.backgroundColor = 'grey';
    document.getElementById('password').style.backgroundColor = 'white';
  };

//   function changePassword() {
//     document.getElementById('password').style.visibility = 'visible';
//     document.getElementById('profile').style.visibility = 'hidden';
//   }

const changePassword = () => {
    setShowPassword(false);
    document.getElementById('password').style.backgroundColor = 'grey';
    document.getElementById('profile').style.backgroundColor = 'white';
  };
    
  return (
<div className="w-full h-[781px] relative bg-[#faf9f9]">
    <div className="w-[1103px] pl-6 pr-9 py-4 left-[247px] top-[1px] absolute bg-white border-b border-[#e6e6e6] justify-between items-center inline-flex">
        <p className="text-[#111111] text-xl font-semibold font-['Inter']">School Attendance</p>
        <div className="justify-start items-center gap-[31px] flex">
            <div className="w-[140px] flex-col justify-start items-start gap-2 inline-flex">
                <p className="self-stretch text-[#333333] text-lg font-medium font-['Inter']">Ayantoye David</p>
                <p className="self-stretch text-[#666666] text-sm font-medium font-['Inter']">Web Development</p>
            </div>
            <img className="w-[50px] h-[50px] rounded-full" src="Images/passPortOne.svg" alt='Passport'/>
        </div>
    </div>


    <aside className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[287px] inline-flex">
            <div className="self-stretch h-[375.38px] flex-col justify-start items-start gap-[142px] flex">
                <img className="w-[104px] h-[37.37px]" src="Images/Logo.png" alt='Logo'/>
                <div className="self-stretch h-[196px] flex-col justify-start items-start gap-10 flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter']" onClick={handleAttendance}>Mark Attendance</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter']" onClick={handleRegister}>Register Students</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter']" onClick={handleStudent}>Students List</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#cc781d] text-base font-semibold font-['Inter']" onClick={handleSetting}>Settings</div>
                    </div>
                </div>
            </div>

            {/* Last(Log out) */}
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-center items-center gap-2.5 flex"  onClick={handleLogOut}>
                    <MdLogout className="mr-4 mt-1" />
                    <p className="text-[#222222] text-base font-semibold font-['Inter']">Log Out</p>
                </div>
            </div>
        </div>
    </aside>

    <div className="h-[62px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
        <p className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter'] h-[22px] flex-col justify-start items-center gap-[18px] flex pl-96">
            Settings
        </p>
    </div>
    
    <div className="w-[461px] h-[146px] left-[247px] top-[312px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch pl-2.5 pr-5 py-5  border-r-2 border-[#cc781d] justify-between items-center inline-flex"
            onClick={changeProfile}
            id='profile'
        >
            <p className="text-[#222222] text-base font-medium font-['Inter']">Edit Profile</p>
        </div>
        <div className="self-stretch pl-2.5 pr-5 py-5 border-r-2 justify-between items-center inline-flex"
            onClick={changePassword}
            id='password'
        >
            <p className="text-[#222222] text-base font-medium font-['Inter']">Change Your Password</p>
        </div>
    </div>

        {/* <Profile /> */}
        {/* <Password /> */}
        {showPassword ? <Profile /> : <Password />}
</div>
  )
}

export default Settings