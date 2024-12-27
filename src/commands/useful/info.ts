// =================== Imports ===================================

import { Command, type CommandInteraction, Embed } from "@buape/carbon"

import contributersRaw from "src/storage-files/contributors.json"

const contributers = contributersRaw
	.map((c) => `<@${c.userID}> - ${c.position} ${c.emoji}`)
	.join("\n")

class InfoEmbed extends Embed {
	title = ""
	color = 0x454b1b
	fields = [
		{ name: "Bot Owner", value: "<@829909201262084096>", inline: true },
		{ name: "Contributers", value: contributers, inline: true },
		{
			name: "Source Code",
			value: "[Click Here](https://go.cag-ussof.org/cag-bot)",
			inline: true
		},
		{
			name: "About CAG Operating System",
			value: "This bot is a multipurpose bot to help do some stuff in CAG. It has multiple category of commands such as tag commands, useful commands, and even some fun commands. The tag commands are so we can easily paste different things, such as the MOS list as well as server info. It lets us DM people with the server info without having to go copy and pasting so much. It also allows to keep track of who has updated their modpack.",
			inline: true
		}
	]
	thumbnail = "https://i.imgur.com/LjwUiUZ.png"
	author = {
		name: "CAG Operating System",
		icon_url: "https://i.imgur.com/LjwUiUZ.png"
	}
}

export default class InfoCommand extends Command {
	name = "info"
	description = "Information on this bot."
	defer = true

	async run(interaction: CommandInteraction) {
		const infoEmbed = new InfoEmbed()
		await interaction.reply({ embeds: [infoEmbed] })
	}
}
