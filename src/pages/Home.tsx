import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/form")}>FORM</button>
    </div>
  );
};

export default Home;
