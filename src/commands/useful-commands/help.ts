// =================== Imports ===================================

import {
    Command, 
    type CommandInteraction, 
    Embed,
	Row,
	StringSelectMenu,
	type StringSelectMenuInteraction
} from "@buape/carbon";

let helpEmbed = null

const usefulCommands = '</help:1297560698150322188> - Show this menu\n</ping:1297543586346434671> - Bot replies with "Pong"\n</update-modpack:1297543586346434673> - Remind someone to update their modpack.'
const tagCommands = "</rules:1298803025602936895> - Send the CAG Discord server rules. \n</event-times:1298828407660085279> - The current op times.\n </server-info:1298829078895267871> - All the server info needed to join.\n</socials:1298800865355759739> - The CAG social media accounts.\n </mos-list:1299904884602048603> - The MOS listings.\n</recruitment-message:1299907655778828308> - The recruitment message. \n</staff-list:1300227059959988266> - The people who hold the power in CAG"
const funCommands = "</nuke:1299925305414385704> - Nuke a place <:nuke:1299927172638707763>"

class HelpEmbed extends Embed {
	constructor(description: string, title: string) {
		super({});
		this.description = description;
		this.title = title
		this.color = 0xff0000;
	}
}

export default class HelpCommand extends Command {
	name = "help";
	description = "Show the help menu";
	defer = true;
    components = [CagegorySelectMenu];

	async run(interaction: CommandInteraction) {
		helpEmbed = new HelpEmbed("**Useful Commands** - Some commands that are pretty useful! \n\n**Tag Commands** - Commands used to easily send premade tags. \n\n**Fun Commands** - Commands purely for fun!", "The Help Embed");

		await interaction.reply({ embeds: [helpEmbed], components: [new Row ([new CagegorySelectMenu])] });
	}
}

class CagegorySelectMenu extends StringSelectMenu {
	customId = "category"
	placeholder = "Select the cagegory of commands"
	options = [
		{ label: "Useful Commands", value: "usefulCommands", description: "Some commands that are pretty useful!" },
		{ label: "Tag Commands", value: "tagCommands", description: "Commands used to easily send premade tags." }, 
		{ label: "Fun Commands", value: "funCommands", description: "Commands purely for fun!" }
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "usefulCommands"){
			helpEmbed = new HelpEmbed(usefulCommands, "Useful Command Help")
			await interaction.update({embeds: [helpEmbed]})
		} 
		else if (userInput === "tagCommands"){
			helpEmbed = new HelpEmbed(tagCommands, "Tag Command Help")
			await interaction.update({embeds: [helpEmbed]})
		}
		else if (userInput === "funCommands"){
			helpEmbed = new HelpEmbed(funCommands, "Fun Command Help")
			await interaction.update({embeds: [helpEmbed]})
		}
	}
}

