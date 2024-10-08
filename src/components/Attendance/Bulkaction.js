
import React from 'react'

const Bulkaction = () => {
  return (
    <div className="w-[254px] h-[149px] mx-[800px]  bg-white rounded-[20px] flex-col justify-start items-start gap-[18px] inline-flex z-10">
        <span className="justify-center items-center gap-2.5 inline-flex">
            <p className="w-[174px] text-[#484848] text-base font-semibold font-['Inter']">Mark all as present</p>
        </span>
        <span className="justify-center items-center gap-2.5 inline-flex">
            <p className="w-[174px] text-[#484848] text-base font-semibold font-['Inter']">Mark all as Absent</p>
        </span>
        <span className="justify-center items-center gap-2.5 inline-flex">
            <p className="text-[#484848] text-base font-semibold font-['Inter']">Mark all as left</p>
        </span>
</div>
  )
}

export default Bulkaction