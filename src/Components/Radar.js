import * as React from "react";

const Onmyradar = (props) => {
  // console.log(props.list);
  return (
    <div className="container-lg">
      <div className="table-container text-center">
        <div className="table-text-container p-30">
          <h3 className="pt-2">
            <u>On My Radar</u>
          </h3>
          <br />
          <p className="lead">Games that have piqued my interest</p>
        </div>
        <table className="table table-responsive table-striped text-center table-dark ">
          <thead className="">
            <tr>
              <th scope="col" style={{ width: "33%" }}>
                {" "}
                <u>Release Date</u>{" "}
              </th>
              <th scope="col" style={{ width: "33%" }}>
                {" "}
                <u>Game</u>{" "}
              </th>
              <th scope="col" style={{ width: "33%" }}>
                {" "}
                <u>Thoughts</u>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((d) => {
              // console.log(d.content.$t.split(", "));
              var splitarray = d.content.$t.split(", ");
              return splitarray[2] === undefined ? null : (
                <tr>
                  <td scope="row" className="" style={{ color: "#efbf3f" }}>
                    {d.title.$t}
                  </td>
                  <td className="">{splitarray[0].replace("game: ", "")}</td>
                  <td className="">
                    {splitarray[2].replace("interestinstreaming: ", "")}
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

export default Onmyradar;
