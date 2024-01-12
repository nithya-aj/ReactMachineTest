import user from "../../../UI/Assets/Rectangle 10.png";

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
    <div className="p-8 h-full flex flex-col">
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
      <div className="">Home</div>
    </div>
  );
};

export default Homepage;
