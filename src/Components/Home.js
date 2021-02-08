import $ from "jquery";
import React from "react";
import logo from "./twitchthumbnail.jpg";
import { Helmet } from "react-helmet";
import { TwitchEmbed } from "react-twitch-embed";
// import RecentBroadcastContainer from "./HomeContainer";
//Clip Card Creation Section

// Most Recent Broadcasts
function RecentBroadcastClips(props) {
  //Method used to set size of thumbnail provided from api call
  var rawthumb = props.thumbnail;

  var slicedthumb = rawthumb.slice(0, -22);

  var realthumb = slicedthumb + "320x180.jpg";

  return (
    <a href={props.url} alt={"Link to" + props.title} className="clipcard">
      <div>
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
    </a>
  );
}
//
// function RecentBroadcastClips(props) {
//   //Method used to set size of thumbnail provided from api call
//   var rawthumb = props.thumbnail;
//
//   var slicedthumb = rawthumb.slice(0, -22);
//
//   var realthumb = slicedthumb + "320x180.jpg";
//
//   return (
//     <a href={props.url} alt={"Link to" + props.title}>
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src={rawthumb === "" ? logo : realthumb}
//           alt="twitch video thumbnail"
//           width="320px"
//           height="180px"
//           className="card-img-top"
//         />
//         <div className="card-body">
//           <p className="card-title">{props.title}</p>
//         </div>
//       </div>
//     </a>
//   );
// }

//Top viewed Twitch Clips
function TwitchClips(props) {
  return (
    <a href={props.url} alt={"Link to" + props.title} className="clipcard">
      <div>
        <div className="decorative-lines"></div>
        <img
          src={props.thumbnail}
          alt="twitch video thumbnail"
          width="320px"
          height="180px"
        />
        <div className="clip-detail"></div>
        <p>{props.title}</p>
      </div>
    </a>
  );
}

//Most recent youtube uploads
function Clips(props) {
  return (
    <a
      href={"http://www.youtube.com/watch?v=" + props.videoid}
      alt={"Link to" + props.title}
      className="clipcard"
    >
      <div>
        <div className="decorative-lines"></div>

        <img src={props.thumbnail} alt="youtube upload thumbnail" />
        <div className="clip-detail"></div>
        <p>{props.title}</p>
      </div>
    </a>
  );
}
//END Clip Card Creation Section END

//Clip Container Section

//Container for the youtube card
function ClipsContainer(props) {
  return (
    <div className="main-container container-lg">
      <p>Recent Uploads</p>
      <div className="title-divider"></div>
      <div className="button-cards">
        <div
          className="button-design prev-button"
          onClick={() => {
            props.prev(props.rux, "ru");
          }}
          style={props.rux === 4 ? { visibility: "hidden" } : {}}
        ></div>
        <div className="clipscontainer">
          {props.youtubeClips
            .map((d, i) => (
              <Clips
                title={d.snippet.title}
                thumbnail={d.snippet.thumbnails.medium.url}
                videoid={d.snippet.resourceId.videoId}
                key={i + 20}
              />
            ))
            .slice(props.ruy, props.rux)}
        </div>
        <div
          className="button-design next-button"
          onClick={() => {
            props.next(props.rux, "ru");
          }}
          style={props.rux === 20 ? { visibility: "hidden" } : {}}
        ></div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
}

//Container for twitch clips cards
function TwitchClipsContainer(props) {
  return (
    <div className="main-container container-lg">
      <p>Top Clips</p>
      <div className="title-divider"></div>
      <div className="button-cards">
        <div
          className="button-design prev-button"
          onClick={() => {
            props.prev(props.rcx, "tc");
          }}
          style={props.rcx === 4 ? { visibility: "hidden" } : {}}
        ></div>
        <div className="clipscontainer">
          {props.twitchClips
            .map((d, i) => (
              <TwitchClips
                key={i + 40}
                title={d.title}
                thumbnail={d.thumbnail_url}
                url={d.url}
              />
            ))
            .slice(props.rcy, props.rcx)}
        </div>
        <div
          className="button-design next-button"
          onClick={() => {
            props.next(props.rcx, "tc");
          }}
          style={props.rcx === 20 ? { visibility: "hidden" } : {}}
        ></div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
}

//Container for past broadcasts cards
function RecentBroadcastContainer(props) {
  return (
    <div className="main-container container-lg">
      <p>Recent Broadcasts</p>

      <div className="title-divider"></div>
      <div className="button-cards">
        <div
          className="button-design prev-button"
          onClick={() => {
            props.prev(props.rbx, "rb");
          }}
          style={props.rbx === 4 ? { visibility: "hidden" } : {}}
        ></div>
        <div className="clipscontainer">
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
        </div>
        <div
          className="button-design next-button"
          onClick={() => {
            props.next(props.rbx, "rb");
          }}
          style={props.rbx === 20 ? { visibility: "hidden" } : {}}
        ></div>
      </div>
      <div className="bottom-divider"></div>
    </div>
  );
}

//END Clip Container Section END

//Stops player re rendering when card items are cycled through
const TwitchEm = React.memo(TwitchEmbed);

//Main Component to be rendered
//Helmet used to change title of page

//
//
// <div id="phrase">
//   <div className="decorative-lines"></div>
//   <div id="first">
//     {gaming.map((i) => (
//       <span className="gaming">{i}</span>
//     ))}
//   </div>
//   <div id="second">
//     {welsh.map((i) => (
//       <span className="welsh">{i}</span>
//     ))}
//   </div>
//   <div className="decorative-lines-bottom"></div>
// </div>

function Home(props) {
  var gaming = "Gaming".split("");

  var welsh = "With a Welsh Touch.".split("");

  return (
    <div id="homecontainer">
      <Helmet>
        <title>Millbee</title>
      </Helmet>

      <TwitchEm
        id="twitchembedcontainer"
        channel="millbee"
        theme="dark"
        width="100%"
        height="35rem"
        className="container-lg"
      />

      <RecentBroadcastContainer
        pastbcastClips={props.pastbcastClips}
        next={props.next}
        prev={props.prev}
        rbx={props.rbx}
        rby={props.rby}
      />
      <ClipsContainer
        youtubeClips={props.youtubeClips}
        next={props.next}
        prev={props.prev}
        rux={props.rux}
        ruy={props.ruy}
      />
      <TwitchClipsContainer
        twitchClips={props.twitchClips}
        next={props.next}
        prev={props.prev}
        rcx={props.rcx}
        rcy={props.rcy}
      />
    </div>
  );
}

export default Home;

// export default Home;
