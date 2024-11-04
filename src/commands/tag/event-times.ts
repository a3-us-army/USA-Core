// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon"

export default class EventTimesCommand extends Command {
	name = "event-times"
	description = "Our op times."

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"**Tuesday:** 7:00 PM EST | <t:1730764800:t>\n\n**Wednesday:** 7:00 PM EST | <t:1730764800:t>"
		)
	}
}
