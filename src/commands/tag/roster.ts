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
import ghostRaw from "src/storage-files/rosters/ghost-squad.json"
import zeusRaw from "src/storage-files/rosters/zeus-team.json"

const titanSquadList = titanSquadRaw
	.map((s) => `Titan-${s.number} - <@${s.userID}> - **${s.rank}** ${s.emoji}`)
	.join("\n")

const soar = soarRaw
	.map((s) => `<@${s.userID}> - **${s.rank}** ${s.emoji} - **${s.callSign}**`)
	.join("\n")

const ghostSquadList = ghostRaw
	.map((s) => `Ghost-${s.number} - <@${s.userID}> - **${s.rank}** ${s.emoji}`)
	.join("\n")

const zeusList = zeusRaw
	.map((s) => `<@${s.userID}> - ${s.role} - **${s.rank}** ${s.emoji}`)
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
				"https://i.imgur.com/GVoT6Oc.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1306430244215062548") {
			mainEmbed = new RosterEmbed(
				"Ghost Squad",
				ghostSquadList,
				"https://i.imgur.com/lxDghp1.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1304971552273465364") {
			mainEmbed = new RosterEmbed(
				"Zeus Crew",
				zeusList,
				"https://i.imgur.com/tBmhZUx.png"
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

				**Ghost Squad** - 2nd squad of main force.
                
                **160th Soar Detachment** - The handle of the spear, the aviation team.
				
				**Zeus Crew** - Our Zeus Crew is dedicated to providing an immersive, fun, and semi-realistic experience`,
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
			label: "Ghost Squad",
			value: "ghostSquad",
			description: "2nd squad of main force."
		},
		{
			label: "160th Soar Detachment",
			value: "160thSoar",
			description: "Special Avation Unit, the handle"
		},
		{
			label: "Zeus Crew",
			value: "zeusTeam",
			description:
				"Our Zeus Crew is dedicated to providing an immersive and fun experience"
		}
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "titanSquad") {
			mainEmbed = new RosterEmbed(
				"Titan Squad",
				titanSquadList,
				"https://i.imgur.com/GVoT6Oc.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		} else if (userInput === "zeusTeam") {
			mainEmbed = new RosterEmbed(
				"Zeus Crew",
				zeusList,
				"https://i.imgur.com/tBmhZUx.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		} else if (userInput === "ghostSquad") {
			mainEmbed = new RosterEmbed(
				"Ghost Squad",
				ghostSquadList,
				"https://i.imgur.com/lxDghp1.png"
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
				"https://i.imgur.com/GVoT6Oc.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1304971552273465364") {
			mainEmbed = new RosterEmbed(
				"Zeus Crew",
				zeusList,
				"https://i.imgur.com/tBmhZUx.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshButton()])]
			})
		} else if (channelId === "1306430244215062548") {
			mainEmbed = new RosterEmbed(
				"Ghost Squad",
				ghostSquadList,
				"https://i.imgur.com/lxDghp1.png"
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
