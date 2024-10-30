// =================== Imports ===================================

import {
	Command,
	type CommandInteraction,
	Embed,
	Row,
	StringSelectMenu,
	type StringSelectMenuInteraction
} from "@buape/carbon"

let helpEmbed = null

import usefulCommandsRaw from "src/storage-files/useful-commands.json"
import tagCommandsRaw from "src/storage-files/tag-commands.json"
import funCommandsRaw from "src/storage-files/fun-commands.json"

const usefulCommands = usefulCommandsRaw
	.map((s) => `</${s.name}:${s.id}> - ${s.description}`)
	.join("\n")

const tagCommands = tagCommandsRaw
	.map((s) => `</${s.name}:${s.id}> - ${s.description}`)
	.join("\n")

const funCommands = funCommandsRaw
	.map((s) => `</${s.name}:${s.id}> - ${s.description}`)
	.join("\n")

class HelpEmbed extends Embed {
	constructor(description: string, title: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
	}
}

export default class HelpCommand extends Command {
	name = "help"
	description = "Show the help menu"
	defer = true
	components = [CagegorySelectMenu]

	async run(interaction: CommandInteraction) {
		helpEmbed = new HelpEmbed(
			"**Useful Commands** - Some commands that are pretty useful! \n\n**Tag Commands** - Commands used to easily send premade tags. \n\n**Fun Commands** - Commands purely for fun!",
			"The Help Embed"
		)
		await interaction.reply({
			embeds: [helpEmbed],
			components: [new Row([new CagegorySelectMenu()])]
		})
	}
}

class CagegorySelectMenu extends StringSelectMenu {
	customId = "category"
	placeholder = "Select the cagegory of commands"
	options = [
		{
			label: "Useful Commands",
			value: "usefulCommands",
			description: "Some commands that are pretty useful!"
		},
		{
			label: "Tag Commands",
			value: "tagCommands",
			description: "Commands used to easily send premade tags."
		},
		{
			label: "Fun Commands",
			value: "funCommands",
			description: "Commands purely for fun!"
		}
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "usefulCommands") {
			helpEmbed = new HelpEmbed(usefulCommands, "Useful Command Help")
			await interaction.update({ embeds: [helpEmbed] })
		} else if (userInput === "tagCommands") {
			helpEmbed = new HelpEmbed(tagCommands, "Tag Command Help")
			await interaction.update({ embeds: [helpEmbed] })
		} else if (userInput === "funCommands") {
			helpEmbed = new HelpEmbed(funCommands, "Fun Command Help")
			await interaction.update({ embeds: [helpEmbed] })
		}
	}
}

