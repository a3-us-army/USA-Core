// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

import staff from "src/storage-files/staff.json";

const staffList = staff.map(s => `${s.ping} - ${s.position} ${s.emoji} - ${s.boardRank}`).join('\n')

export default class StaffListCommand extends Command {
	name = "staff-list";
	description = "List the people with power.";

	async run(interaction: CommandInteraction) {

		const guildId = interaction.guild?.id

		if (guildId === "1277788356067201054"){
			await interaction.reply({content: `${staffList}`, allowedMentions: { parse: [] }})
		}
		else if(guildId === "993993868712349716"){
			await interaction.reply({content: "N/A", allowedMentions: { parse: [] }})
		}
		else {
			await interaction.reply({content: `${staffList}`, allowedMentions: { parse: [] }})
		}
	}
}
