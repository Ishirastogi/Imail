import React from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdInbox,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:sgadow-md"
        >
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {SidebarItems.map((item, index) => {
          return (
            <div
              key={item.index + item.text}
              className="flex items-center gap-2 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200"
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
