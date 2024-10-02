import "./App.css";
import Card from "./components/Card.js";
import Stripe from "./components/Strip.js";
import "./components/Card.css";
import POMO from "./components/PomoText.js";
function App() {
  return (
    <>
      <Card>
        {/* <Pomo className={"normal-box"}></Pomo> */}
        <POMO></POMO>
        <Stripe color={"#fff2f2"} chipValue={"🧠 Focus"}></Stripe>
        <Stripe color={"#f2fff5"} chipValue={"🍵 Short Break"}></Stripe>
        <Stripe color={"#f2f9ff"} chipValue={"🍴 Long Break"} />
      </Card>
    </>
  );
}

export default App;
