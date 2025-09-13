import "./App.css";
import { AboutUs } from "./pages/AboutUs";
import lineIcon from "./assets/lineIcon.png"

export const App = () => {
  return (
    <div>
      <AboutUs />
      {/* <img src={lineIcon} /> */}
    </div>
  );
}