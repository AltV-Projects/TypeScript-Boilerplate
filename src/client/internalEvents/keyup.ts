import * as alt from "alt-client";

alt.on("keyup", (key: number) => {
  alt.log(`Pressed up key ${key}`);
});
