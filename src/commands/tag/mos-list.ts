// =================== Imports ===================================

import { Command, Embed, type CommandInteraction } from "@buape/carbon"

class MainEmbed extends Embed {
	title = "MOS List"
	description = `***MOS Availability is subject to change due to unit needs; Message <@396891399116554240> or <@588752803602890793> about openings.***
		
		- 18x - starting MOS for Ground Forces

- 18A - Special Forces Operations Officer
- 18Z - Special Forces Operations Sergeant

- 18B - Weapons Specialist
  - Marksman
  - Auto Rifleman
  - Machine Gunner
  - Breacher
  - Grenadier
  - m136 Launcher/AT-4
- 18C - Engineer Specialist
  - Demolitions Expert
  - Combat Engineer
  - Unmanned Ground Systems Operator (Ground Drones)
- 18D - Medical Specialist
  - Pararescue
  - Combat Medic
- 18E - Communications Specialist
  - JTAC Certification
  - Radio Telephone Operator Certification
- 153A - Rotary Wing Aviator
  - Rotary-Wing Pilot Certification
  - Unmanned Aerial Vehicle Certification`
}

export default class MosListCommand extends Command {
	name = "mos-list"
	description = "List the current availible roles."

	async run(interaction: CommandInteraction) {
		const mainEmbed = new MainEmbed()
		await interaction.reply({ embeds: [mainEmbed] })
	}
}
