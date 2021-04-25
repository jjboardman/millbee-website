import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import logo from "./logo.png";
import banner from "./banner.png";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home.js";
import Community from "./Components/Community.js";
import Schedule from "./Components/Schedule.js";
import Yearofgaming from "./Components/Yearofgaming.js";
import Onmyradar from "./Components/Radar.js";
import { useState, useEffect, useRef } from "react";
import { TwitchPlayer } from "react-twitch-embed";

// import $ from "jquery";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// import "./sass/App.scss";

// <div className="decorative-lines"></div>
// <div className="decorative-lines-bottom"></div>

//
// <img
//   src={banner}
//   height="55px"
//   width="220px"
//   id="banner-logo"
//   alt="Millbee logo and banner with name"
// />

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav p-0 position-relative">
      <div className="navbar-brand nav-link px-3 py-1">
        <Link to="/">
          <img
            src={logo}
            height="60px"
            width="60px"
            id="logo"
            alt="Millbee logo"
          />
        </Link>
      </div>

      <div
        id="link-container"
        className="navbar-nav mr-auto d-flex flex-column"
      >
        <a href="https://twitter.com/Millbee" className="nav-item mb-2">
          <svg
            height="20px"
            viewBox="0 0 512 512"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            alt="twitter icon link to go to millbee twitter"
          >
            <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm33.027344 400.566406c-62.996094 1.085938-86.859375-44.875-86.859375-77.226562v-94.480469h-29.269531v-37.351563c43.875-15.820312 54.421874-55.390624 56.898437-77.933593.171875-1.550781 1.390625-2.160157 2.085937-2.160157h42.347657v73.664063h57.875v43.785156h-58.074219v90.019531c.1875 12.238282 4.679688 29.121094 27.832031 28.5 7.667969-.191406 17.949219-2.421874 23.328125-4.988281l13.90625 41.230469c-5.210937 7.683594-28.816406 16.578125-50.070312 16.941406zm0 0" />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/user/MillBeeful"
          alt="Link to Millbee Youtube"
          className="nav-item"
        >
          <svg
            height="20px"
            viewBox="0 0 512 512"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            alt="Youtube icon link to go to millbee youtube channel"
          >
            <path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0" />
            <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0" />
          </svg>
        </a>
      </div>

      <div className="navbar-nav ml-4 d-none d-lg-block">
        {props.isOnline ? (
          <a
            href="https://www.twitch.tv/millbee"
            id="offline-text"
            className="nav-link d-flex flex-row"
          >
            <div id="live-symbol" className="align-self-center"></div>
            LIVE
          </a>
        ) : null}
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto mt-0">
          <button className="nav-item btn btn-outline-warning px-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </button>
          <button className="nav-item btn btn-outline-warning px-0">
            <Link to="/yearofgaming" className="nav-link">
              31 Years of Gaming
            </Link>
          </button>

          <button className="nav-item btn btn-outline-warning px-0">
            <Link to="/radar" className="nav-link">
              Games on my radar
            </Link>
          </button>
          <button className="nav-item btn btn-outline-warning px-0">
            <Link to="/community" className="nav-link">
              Community
            </Link>
          </button>
          <button className="nav-item btn btn-outline-warning px-0">
            <Link to="/schedule" className="nav-link">
              Schedule
            </Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div id="footer">
      <p>© MillbeeLP {year}</p>

      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </div>
  );
}

