import * as React from "react";

const Onmyradar = (props) => {
  // console.log(props.list);
  return (
    <div className=" container-lg table-container text-center">
      <div className="table-text-container p-30">
        <h3 className="pt-2">
          <u>On My Radar</u>
        </h3>
        <br />
        <p className="lead">Games that have piqued my interest</p>
      </div>
      <table className="table table-striped text-center table-dark">
        <thead className="">
          <tr>
            <th scope="col" style={{ "text-decoration": "underline" }}>
              {" "}
              Date{" "}
            </th>
            <th scope="col" style={{ "text-decoration": "underline" }}>
              {" "}
              Game{" "}
            </th>
            <th scope="col" style={{ "text-decoration": "underline" }}>
              {" "}
              Thoughts{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((d) => {
            // console.log(d.content.$t.split(", "));
            var splitarray = d.content.$t.split(", ");
            return splitarray[2] === undefined ? null : (
              <tr>
                <th scope="row" className="">
                  {d.title.$t}
                </th>
                <td className="align-middle">
                  {splitarray[0].replace("game: ", "")}
                </td>
                <td className="align-middle">
                  {splitarray[2].replace("interestinstreaming: ", "")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Onmyradar;
