import React from "react";
import "./displayColmbo.css";
import moment from "moment";

const DisplayColomboWeather = ({ data }) => {
  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };
  return (
    <div>
      <div className="card-body">
        <h1 className="m-2">
          {data.name} | {data.sys.country}
        </h1>
        <div className="data m-1">{timeConverter(data.dt)}</div>
        <div className="description">
          <img
            className="data-img m-2"
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          <div className="data-main m-2">{data.weather[0].main}</div>
          <div className="data-main m-2">" {data.weather[0].description} "</div>
          <div className="data m-2">Temperature: {data.main.temp} °c</div>
          <div className="data m-2">Feels Like: {data.main.feels_like} °c</div>
          <div className="data m-2">
            Wind speed: {data.wind.speed} miles/hour
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayColomboWeather;
