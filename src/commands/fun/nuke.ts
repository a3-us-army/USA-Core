// =================== Imports ===================================

import {
	Command,
	type CommandInteraction,
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType
} from "@buape/carbon"

let userId = ""
let place = ""

export default class NukeCommand extends Command {
	name = "nuke"
	description = "Nuke someplace!"
	defer = true

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "where",
			type: ApplicationCommandOptionType.String,
			description: "Where are you nuking?",
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user")

		userId = interaction.userId
		place = interaction.options.getString("where", true)

		await interaction.reply(
			`<@${userId}> has nuked ${place}! <:nuke:1299927172638707763> <:nuke:1299927172638707763> <:nuke:1299927172638707763>`
		)
	}
}
