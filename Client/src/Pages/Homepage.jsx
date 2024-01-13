import user from "../../../UI/Assets/Rectangle 10.png";
import DataTable from "../Components/DataTable";
import LineChartCmp from "../Components/LineChartCmp";
import PieChartCmp from "../Components/PieChartCmp";
import UserCard from "../Components/UserCard";

const Homepage = () => {
  const currentTime = new Date().getHours();
  console.log(currentTime);
  let message;
  if (currentTime < 12) {
    message = "Good Morning! 🌞";
  } else if (currentTime < 18) {
    message = "Good afternoon! ☀️";
  } else {
    message = "Good evening! 🌇";
  }

  return (
    <div className="p-9 pt-3 h-full flex flex-col gap-2">
      <div className=" flex items-center justify-between h-14 ">
        <div className="text-black font-medium flex items-center ">
          {message}
        </div>
        <div className="p-2 flex gap-2 bg-white rounded-md ">
          <p className="font-medium text-[15px]">
            John Doe <br />
            <span className="font-thin text-[10px] line-clamp-1">
              john@doe.com
            </span>
          </p>
          <div className="rounded-lg flex items-center">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full pr-14 gap-2">
        <div className="h-[52%] flex gap-3 ">
          <div className="w-[70%]">
            <LineChartCmp />
          </div>
          <div className="w-[30%]">
            <PieChartCmp />
          </div>
        </div>
        <div className="flex h-[47%] gap-3">
          <div className="w-[80%]">
            <DataTable />
          </div>
          <div className="w-[20%]">
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
