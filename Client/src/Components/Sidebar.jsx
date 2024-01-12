import Briefcase from "../../../UI/Assets/Briefcase.png";
import StatBoard from "../../../UI/Assets/StatBoard.png";
import Circled_Menu from "../../../UI/Assets/Circled Menu.png";
import Support from "../../../UI/Assets/Support.png";
import Plugins from "../../../UI/Assets/Puzzle.png";
import Help from "../../../UI/Assets/Help.png";
import Shutdown from "../../../UI/Assets/Shutdown.png";
const Sidebar = () => {
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

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center h-2/6 ">
        <img src={Briefcase} alt="" />
        <img src={StatBoard} alt="" />
      </div>
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col gap-5 items-end pt-12">
          {items.map((item) => {
            return (
              <>
                <div
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
        <div className="h-12 flex items-center w-full bg-white text-red-500 justify-center gap-2">
          <p className="flex items-center">Logout</p>
          <img src={Shutdown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
