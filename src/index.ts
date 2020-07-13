import { listen, trigger, after, reset } from "polyrhythm";
const ballElem = document.getElementById("ball");

// HMR-friendliness
reset();
console.clear();

listen("ping", () => {
  ballElem.style.left = "90vw";
  ballElem.style.transform = "rotate(-320deg)";
  // Important: 'After' will not start unless we await it!
  return after(2000, () => {
    trigger("pong");
  });
});

const player2 = listen("pong", () => {
  ballElem.style.left = "1vw";
  ballElem.style.transform = "rotate(0deg)";
  return after(2000, () => {
    trigger("ping");
  });
});

listen(true, ({ type }) => console.log(`${type}`));
trigger("ping");

// after(12000, () => {
//   player2.unsubscribe();
// }).then(() => console.log("Player 2 is Going Home!"));
