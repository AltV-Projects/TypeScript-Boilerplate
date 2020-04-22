import * as alt from "alt-server";

// Fires if a player disconnects (sometimes with a delay of ~ 10 seconds)
alt.on("playerDisconnect", (player: alt.Player) => {
  alt.log(`${player.name} disconnected`);
});
