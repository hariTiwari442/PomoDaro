import "./App.css";
import Card from "./components/Card.js";
import Stripe from "./components/Strip.js";
import "./components/Card.css";
import POMO from "./components/PomoText.js";
import { useState } from "react";
function App() {
  const [focusTime, setfocusTime] = useState(["25", "00"]);
  const [shortTime, setShortTime] = useState(["05", "00"]);
  const [longTime, setLongTime] = useState(["15", "00"]);
  const focusTimerHandler = async () => {
    for (let minute = 0; minute < 25; minute++) {
      await new Promise((resolve) => {
        let secondsPassed = 0;
        if (secondsPassed === 0) {
          setfocusTime((prevState) => {
            let arr = [...prevState];
            arr[0] = parseInt(arr[0]) - 1;
            arr[1] = 60;
            return arr;
          });
        }
        const intervalId = setInterval(() => {
          setfocusTime((prevState) => {
            let arr = [...prevState];
            if (arr[1] === "00") {
              arr[1] = "59";
            }
            arr[1] = parseInt(arr[1]) - 1;
            return arr;
          });
          secondsPassed++;
          if (secondsPassed >= 60) {
            clearInterval(intervalId);
            resolve();
          }
        }, 1000);
      });
      if (minute !== 24) {
        setfocusTime((prevState) => {
          let arr = [...prevState];
          arr[0] = parseInt(arr[0]) - 1;
          arr[1] = 60;
          return arr;
        });
      }
    }
  };
  const shortBreakTimerHandler = async () => {
    for (let minute = 0; minute < 1; minute++) {
      await new Promise((resolve) => {
        let secondsPassed = 0;
        if (secondsPassed === 0) {
          setShortTime((prevState) => {
            let arr = [...prevState];
            arr[0] = parseInt(arr[0]) - 1;
            arr[1] = 60;
            return arr;
          });
        }
        const intervalId = setInterval(() => {
          setShortTime((prevState) => {
            let arr = [...prevState];
            if (arr[1] === "00") {
              arr[1] = "59";
            }
            arr[1] = parseInt(arr[1]) - 1;
            return arr;
          });
          secondsPassed++;
          if (secondsPassed >= 60) {
            clearInterval(intervalId);
            resolve();
          }
        }, 1000);
      });
      if (minute !== 4) {
        setShortTime((prevState) => {
          let arr = [...prevState];
          arr[0] = parseInt(arr[0]) - 1;
          arr[1] = 60;
          return arr;
        });
      }
    }
  };
  const longBreakTimerHandler = async () => {
    for (let minute = 0; minute < 15; minute++) {
      await new Promise((resolve) => {
        let secondsPassed = 0;
        if (secondsPassed === 0) {
          setLongTime((prevState) => {
            let arr = [...prevState];
            arr[0] = parseInt(arr[0]) - 1;
            arr[1] = 60;
            return arr;
          });
        }
        const intervalId = setInterval(() => {
          setLongTime((prevState) => {
            let arr = [...prevState];
            if (arr[1] === "00") {
              arr[1] = "59";
            }
            arr[1] = parseInt(arr[1]) - 1;
            return arr;
          });
          secondsPassed++;
          if (secondsPassed >= 60) {
            clearInterval(intervalId);
            resolve();
          }
        }, 1000);
      });
      if (minute !== 14) {
        setLongTime((prevState) => {
          let arr = [...prevState];
          arr[0] = parseInt(arr[0]) - 1;
          arr[1] = 60;
          return arr;
        });
      }
    }
  };
  return (
    <>
      <Card>
        {/* <Pomo className={"normal-box"}></Pomo> */}
    <POMO></POMO>
        <Stripe
          color={"#fff2f2"}
          chipValue={"🧠 Focus"}
          timeValue={focusTime}
          focusHandler={focusTimerHandler}
          // shortBreakHandler={shortBreakTimerHandler}
          // longBreakTimerHandler={longBreakTimerHandler}
        ></Stripe>
        <Stripe
          color={"#f2fff5"}
          chipValue={"🍵 Short Break"}
          timeValue={shortTime}
          // focusHandler={focusTimerHandler}
          shortBreakHandler={shortBreakTimerHandler}
          // longBreakTimerHandler={longBreakTimerHandler}
        ></Stripe>
        <Stripe
          color={"#f2f9ff"}
          chipValue={"🍴 Long Break"}
          timeValue={longTime}
          // focusHandler={focusTimerHandler}
          // shortBreakHandler={shortBreakTimerHandler}
          longBreakTimerHandler={longBreakTimerHandler}
        />
      </Card>
    </>
  );
}

export default App;
