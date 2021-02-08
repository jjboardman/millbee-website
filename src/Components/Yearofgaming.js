import * as React from "react";
import { useState, useEffect } from "react";
//
//
// const Yearoftable = (props) => {
//   return(
//
//   )
// }

// console.log(reply);
const Yearofgaming = (props) => {
  // console.log(props.list);
  return (
    <div className="table-container container-lg">
      <div className="table-text-container p-30">
        <h3 className="text-center yellow">
          <u>31 Years of Gaming Challenge!</u>
        </h3>
        <p className="lead text-center">
          Last year thoughout January I played 30 games to celebrate 30 years of
          gaming. It was a massively fun challenge to do, althougth limiting it
          to just one month left me having to pick games I could beat in a day
          or just leave games half played.{" "}
        </p>
        <p className="text-center">
          For 2021 I will be doing the 31 years of gaming challenge, but now
          spaced out across all of 2021 instead of just one month. This allows
          me to pick longer games than before as I won't have to get through
          them in a single day. My goal is that by the end of the year I will
          have beaten a game released from each year starting 1990.
        </p>
        <p className="text-center">
          The games themselves will be split up across the year to fit around
          major releases and when I have nothing else I really want to play. The
          List below will be filled in throughout the year as I finalize the
          games that will be played.
        </p>
        <p className="text-center">
          <p className="complete mb-0">Completed Game</p>
          <a href="#" id="example-of-complete-link">
            Complete with Link
          </a>{" "}
          <p className="mb-0">Not Complete/Played</p>
        </p>
      </div>
      <table className="table table-striped table-sm text-center table-dark">
        <thead>
          <tr>
            <th scope="col" style={{ "text-decoration": "underline" }}>
              {" "}
              Year{" "}
            </th>
            <th scope="col" style={{ "text-decoration": "underline" }}>
              {" "}
              Game{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((d) => {
            // console.log(d.content.$t.split(", "));
            var splitarray = d.content.$t.split(", ");
            // if (d.content.$t.split(", ")[1]) {
            //   console.log(
            //     d.content.$t.split(", ")[1].search("complete") === -1
            //   );
            // }
            return (
              <tr>
                <th scope="row">{d.title.$t}</th>
                <td>
                  {splitarray[0].length === 0 ? (
                    "TBA"
                  ) : splitarray[1] === undefined ? (
                    splitarray[0].replace("game: ", "")
                  ) : splitarray[1].search("complete") === -1 ? (
                    <a href={splitarray[1].replace("link: ", "")}>
                      {splitarray[0].replace("game: ", "")}
                    </a>
                  ) : (
                    <p style={{ display: "inline" }} className="complete">
                      {splitarray[0].replace("game: ", "")}
                    </p>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// {d.content.$t.split(", ")[0].length === 0 ? (
//   <p style={{ display: "inline" }}>TBA</p>
// ) : d.content.$t.split(", ")[1] === undefined ? (
//   <p style={{ display: "inline" }}>
//     {d.content.$t.split(", ")[0].replace("game: ", "")}
//   </p>
// ) : (
//   <a
//     href={d.content.$t.split(", ")[1].replace("link: ", "")}
//   >
//     {d.content.$t.split(", ")[0].replace("game: ", "")}
//   </a>
// )}

export default Yearofgaming;
