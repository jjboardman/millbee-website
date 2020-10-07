import React from "react";
import logo from "./twitchthumbnail.jpg";
import { Helmet } from "react-helmet";

//Clip Card Creation Section

//Most Recent Broadcasts
function RecentBroadcastClips(props) {
  //Method used to set size of thumbnail provided from api call
  var rawthumb = props.thumbnail;

  var slicedthumb = rawthumb.slice(0, -22);

  var realthumb = slicedthumb + "320x180.jpg";

  return (
    <a href={props.url} alt={"Link to" + props.title}>
      <div className="clipcard">
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

//Top viewed Twitch Clips
function TwitchClips(props) {
  return (
    <a href={props.url} alt={"Link to" + props.title}>
      <div className="clipcard">
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
    >
      <div className="clipcard">
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
    <div className="main-container">
      <p>Recent Uploads</p>
      <div className="title-divider"></div>
      <div className="clipscontainer">
        {props.youtubeClips.map((d) => (
          <Clips
            title={d.snippet.title}
            thumbnail={d.snippet.thumbnails.medium.url}
            videoid={d.snippet.resourceId.videoId}
          />
        ))}
      </div>
    </div>
  );
}

//Container for twitch clips cards
function TwitchClipsContainer(props) {
  return (
    <div className="main-container">
      <p>Top Clips</p>
      <div className="title-divider"></div>
      <div className="clipscontainer">
        {props.twitchClips.map((d) => (
          <TwitchClips
            title={d.title}
            thumbnail={d.thumbnail_url}
            url={d.url}
          />
        ))}
      </div>
    </div>
  );
}

//Container for past broadcasts cards
function RecentBroadcastContainer(props) {
  return (
    <div className="main-container">
      <p>Recent Broadcasts</p>

      <div className="title-divider"></div>
      <div className="clipscontainer">
        {props.pastbcastClips.map((d) => (
          <RecentBroadcastClips
            title={d.title}
            thumbnail={d.thumbnail_url}
            url={d.url}
          />
        ))}
      </div>
    </div>
  );
}

//END Clip Container Section END

//Main Component to be rendered
//Helmet used to change title of page
function Home(props) {
  return (
    <div id="homecontainer">
      <Helmet>
        <title>Millbee Home</title>
      </Helmet>
      <RecentBroadcastContainer pastbcastClips={props.pastbcastClips} />
      <ClipsContainer youtubeClips={props.youtubeClips} />
      <TwitchClipsContainer twitchClips={props.twitchClips} />
    </div>
  );
}

export default Home;

//
// <TwitchEmbed
//   id="twitchembedcontainer"
//   channel="millbee"
//   theme="dark"
//   width="50%"
//   />
