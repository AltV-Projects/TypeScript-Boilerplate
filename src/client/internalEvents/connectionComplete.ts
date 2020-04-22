import * as alt from "alt-client";

alt.on("connectionComplete", () => {
  alt.log(`Client connected successfully`);
});
