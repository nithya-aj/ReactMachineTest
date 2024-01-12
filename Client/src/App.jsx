import "./App.css";
import Sidebar from "./Components/Sidebar";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="bg-primary h-screen flex ">
      <div className="w-[14%] bg-secondary h-full">
        <Sidebar />
      </div>
      <div className="w-[86%] h-full">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
