import { on, trigger } from "rx-helper";

const ballElem = document.getElementById("ball");

on("ping", () => {
  ballElem.style.left = "95vw";
  new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    trigger("pong");
  });
});

on("pong", () => {
  ballElem.style.left = "1vw";
  new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    trigger("ping");
  });
});

trigger("ping");
