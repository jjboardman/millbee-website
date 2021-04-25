import React, { useRef, useEffect, useState } from "react";
import logo from "./twitchthumbnail.jpg";
import Draggable from "react-draggable";

function RecentBroadcastClips(props) {
  // onStart = () => {
  //   this.setState({ activeDrags: ++this.state.activeDrags });
  // };

  // onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };

  //Method used to set size of thumbnail provided from api call
  var rawthumb = props.thumbnail;

  var slicedthumb = rawthumb.slice(0, -22);

  var realthumb = slicedthumb + "320x180.jpg";

  return (
    <div
      draggable="false"
      href={props.url}
      alt={"Link to" + props.title}
      className="clipcard"
    >
      <div ref={props.cardRef}>
        <div className="decorative-lines"></div>
        <img
          src={rawthumb === "" ? logo : realthumb}
          alt="twitch video thumbnail"
          width="320px"
          height="180px"
        />
        <div className="clip-detail"></div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

function RecentBroadcastContainer(props) {
  return (
    <div className="main-container container-lg">
      <p>Recent Broadcasts</p>

      <div className="title-divider"></div>
      <div className="button-cards carousel slide" data-ride="carousel">
        <div className="clipscontainer carousel-inner">
          {props.pastbcastClips
            .map((d, i) => (
              <RecentBroadcastClips
                title={d.title}
                thumbnail={d.thumbnail_url}
                url={d.url}
                key={i}
              />
            ))
            .slice(props.rby, props.rbx)}
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>

          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
}

const Animation = (props) => {
  const boxRef = useRef();
  const cardRef = useRef();

  useEffect(() => {});

  return (
    <div>
      <div ref={boxRef}></div>
      <RecentBroadcastContainer
        pastbcastClips={props.pastbcastClips}
        next={props.next}
        prev={props.prev}
        rbx={props.rbx}
        rby={props.rby}
        cardRef={cardRef}
      />
    </div>
  );
};

//
// <div
//   className="button-design prev-button"
//   onClick={() => {
//     props.prev(props.rbx, "rb");
//   }}
//   style={props.rbx === 4 ? { visibility: "hidden" } : {}}
// ></div>
// <div
//   className="button-design next-button"
//   onClick={() => {
//     props.next(props.rbx, "rb");
//   }}
//   style={props.rbx === 20 ? { visibility: "hidden" } : {}}
// ></div>
// .slice(props.rby, props.rbx)

export default Animation;
