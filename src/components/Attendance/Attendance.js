
import { IoMdSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";

const Attendance = () => {

      
  return (
    <div>
        <div className="w-[1400px] h-[781px] relative bg-[#faf9f9]">
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
  <div className="pl-11 pr-16 pt-[37px] pb-[62.62px] left-0 top-0 absolute bg-white border-r border-[#e6e6e6] flex-col justify-start items-center inline-flex">
    <div className="self-stretch h-[681.38px] flex-col justify-start items-start gap-[287px] inline-flex">
      <div className="h-[375.38px] flex-col justify-start items-start gap-[142px] flex">
        <img className="w-[104px] h-[37.37px]" src="/Images/Logo.png" alt="Logo"/>
        <div className="self-stretch h-[196px] flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter']">Mark Attendance</div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter']">Register Students</div>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter']">Student List</div>
          </div>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#222222] hover:text-[#cc781d] text-base font-semibold font-['Inter']">Settings</div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-4 inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-[#222222] text-base font-semibold font-['Inter']">Log Out</div>
        </div>
      </div>
    </div>
  </div>

      {/* Serch and Date aspect line */}
  <div className="w-[1103px] h-[215px] pl-[30px] pr-[37px] py-5 left-[247px] top-[82px] absolute border-b border-[#e6e6e6] flex-col justify-start items-start gap-[29px] inline-flex">
    <div className="self-stretch h-[91px] flex-col justify-start items-center gap-[18px] flex">
      <div className="self-stretch text-center text-[#1a1a1a] text-lg font-semibold font-['Inter']">Mark Attendance</div>
      <div className="self-stretch justify-start items-center gap-[54px] inline-flex">
        <div className="h-[15px] md:w-[] lg:h-[49px] w-[20px] md:w[] lg:w-[940px] pl-5 pr-2.5 py-4 bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-2.5 flex">
          <IoMdSearch className="text-2xl text-[#9b9a9a] font-bold"/>
          <input className="h-[15px] md:w-[] lg:h-[40px] w-[20px] md:w[] lg:w-[890px] text-[#666666] text-base font-medium font-['Inter'] focus:border-none" type="text" placeholder="Search" />
        </div>
        <LuListFilter className="text-2xl text-[#cc781d] font-bold"/>
      </div>
    </div>

    <div className="justify-center items-center flex">
      {/* <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex"> */}
        <div className="w-[1000px] justify-between items-center inline-flex">
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
          <div className="px-3.5 py-[18px] bg-white rounded shadow justify-center items-center gap-16 flex">
            <p className="text-[#2c2c2c] text-base font-semibold font-['Inter']">Bulk Action</p>
            <FaCaretDown className="text-2xl text-[#cc781d] font-bold"/>
          </div>
        </div>
      {/* </div> */}
    </div>
  </div>

      {/* Hero aspect with pics */}
  {/* <div className="h-[398.70px] left-[271px] top-[340px] absolute flex-col justify-start items-start gap-[42px] inline-flex">
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Alexander Lopez</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#4caf50] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Ava Clark</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#4caf50] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Benjamin Lee</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#f44336] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Daniel Garcia</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#ff9800] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Emily Johnson</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#ff9800] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Alexander Lopez</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#4caf50] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Ava Clark</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#f44336] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Benjamin Lee</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#ff9800] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Daniel Garcia</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#f44336] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
      <div className="w-[190px] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-center gap-5 inline-flex">
        <div className="h-[89px] flex-col justify-start items-center gap-3 flex">
          <img className="w-[60px] h-[60px] rounded-full" src="https://via.placeholder.com/60x60" />
          <div className="w-[127px] text-center text-[#222222] text-sm font-medium font-['Inter']">Emily Johnson</div>
        </div>
        <div className="w-[190px] justify-center items-center gap-3 inline-flex">
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">P</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#efefef] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-[#222222] text-[10.90px] font-medium font-['Inter']">A</div>
          </div>
          <div className="w-[33.38px] px-[6.81px] py-[8.17px] bg-[#ff9800] rounded-[6.81px] flex-col justify-center items-center gap-[6.81px] inline-flex">
            <div className="self-stretch text-center text-white text-[10.90px] font-medium font-['Inter']">L</div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

</div>
    </div>
  )
}

export default Attendance
