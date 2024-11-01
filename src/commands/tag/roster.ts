// =================== Imports ===================================

import {
	Button,
	type ButtonInteraction,
	ButtonStyle,
	Command,
	type CommandInteraction,
	Embed,
	Row,
	StringSelectMenu,
	type StringSelectMenuInteraction
} from "@buape/carbon"

import titanSquadRaw from "src/storage-files/rosters/titan-squad.json"
import soarRaw from "src/storage-files/rosters/160th-soar.json"

const titanSquadList = titanSquadRaw
	.map((s) => `Titan-${s.number} - <@${s.userID}> - **${s.rank}** ${s.emoji}`)
	.join("\n")

const soar = soarRaw
	.map((s) => `<@${s.userID}> - **${s.rank}** ${s.emoji} - **${s.callSign}**`)
	.join("\n")

let mainEmbed = null

class RosterEmbed extends Embed {
	constructor(title: string, description: string, thumbnail: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
		this.thumbnail = thumbnail
	}
}

export default class RosterCommand extends Command {
	name = "roster"
	description = "List the Rosters"
	components = [RefreshButton, CategorySelectMenu]
	defer = true

	async run(interaction: CommandInteraction) {
		const channelId = interaction.channel?.id
		if (channelId === "1299906668246863933") {
			mainEmbed = new RosterEmbed(
				"Titan Squad",
				titanSquadList,
				"https://i.imgur.com/wpAerkz.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1299906189353549914") {
			mainEmbed = new RosterEmbed(
				"160th Soar Detachment",
				soar,
				"https://i.imgur.com/4PcUqF6.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else {
			mainEmbed = new RosterEmbed(
				"The Current Rosters",
				`**Titan Squad** - The tip of the spear, the ground team.
                
                **160th Soar Detachment** - The handle of the spear, the aviation team.`,
				"https://i.imgur.com/SpA37FZ.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new CategorySelectMenu()])]
			})
		}
	}
}

class CategorySelectMenu extends StringSelectMenu {
	customId = "roster"
	placeholder = "Select Roster"
	options = [
		{
			label: "Titan Squad",
			value: "titanSquad",
			description: "T-Squad is the tip of the Spear"
		},
		{
			label: "160th Soar Detachment",
			value: "160thSoar",
			description: "Special Avation Unit, the handle"
		}
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "titanSquad") {
			mainEmbed = new RosterEmbed(
				"Titan Squad",
				titanSquadList,
				"https://i.imgur.com/wpAerkz.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		} else if (userInput === "160thSoar") {
			mainEmbed = new RosterEmbed(
				"160th Soar Roster",
				soar,
				"https://i.imgur.com/4PcUqF6.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		}
	}
}

class RefreshButton extends Button {
	customId = "refreshRoster"
	label = "Refresh Message"
	style = ButtonStyle.Secondary
	emoji = { name: "updated", id: "1299929730182676550", animated: false }
	async run(interaction: ButtonInteraction) {
		const channelId = interaction.channel?.id
		if (channelId === "1299906668246863933") {
			mainEmbed = new RosterEmbed(
				"Titan Squad",
				titanSquadList,
				"https://i.imgur.com/wpAerkz.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1299906189353549914") {
			mainEmbed = new RosterEmbed(
				"160th Soar",
				soar,
				"https://i.imgur.com/4PcUqF6.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		}
	}
}