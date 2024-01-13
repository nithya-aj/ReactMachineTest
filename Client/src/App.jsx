import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Homepage from "./Pages/Homepage";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-primary h-screen flex ">
      <div className={` bg-secondary h-full ${isOpen ? "w-[14%]" : "w-[5%]"} `}>
        <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      </div>
      <div className={` ${isOpen ? "w-[86%]" : "w-[95%]"} `}>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
