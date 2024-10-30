// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class MosListCommand extends Command {
	name = "mos-list";
	description = "List the current availible roles.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(`
***MOS Availability is subject to change due to unit needs; Message CPT | J. Vu (Septonic) or SSG | A. Falcon (Atomic) about openings.***

### Operator MOS:

- Combat Engineer | 12B
- Demolitions Expert | 18C
- Sniper/Marksman | 18B
- Combat Medic | 18D
- Grenadier | 11B
- Rifleman | 11B
- Machine Gunner | 18B
- Joint Terminal Attack Controller (JTAC) | 13F

### 160th Detachment MOS:

- Crew Chief | 15T
- Door Gunner | 15T or 11B
- Pilot | 15A (Commissioned Officer) or 153A (Warrant Officer)
- UAV Operator | 15W`);
	}
}
