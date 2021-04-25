import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  isThisWeek,
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} from "date-fns";
//Main Component for exporting

const Schedule = (props) => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const SwitchCase = (props) => {
    // console.log(new Date(props.date + " " + props.data.start));
    switch (props.day) {
      case "Mon":
        return isMonday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3 text-center">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Tue":
        return isTuesday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Wed":
        return isWednesday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Thu":
        return isThursday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Fri":
        return isFriday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Sat":
        return isSaturday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
      case "Sun":
        return isSunday(new Date(props.date)) &&
          isThisWeek(new Date(props.date), { weekStartsOn: 1 }) ? (
          <div className="text-warning p-3">
            <p>{props.data.game}</p>
            <p>{props.data.start}</p>
          </div>
        ) : null;
    }
  };

  return (
    <div className="container-lg">
      <Helmet>
        <title>Millbee Schedule</title>
      </Helmet>

      <div className="row">
        {daysOfWeek.map((day) => (
          <div className="col">
            <div className="text-warning p-3 text-center">{day}</div>
            {props.schedule
              .sort(function (a, b) {
                return (
                  new Date(a.date + " " + a.start) -
                  new Date(b.date + " " + b.start)
                );
              })
              .map((d) => (
                <SwitchCase day={day} date={d.date} data={d} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// {ordered.map((d) =>
//   // console.log(d.date);
//   // console.log(isThisWeek(new Date(d.date), 1));
//   isThisWeek(new Date(d.date), { weekStartsOn: 1 }) ? (
//     <div className="col-sm text-warning"> {d.date} </div>
//   ) : null
// )}

export default Schedule;
