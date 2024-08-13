import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  return (
    <div className="h-full md:h-full lg:h-full w-full md:w-full lg:w-full flex md:flex lg:grid lg:grid-cols-2 bg-white">
        <div className='w-3/4 h-fit md:w-fit lg:h-fit bg-white justify-center m-12 md:m-20 lg:m-28 rounded-lg'>
            <div className="h-10 flex-col justify-start items-start gap-5 flex ">
                <img className="w-24 md:w-28 lg:w-36 h-10 md:h-11 lg:h-14" src="/Images/Logo.png" alt="Logo.png"/>
                <p className="self-stretch text-[#111111] text-sm md:text-lg lg:text-2xl font-semibold font-['Inter']">Log in to your Account</p>
            </div>
            <div className="h-7 w-full mt-16 md:mt-20 lg:mt-24 pl-2 md:p-4 pr-2.5 py-4  bg-[#f8f8f8] rounded-lg border border-[#d3d3d3] justify-start items-center gap-5 flex flex-row">
                <MdOutlineEmail className="text-[#afafaf]"/>
                <p className="text-[#afafaf] text-base font-medium font-['Inter']">
                    Email 
                    <input type="text" placeholder="Enter Email Address" className="h-3 md:h-5 w-44 md:w-96 lg:w-fit ml-1 pl-3 text-sm placeholder:text-xs bg-[#f8f8f8] focus:border-white"/>
                </p>
            </div>
            <div className="h-5 w-full mt-7 md:mt-9 pl-2 pr-2.5 py-[18px] bg-[#f8f8f8] rounded-[10px] border border-[#d3d3d3] justify-start items-center gap-3 inline-flex">
                <IoIosLock className="text-[#afafaf]"/>
                <p className="text-[#afafaf] text-base font-medium font-['Inter']">
                    Password
                    <input type="text" placeholder="Enter Password" className="h-5 w-36 md:w-96 lg:w-fit ml-1 pl-3 text-sm placeholder:text-xs bg-[#f8f8f8] focus:border-white"/>
                </p>
            </div>

            <div className="h-5 w-full px-2.5 py-5 mt-8 md:mt-12 bg-[#f39b3b] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <p className="text-white text-lg md:text-xl font-semibold font-['Inter']">Log In as Tutor</p>
            </div>

            <div className="h-5 w-full px-2.5 py-5 mt-5 md:mt-7 bg-[#1e1205] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <p className="text-white text-lg md:text-xl font-semibold font-['Inter']">Log In as Super Admin</p>
            </div>
        </div>

        <div className="w-fit md:w-full lg:w-fit h-fit md:h-full lg:h-fit hidden md:hidden lg:block md:relative md:-top-5 lg:relative lg:-top-5">
            <img className="w-[720px] h-[677px]" src="Images/Picture.svg" alt=""/>
        </div>
    </div>
  )
}

export default Login