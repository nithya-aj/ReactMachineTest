/* eslint-disable react/prop-types */
import Briefcase from "../../../UI/Assets/Briefcase.png";
import StatBoard from "../../../UI/Assets/StatBoard.png";
import Circled_Menu from "../../../UI/Assets/Circled Menu.png";
import Support from "../../../UI/Assets/Support.png";
import Plugins from "../../../UI/Assets/Puzzle.png";
import Help from "../../../UI/Assets/Help.png";
import Shutdown from "../../../UI/Assets/Shutdown.png";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FcBriefcase } from "react-icons/fc";
import { RiShutDownLine } from "react-icons/ri";
import { useEffect } from "react";

const Sidebar = ({ isOpen, setIsOpen, handleSidebar }) => {
  const items = [
    {
      name: "Dashboard",
      img: Circled_Menu,
    },
    {
      name: "Support",
      img: Support,
    },
    {
      name: "Plugins",
      img: Plugins,
    },
    {
      name: "Help",
      img: Help,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1360);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  return isOpen ? (
    <div className="flex flex-col relative">
      <div
        className={`flex justify-end left-48 text-2xl text-white h-10 p-3 cursor-pointer `}
      >
        <MdOutlineDoubleArrow className="rotate-180" onClick={handleSidebar} />
      </div>
      <div className="flex flex-col h-1/6 relative items-center justify-center  ">
        <img src={Briefcase} alt="" />
        <img src={StatBoard} alt="" />
      </div>
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col gap-5 items-end pt-24">
          {items.map((item, id) => {
            return (
              <>
                <div
                  key={id}
                  className={`flex items-center gap-3 h-10 w-10/12 px-3 rounded-l-lg hover:text-black hover:bg-white cursor-pointer duration-500 ${
                    item.name === "Dashboard"
                      ? "bg-white text-black"
                      : "bg-[#1a1f30] text-white"
                  } `}
                >
                  <img src={item.img} alt="" />
                  <p className="flex items-center">{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="h-12 flex items-center w-full bg-white text-red-500 justify-center gap-2 cursor-pointer">
          <p className="flex items-center">Logout</p>
          <img src={Shutdown} alt="" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col relative">
      <div
        className={`flex justify-end left-48 text-white h-10 px-1 cursor-pointer `}
      >
        <MdOutlineDoubleArrow onClick={handleSidebar} />
      </div>
      <div className="flex flex-col h-[5%] relative items-center text-4xl ">
        <FcBriefcase />
      </div>
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col items-center gap-5 pt-[10rem] ">
          {items.map((item, id) => {
            return (
              <>
                <div
                  key={id}
                  className={`flex items-center gap-3 h-10 w-10 px-3 rounded-lg hover:text-black hover:bg-white cursor-pointer duration-500 ${
                    item.name === "Dashboard"
                      ? "bg-white text-black"
                      : "bg-[#1a1f30] text-white"
                  } `}
                >
                  <img src={item.img} alt="" />
                </div>
              </>
            );
          })}
        </div>
        <div className="h-12 flex items-center w-full bg-white text-red-500 justify-center gap-2">
          <RiShutDownLine />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
