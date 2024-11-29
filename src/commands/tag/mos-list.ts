// =================== Imports ===================================

import { Command, Embed, type CommandInteraction } from "@buape/carbon"

class MainEmbed extends Embed {
	title = "MOS List"
	description =
		"***MOS Availability is subject to change due to unit needs; Message <@396891399116554240> or <@588752803602890793> about openings.***"
	fields = [
		{
			name: "Operator MOS:",
			value: `- Combat Engineer | 12B
- Demolitions Expert | 18C
- Sniper/Marksman | 18B
- Combat Medic | 18D
- Grenadier | 11B
- Rifleman | 11B
- Machine Gunner | 18B
- Joint Terminal Attack Controller (JTAC) | 13F`,
			inline: true
		},
		{
			name: "160th Detachment MOS",
			value: `- Crew Chief | 15T
- Door Gunner | 15T or 11B
- Pilot | 15A (Commissioned Officer) or 153A (Warrant Officer)
- UAV Operator | 15W`,
			inline: true
		}
	]
}

export default class MosListCommand extends Command {
	name = "mos-list"
	description = "List the current availible roles."

	async run(interaction: CommandInteraction) {
		const mainEmbed = new MainEmbed()
		await interaction.reply({ embeds: [mainEmbed] })
	}
}
