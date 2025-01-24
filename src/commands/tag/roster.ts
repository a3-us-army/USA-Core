// =================== Imports ===================================

import {
	Command,
	type CommandInteraction,
	Embed,
} from "@buape/carbon"

let mainEmbed = null

class RosterEmbed extends Embed {
	constructor(title: string, description: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
	}
}

export default class RosterCommand extends Command {
	name = "roster"
	description = "List the Rosters"
	defer = true

	async run(interaction: CommandInteraction) {

			mainEmbed = new RosterEmbed(
				"The Current Rosters",
				`**75th Rangers Regiment** - https://go.cag-ussof.org/rangers

                **1st Combat Aviation Devision** - https://go.cag-ussof.org/1st-combat`
			)
			await interaction.reply({
				embeds: [mainEmbed]
			})
		}
	}