import * as alt from "alt-client";

/*
- If needed, define local player on top of each file -
const player: alt.Player = alt.Player.local;
*/

alt.onServer("server:startHandshake", () => {
  alt.log(`Got handshake request from Server, responding`);
  alt.emitServer("client:endHandshake");
});
