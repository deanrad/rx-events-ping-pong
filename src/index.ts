import { on, trigger, after, spy } from "rx-helper";

const ballElem = document.getElementById("ball");

on("ping", () => {
  ballElem.style.left = "95vw";
  return after(2000, () => {
    trigger("pong");
  });
});

on("pong", () => {
  ballElem.style.left = "1vw";
  return after(2000, () => {
    trigger("ping");
  });
});

spy(({ type }) => console.log(`${type}`));
trigger("ping");
