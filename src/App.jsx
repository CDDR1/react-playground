import { useEffect } from "react";
import axios from "axios";

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
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
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
