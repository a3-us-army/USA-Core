// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class EventTimesCommand extends Command {
	name = "event-times";
	description = "Our op times.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"**Tuesday:** 6:30 EST | <t:1729809000:t>\n\n**Wednesday:** 6:30 EST | <t:1729809000:t>",
		);
	}
}
