import React, { useEffect, useState, useRef } from "react";
import DisplayColomboWeather from "./DisplayColomboWeather";
import { Button } from "antd";

const WeatherColombo = () => {
  const [refresh, setRefresh] = useState(false);
  const responseObjRef = useRef({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=7&lon=79&units=metric&APPID=f80f4a10601675bced77e3155bb02e80`
    )
      .then((response) => response.json())
      .then((data) => {
        responseObjRef.current = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const getForecast = () => {
    setRefresh(!refresh);
  };
    console.log( responseObjRef );
  return (
    <div>
      {typeof responseObjRef.current.main != "undefined" ? (
        <DisplayColomboWeather data={responseObjRef.current} />
      ) : (
        ""
      )}
      <Button className="btn btn-danger" onClick={getForecast}>
        Refresh
      </Button>
    </div>
  );
};

export default WeatherColombo;
