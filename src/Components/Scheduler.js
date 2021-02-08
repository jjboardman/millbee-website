import React, { useState, useEffect } from "react";
import {
  format,
  setHours,
  isValid,
  getMonth,
  getDate,
  startOfMonth,
  getDaysInMonth,
  getDay,
  eachDayOfInterval,
  endOfMonth,
  isSameDay,
  subMonths,
  addMonths,
  isEqual,
  parseISO,
  isBefore,
} from "date-fns";
// import "./App.css";
const dateListFormat = "d-M-yyyy";
const isoYearFormat = "yyyy-M-d";
const dateFormat = "do";
const monthFormat = "MMMM y";
const mySqlFormat = "y-MM-dd HH:mm:ss"
const useForceUpdate = () => useState()[1];

const Form = (props) => {
  let err = "";
  const handleStartChange = (event) => {
    props.setStart(format(new Date(props.streamDate + " " + event.target.value),mySqlFormat));
    // console.log(event.target.value);
  };

  const handleEndChange = (event) => {
    props.setEnd(format(new Date(props.streamDate + " " + event.target.value),mySqlFormat));
  };

  const handleGameChange = (event) => {
    props.setGame(event.target.value);
  };

  const handleDescChange = (event) => {
    props.setDesc(event.target.value);
  };
  //
  // const handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (isBefore(props.end, props.start)) {
      // var dateErr = "End is before start";
      // alert("End is before start");
      return false;
    }

    props.setAddNew(false);
    props.postData("http://localhost:9000/events", {
      game: props.game,
      desc: props.desc,
      start: props.start,
      end: props.end,
    });
  };

  const handleFormClose = (event) => {
    props.setAddNew(false);
  };

  return (
    <div className="form-container">
      <div className="overlay"></div>

      <form className="stream-form" onSubmit={handleSubmit}>
        <button onClick={handleFormClose} className="exit-button button">
          x
        </button>
        <label htmlFor="game">Game</label>
        {err}
        <input
          type="text"
          name="game"
          id="game"
          onChange={handleGameChange}
          required
        />
        <br />
        <label htmlFor="description">Description</label>
        <textarea rows="4" cols="30" name="des" onChange={handleDescChange} />
        <br />
        <label for="start">Start Time</label>
        <input
          type="time"
          name="start"
          id="start"
          onChange={handleStartChange}
          required
        />
        <br />
        <label htmlFor="end">End Time</label>
        <input
          type="time"
          name="end"
          id="end"
          onChange={handleEndChange}
          required
        />
        <input type="submit" className="button" />
      </form>
    </div>
  );
};

function StreamDisplay(props) {
  function handleAddNew() {
    props.setAdd(true);
  }

  return (
    <div className="stream-list">
      <p>{format(props.date, dateListFormat)}</p>
      {props.events.map((e) => {
        console.log(e.start);
        if (isSameDay(parseISO(e.start), props.date)) {
          return <div>{e.game}</div>;
        }
      })}
      <button onClick={handleAddNew} className="button">
        +
      </button>
    </div>
  );
}

function Scheduler() {
  const [date, setDate] = useState(new Date());
  const [monthLength, setMonthLength] = useState(getDaysInMonth(date));
  const [on, setOn] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [addNewStreamSelected, setAddNewStreamSelected] = useState(false);
  const [events, setEvents] = useState("");
  const [selectedDateSimple, setSelectedDateSimple] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [game, setGame] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(1);

  let monthStart = startOfMonth(date);
  let monthEnd = endOfMonth(date);
  let dayOfMonthStart = getDay(monthStart);
  const style = { gridColumnStart: dayOfMonthStart };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let x = [];

  let y = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleClick(x) {
    if (on === true && isSameDay(x, selectedDate)) {
      setOn(false);
      setSelectedDate("");
    } else if (on === true && !isSameDay(x, selectedDate)) {
      setSelectedDate(x);
      setSelectedDateSimple(format(x, isoYearFormat));
    } else {
      setOn(true);
      setSelectedDate(x);
      setSelectedDateSimple(format(x, isoYearFormat));
    }
  }

  function prevMonth() {
    setDate(subMonths(date, 1));
  }

  function nextMonth() {
    setDate(addMonths(date, 1));
  }

  var eventscall = () => {
    fetch("http://localhost:9000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  };

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    eventscall();
  }, [selectedDate]);

  return (
    <div id="scheduler-container">
      <div className="calendar-container">
        {" "}
        <button onClick={prevMonth}></button>{" "}
        <span>{format(date, monthFormat)}</span>
        <button onClick={nextMonth}></button>
        <div className="calendar">
          {daysOfWeek.map((day) => {
            return <span className="day-name">{day}</span>;
          })}
          {y.map((x, i) => {
            return (
              <button
                className={
                  isSameDay(x, selectedDate) ? "date selected" : "date"
                }
                style={i === 0 ? style : {}}
                onClick={() => handleClick(x)}
              >
                {format(x, dateFormat)}
              </button>
            );
          })}
        </div>
      </div>
      {on === true ? (
        <StreamDisplay
          date={selectedDate}
          add={addNewStreamSelected}
          setAdd={setAddNewStreamSelected}
          events={events}
        />
      ) : (
        <span></span>
      )}
      {addNewStreamSelected ? (
        <Form
          postData={postData}
          streamDate={selectedDateSimple}
          setAddNew={setAddNewStreamSelected}
          game={game}
          desc={desc}
          start={start}
          end={end}
          setGame={setGame}
          setDesc={setDesc}
          setStart={setStart}
          setEnd={setEnd}
          forceUpdate={forceUpdate}
          id={userId}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default Scheduler;
