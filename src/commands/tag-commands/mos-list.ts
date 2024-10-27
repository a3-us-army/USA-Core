// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class MosListCommand extends Command {
	name = "mos-list";
	description = "List the current availible roles.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"***MOS Availability is subject to change due to unit needs; Message CPT | J. Vu (Septonic) or SSG | A. Falcon (Atomic) about openings.***\n\n### Operator MOS:\n\n- Combat Engineer | 12B\n- Demolitions Expert | 18C\n- Sniper/Marksman | 18B\n- Combat Medic | 18D\n- Grenadier | 11B\n- Rifleman | 11B\n- Machine Gunner | 18B\n- Joint Terminal Attack Controller (JTAC) | 13F\n\n### 160th Detachment MOS:\n\n- Crew Chief | 15T\n- Door Gunner | 15T or 11B\n- Pilot | 15A (Commissioned Officer) or 153A (Warrant Officer)\n- UAV Operator | 15W",
		);
	}
}
