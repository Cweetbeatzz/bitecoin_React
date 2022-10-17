import React, { useState } from "react";
import { useEffect } from "react";

export default function Draw() {
  //#################################################################
  const [now, setnow] = useState(new Date().getTime());
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  const [countDownDate, setcountDownDate] = useState(
    new Date("Jan 5,2023 15:37:25").getTime()
  ); // Set the date we're counting down to

  //#################################################################
  const timer = setInterval(() => {
    // Get today's date and time
    const today = now;

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let today_days = Math.floor(distance / (1000 * 60 * 60 * 24));
    setdays(today_days);

    let today_hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    sethours(today_hours);

    let today_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setminutes(today_minutes);

    let today_seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setseconds(today_seconds);
  }, 1000);
  //#################################################################

  useEffect(() => {
    // If the count down is finished, write some text
    return () => clearInterval(timer);
  });
  //#################################################################

  return (
    <div>
      <div className="container bg-gradient p-4">
        <span className="d-flex justify-content-center gap-2">
          <h4 className="txt bg-warning p-2 text-black" id="time-display">
            <strong>Hurry!!!</strong>
          </h4>
          <h4 className="txt bg-dark p-2" id="time-display">
            <strong>{days} d</strong>{" "}
          </h4>
          <h4 className="txt bg-dark p-2" id="time-display">
            <strong>{hours} h</strong>{" "}
          </h4>
          <h4 className="txt bg-dark p-2" id="time-display">
            <strong>{minutes} m</strong>
          </h4>
          <h4 className="txt bg-dark p-2" id="time-display">
            <strong>{seconds}s</strong>
          </h4>
        </span>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="col-8 m-2 mx-auto">
          <div className="card bg-light bg-opacity-25 ">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
