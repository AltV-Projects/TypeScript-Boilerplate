import * as alt from "alt-server";

alt.on(
  "playerEnteredVehicle",
  (player: alt.Player, vehicle: alt.Vehicle, seat: number) => {
    alt.log(`${player.name} entered Vehicle ${vehicle.id} on seat ${seat}`);
  }
);
