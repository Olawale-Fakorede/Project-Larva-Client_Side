
import React from 'react'

const Profile = () => {
  return (
    <div className="h-[417px] left-[822px] top-[177px] absolute flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-[311px] flex-col justify-start items-center gap-[39px] flex">
            <div className="h-[148px] flex-col justify-start items-center gap-[18px] flex">
                <img className="w-[108px] h-[108px] rounded-full" src="Images/passPortOne.svg" alt='Pics'/>
                <div className="text-center text-[#cc781d] text-lg font-semibold font-['Inter']">Change Picture</div>
            </div>
            <div className="h-[124px] w-96 flex-col justify-start items-start gap-3.5 flex">
                <span className="self-stretch pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#909090] justify-start items-center gap-3 inline-flex">
                    <input className="text-[#888888] text-base font-medium font-['Inter'] outline-none"
                        type='text'
                        placeholder= "Name" 
                    />
                </span>
                <span className="self-stretch pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#909090] justify-start items-center gap-3 inline-flex">
                <input className="text-[#909090] text-base font-medium font-['Inter'] outline-none"
                        type='text'
                        placeholder= "Course" 
                    />
                </span>
            </div>
        </div>
        <span className="self-stretch px-2.5 py-[18px] opacity-60 bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-white text-lg font-semibold font-['Inter']">Save</p>
        </span>
    </div>
   
  )
}

export default Profile