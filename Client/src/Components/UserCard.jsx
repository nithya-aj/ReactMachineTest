import profile from "../../../UI/Assets/media.png";
import facebook from "../../../UI/Assets/facebook.png";
import instagram from "../../../UI/Assets/instagram.png";
import twitter from "../../../UI/Assets/twitter.png";

const UserCard = () => {
  return (
    <div className="shadow-lg border">
      <div className={`h-2/3`}>
        <img src={profile} alt="" className="h-full w-full " />
      </div>
      <div className="h-1/3 flex flex-col items-center ">
        <p className="font-semibold text-[12px] flex items-center">John Doe</p>
        <p className="font-thin text-[10px] flex items-center">CEO</p>
        <div className="flex items-center gap-2">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
