import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [planetsInfo, setPlanetsInfo] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
      headers: {
        "X-RapidAPI-Key": "fa16bbeba3msh659eb472112419ep1f7f7djsnd35911ebf66e",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };
  
    try {
      const res = await axios.request(options);
      console.log(res.data);
      setPlanetsInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-lg text-red-600">Hello from React!!!</h1>
    </>
  );
};

export default App;
