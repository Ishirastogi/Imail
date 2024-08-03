import React, { useEffect } from "react";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const[text, setText]= useState("")
  const {user}= useSelector(store=>store.app)
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const logoutHandler= async()=>{
    try {
      const res= await axios.get("http://localhost:8080/api/v1/user/logout",)
      console.log(res);
      toast.success(res.data.message);
      dispatch(setUser(null))
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    dispatch(setSearchText(text));
  },[])
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://i.pinimg.com/originals/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Imail</h1>
        </div>
      </div>
     
      {
        user && (
          <>
<div className="w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-3 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input value={text} onChange={(e)=>setText(e.target.value)}
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full outline-none px-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <BsQuestionCircle size={"24px"} />
        </div>

        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <IoMdSettings size={"24px"} />
        </div>

        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <TbGridDots size={"24px"} />
        </div>
        <span onClick={logoutHandler} className="underline cursor-pointer">Logout</span>
        <RxAvatar
          googleid={user.profilePhoto}
          size="40"
          round={true}
        />
      </div>
      </>
        )
      }
      
    </div>
  );
};

export default Navbar;
