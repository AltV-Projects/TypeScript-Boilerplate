import * as alt from "alt-server";

// Fires if a player connects
alt.on("playerConnect", (player: alt.Player) => {
  alt.log(`${player.name} connected`);
  alt.emitClient(player, "server:startHandshake");
});
