import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "./../components/card/card";
import { Footer } from "./../components/footer/footer";


let cards = [Card('Pedro', 27.3), Card('MArio', 12.3)];

document.querySelector("#app").innerHTML += `
  <h1>Hello Vite!</h1>
  <div class="app__box" >
    <h2>BOX</h2>
    <div class="app__box__container" >
      <h3>BOX 2</h3>
      ${Card('Pedro', 27.3)}
      ${Card('MArio', 12.3)}

      ${cards.map(card => card)}
    </di>
  </di>
  ${Footer()}
`;
