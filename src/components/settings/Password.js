
import React from 'react'

const Password = () => {
  return (
    <div className="w-[519px] h-[299px] left-[822px] top-[177px] absolute flex-col justify-start items-center gap-12 flex">
    <div className="self-stretch h-[193px] flex-col justify-start items-center gap-[39px] flex">
        <div className="w-full h-[193px] flex-col justify-start items-start gap-3.5 flex">
            <div className="self-stretch pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#f39b3b] justify-start items-center gap-3 inline-flex">
                <input className="text-[#888888] text-base font-medium font-['Inter'] outline-none w-full"
                placeholder='Current Password'
                type='text'
                />
            </div>
            <div className="self-stretch pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#909090] justify-start items-center gap-3 inline-flex">
            <input className="text-[#888888] text-base font-medium font-['Inter'] outline-none w-full"
                placeholder='New Password'
                type='text'
                />
            </div>
            <div className="self-stretch pl-[17px] pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#909090] justify-start items-center gap-3 inline-flex">
            <input className="text-[#888888] text-base font-medium font-['Inter'] outline-none w-full"
                placeholder='Confirm Password'
                type='text'
                />
            </div>
        </div>
    </div>
    <div className="self-stretch px-2.5 py-[18px] bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-lg font-semibold font-['Inter']">Save</div>
    </div>
</div>
  )
}

export default Password