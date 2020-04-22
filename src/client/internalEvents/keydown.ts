import * as alt from "alt-client";

alt.on("keydown", (key: number) => {
  alt.log(`Pressed down key ${key}`);
});
