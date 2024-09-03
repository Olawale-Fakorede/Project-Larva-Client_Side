
import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Studentlist = () => {

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

  return (
    <div>
        <div className="w-[1300px] h-[781px] relative bg-[#f9f9f9]">
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

    <aside 
    className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[287px] inline-flex">
            <div className="h-[375.38px] flex-col justify-start items-start gap-[142px] flex">
                <img className="w-[104px] h-[37.37px]" src="Images/Logo.png" alt='Logo' />
                <div className="self-stretch h-[196px] flex-col justify-start items-start gap-10 flex">
                    <div className="text-[#222222] text-base font-semibold font-['Inter']" onClick={handleAttendance}>Mark Attendance</div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter']" onClick={handleRegister}>Register Students</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#cc781d] text-base font-semibold font-['Inter']" onClick={handleStudent}>Student List</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#222222] text-base font-semibold font-['Inter']">Settings</div>
                    </div>
                </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-center items-center gap-2.5 flex" onClick={handleLogOut}>
                    <MdLogout className="mr-3 mt-1" />
                    <div className="text-[#222222] text-base font-semibold font-['Inter']">Log Out</div>
                </div>
            </div>
        </div>
    </aside>

    <div className="h-[215px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
        <div className="self-stretch h-[91px] flex-col justify-start items-center gap-[18px] flex">
            <div className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter']">Students List</div>
            <div className="self-stretch justify-start items-center gap-[54px] inline-flex">
                <div className="h-[51px] pl-4 pr-2.5 py-4 bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-2.5 flex">
                <IoMdSearch className="text-2xl text-[#9b9a9a] font-bold"/>
                <input className="h-[15px] md:w-[] lg:h-[40px] w-[20px] md:w[] lg:w-[890px] text-[#666666] text-base font-medium font-['Inter'] focus:border-none" 
                type="text" 
                placeholder="Search" 
                />
                </div>
            </div>
        </div>
        <div className="justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[1127px] justify-start items-center gap-[103px] inline-flex">
                <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
                    <p className="w-[109px] text-[#2c2c2c] text-base font-semibold font-['Inter']">Date Selector</p>
                    <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
                </div>
                
                <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
                    <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Course</p>
                    <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
                </div>

                <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
                    <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Select Cohort</p>
                    <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
                </div>
            </div>
            </div>
        </div>
    </div>

    {/* <div className="w-[1003px] px-6 left-[277px] top-[325px] absolute justify-between items-center inline-flex">
        <div className="w-[129px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Name</div>
            <div className="self-stretch h-[369px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ayantoye David</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ayantoye David</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Ife Adelelke</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">James Jerry</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Josh Graham</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Olamide </div>
            </div>
        </div>
        <div className="w-[142px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Course</div>
            <div className="self-stretch h-[369px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">UIUX Design</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Data Analysis</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Cyber Security</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">Web Development</div>
            </div>
        </div>
        <div className="w-[55px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#222222] text-base font-semibold font-['Inter']">Cohort</div>
            <div className="h-[369px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">1</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">3</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
                <div className="self-stretch text-[#666666] text-base font-semibold font-['Inter']">2</div>
            </div>
        </div>
    </div> */}
</div>
    </div>
  )
}

export default Studentlist