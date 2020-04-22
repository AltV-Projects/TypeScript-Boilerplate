import * as alt from "alt-server";

// In function "alt.onClient", 1st param is player... EVERYTIME!
// player.name is set in "settings" menu in altv, defaults to "Player", so be aware!
alt.onClient("client:endHandshake", (player: alt.Player) => {
  alt.log(`Handshake complete, ${player.name} answered successfull`);
  player.pos = new alt.Vector3(1978, 3111, 46);
  player.model = "s_m_y_autopsy_01";
});
