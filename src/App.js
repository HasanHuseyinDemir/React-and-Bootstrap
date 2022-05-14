import ProgressSample from "./Components/Samples/ProgressSample";
import Accordion from "./Components/Accordion";
import "./styles.css";
import CardSample from "./Components/Samples/CardSample";
import Select from "./Components/Select";
import AlertsSample from "./Components/Samples/AlertsSample";

export default function App() {
  return (
    <div className="container">
      <h1 className="head" align="center">
        Bootstrap Collection by HHD.
      </h1>

      <Accordion title="Progress Bar Sample" id="progressSample">
        <ProgressSample />
      </Accordion>
      <Accordion title="Card Sample" id="cardSample">
        <CardSample />
      </Accordion>
      <Accordion title="Select Sample" id="selectSample">
        <h1 align="center">Select</h1>
        <Select selected="Select">
          <option value="1">Istanbul</option>
          <option value="2">Ankara</option>
          <option value="3">Paris</option>
        </Select>
      </Accordion>
      <Accordion title="Alerts Sample" id="navbarSample">
        <AlertsSample />
      </Accordion>
    </div>
  );
}
