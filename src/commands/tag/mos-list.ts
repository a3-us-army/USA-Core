// =================== Imports ===================================

import { Command, Embed, type CommandInteraction } from "@buape/carbon"

class MainEmbed extends Embed {
	title = "MOS List"
	description = `N/A`
}

export default class MosListCommand extends Command {
	name = "mos-list"
	description = "List the current availible roles."

	async run(interaction: CommandInteraction) {
		const mainEmbed = new MainEmbed()
		await interaction.reply({ embeds: [mainEmbed] })
	}
}