function App() {
  const [isOnline, setIsOnline] = useState("");
  const [twitchClips, setTwitchClips] = useState([]);
  const [youtubeClips, setYoutubeClips] = useState([]);
  const [pastbcastClips, setpastbcastClips] = useState([]);
  const [list, setList] = useState([]);
  const [releases, setReleases] = useState([]);
  const [schedule, setSchedule] = useState([]);
  // const [x, setX] = useState(5);
  // const [y, setY] = useState(0);
  const [rbx, setRbx] = useState(4);
  const [rby, setRby] = useState(0);
  const [rux, setRux] = useState(4);
  const [ruy, setRuy] = useState(0);
  const [rcx, setRcx] = useState(4);
  const [rcy, setRcy] = useState(0);

  //Server Calls for API Calls

  function twCall() {
    fetch("https://millbeelp.com/api/clips")
      .then((res) => res.json())
      .then((res) => setTwitchClips(res.data));
  }

  // this is called whenever "page" is changed to allow online message to appear if changed
  function user() {
    fetch("https://millbeelp.com/api/user")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.data.length === 0) {
          setIsOnline(false);
        } else {
          setIsOnline(true);
        }
      });
  }

  function challengeCall() {
    // console.log("THIS");
    fetch("https://millbeelp.com/api/info/challenge")
      .then((res) => res.json())
      .then((res) => setList(res.feed.entry));
  }
  // /home/solas/Websites/frontend-test-main/index.html
  function releaseCall() {
    fetch("https://millbeelp.com/api/info/releases")
      .then((res) => res.json())
      .then((res) => setReleases(res.feed.entry));
  }

  function ytCall() {
    fetch("https://millbeelp.com/api/youtube")
      .then((res) => res.json())
      .then((res) => setYoutubeClips(res.items));
  }

  function pbCall() {
    fetch("https://millbeelp.com/api/pastbroadcast")
      .then((res) => res.json())
      .then((res) => {
        setpastbcastClips(res.data);
      });
  }

  function scheduleCall() {
    fetch("http://localhost:8080/api/event?userId=1")
      .then((res) => res.json())
      .then((res) => setSchedule(res));
  }

  var next = (d, t) => {
    if (t === "rb") {
      switch (d) {
        case 4:
          setRbx(8);
          setRby(4);
          break;
        case 8:
          setRbx(12);
          setRby(8);
          break;
        case 12:
          setRbx(16);
          setRby(12);
          break;
        case 16:
          setRbx(20);
          setRby(16);
          break;
        case 20:
          setRbx(4);
          setRby(0);
          break;
      }
    } else if (t === "ru") {
      switch (d) {
        case 4:
          setRux(8);
          setRuy(4);
          break;
        case 8:
          setRux(12);
          setRuy(8);
          break;
        case 12:
          setRux(16);
          setRuy(12);
          break;
        case 16:
          setRux(20);
          setRuy(16);
          break;
        case 20:
          setRux(4);
          setRuy(0);
          break;
      }
    } else {
      switch (d) {
        case 4:
          setRcx(8);
          setRcy(4);
          break;
        case 8:
          setRcx(12);
          setRcy(8);
          break;
        case 12:
          setRcx(16);
          setRcy(12);
          break;
        case 16:
          setRcx(20);
          setRcy(16);
          break;
        case 20:
          setRcx(4);
          setRcy(0);
          break;
      }
    }
  };

  var prev = (d, t) => {
    if (t === "rb") {
      switch (d) {
        case 16:
          setRbx(12);
          setRby(8);
          break;
        case 20:
          setRbx(16);
          setRby(12);
          break;
        case 4:
          setRbx(20);
          setRby(16);
          break;
        case 8:
          setRbx(4);
          setRby(0);
          break;
        case 12:
          setRbx(8);
          setRby(4);
          break;
      }
    } else if (t === "ru") {
      switch (d) {
        case 16:
          setRux(12);
          setRuy(8);
          break;
        case 20:
          setRux(16);
          setRuy(12);
          break;
        case 4:
          setRux(20);
          setRuy(16);
          break;
        case 8:
          setRux(4);
          setRuy(0);
          break;
        case 12:
          setRux(8);
          setRuy(4);
          break;
      }
    } else {
      switch (d) {
        case 16:
          setRcx(12);
          setRcy(8);
          break;
        case 20:
          setRcx(16);
          setRcy(12);
          break;
        case 4:
          setRcx(20);
          setRcy(16);
          break;
        case 8:
          setRcx(4);
          setRcy(0);
          break;
        case 12:
          setRcx(8);
          setRcy(4);
          break;
      }
    }
  };

  useEffect(() => {
    challengeCall();
    releaseCall();
  }, []);

  useEffect(() => {
    twCall();
  }, []);

  useEffect(() => {
    pbCall();
  }, []);

  useEffect(() => {
    user();
  });

  useEffect(() => {
    ytCall();
  }, []);

  useEffect(() => {
    scheduleCall();
  }, []);

  return (
    <Router>
      <div className="App">
        <TwitchPlayer
          id="online-checker"
          channel="millbee"
          onOnline={() => {
            user();
          }}
          onOffline={() => {
            user();
          }}
          autoplay={false}
        />
        <Header user={user} pbCall={pbCall} isOnline={isOnline} />

        <Switch>
          <Route path="/community">
            <Community />
          </Route>

          <Route path="/radar">
            <Onmyradar list={releases} />
          </Route>

          <Route path="/yearofgaming">
            <Yearofgaming list={list} />
          </Route>

          <Route path="/schedule">
            <Schedule schedule={schedule} />
          </Route>

          <Route path="/">
            <Home
              // width={width}
              twitchClips={twitchClips}
              youtubeClips={youtubeClips}
              pastbcastClips={pastbcastClips}
              next={next}
              prev={prev}
              rbx={rbx}
              rby={rby}
              rux={rux}
              ruy={ruy}
              rcx={rcx}
              rcy={rcy}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
