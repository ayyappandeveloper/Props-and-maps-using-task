import ReactDOM from "react-dom/client";
import "./Style.css";
import one from "./assets/1 (1).jpg";
import Two from "./assets/1 (2).jpg";
import Three from "./assets/1 (3).jpg";
import Four from "./assets/1 (4).jpg";
import Five from "./assets/1 (5).jpg";
import Six from "./assets/1.jpg";
import Seven from "./assets/2.jpg";
import Eight from "./assets/3.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Dogs(props) {
  return (
    <div className="container-pets">
      <img src={props.image} alt={props.image}></img>
      <h1>{props.dogname}</h1>
    </div>
  );
}

var pet = [
  {
    image: one,
    dogname: "Julie Rabbit Ears",
  },
  {
    image: Two,
    dogname: "The Innocent Look",
  },
  {
    image: Three,
    dogname: "Big Eyed Buggy",
  },
  {
    image: Four,
    dogname: "The saint Doggo",
  },
  {
    image: Five,
    dogname: "The saint Doggo",
  },
  {
    image: Six,
    dogname: "The saint Doggo",
  },
  {
    image: Seven,
    dogname: "The saint Doggo",
  },
  {
    image: Eight,
    dogname: "The saint Doggo",
  },
];
root.render(
  <div className="container">
    {pet.map(function (pets) {
      return <Dogs image={pets.image} dogname={pets.dogname}></Dogs>;
    })}
  </div>
);
