import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/jumbotron.js";
import "./components/loading-indikator.js";
import App from "./views/app";
import swRegister from "./utils/sw-register";
("./data/restoData");

const app = new App({
  button: document.getElementById("btnHamburger"),
  drawer: document.getElementById("link2"),
  content: document.querySelector("#mainContent"),
  exit: document.getElementById("btnExit"),
  skip: document.getElementById("#skip"),
});
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
console.log("Hello Coders! :)");
