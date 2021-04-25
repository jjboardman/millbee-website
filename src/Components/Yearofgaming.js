import * as React from "react";

const Yearofgaming = (props) => {
  return (
    <div className="container-lg">
      <div className="table-container">
        <div className="table-text-container p-30">
          <h3 className="text-center yellow">
            <u>31 Years of Gaming Challenge!</u>
          </h3>
          <p className="lead text-center">
            Last year thoughout January I played 30 games to celebrate 30 years
            of gaming. It was a massively fun challenge to do, althougth
            limiting it to just one month left me having to pick games I could
            beat in a day or just leave games half played.{" "}
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
            major releases and when I have nothing else I really want to play.
            The List below will be filled in throughout the year as I finalize
            the games that will be played.
          </p>
          <div className="text-center">
            <p className="complete mb-0">Completed Game</p>
            <a href="#" id="example-of-complete-link">
              Complete with Link
            </a>{" "}
            <p className="mb-0">Not Complete/Played</p>
          </div>
        </div>
        <table className="table table-responsive table-striped table-sm text-center table-dark">
          <thead>
            <tr>
              <th scope="col" style={{ "padding-left": "30px" }}>
                {" "}
                <u>Year</u>{" "}
              </th>
              <th scope="col" style={{ width: "100%" }}>
                {" "}
                <u>Game</u>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((d) => {
              var splitarray = d.content.$t.split(", ");

              return (
                <tr>
                  <th scope="row" style={{ "padding-left": "30px" }}>
                    {d.title.$t}
                  </th>
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
    </div>
  );
};

export default Yearofgaming;
