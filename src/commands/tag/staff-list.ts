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

import unitCommand from "src/storage-files/staff/unit-command.json"
import prTeam from "src/storage-files/staff/pr-team.json"
import mosTeamLeads from "src/storage-files/staff/mos-team-leads.json"

const unitCommandList = unitCommand
	.map((s) => `<@${s.userID}> - ${s.position} ${s.emoji} - ${s.boardRank}`)
	.join("\n")

const prTeamList = prTeam
	.map((s) => `<@${s.userID}> - ${s.access} - ${s.position}`)
	.join("\n")

const mosTeamLeadList = mosTeamLeads
	.map((s) => `<@${s.userID}> - **${s.position}**`)
	.join("\n")

let mainEmbed = null

class StaffListEmbed extends Embed {
	constructor(title: string, description: string, thumbnail: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
		this.thumbnail = thumbnail
	}
}

export default class StaffListCommand extends Command {
	name = "staff-list"
	description = "List the people who help make this unit what it is."
	components = [RefreshStaffTeamButton, CategorySelectMenu]
	defer = true

	async run(interaction: CommandInteraction) {
		const channelId = interaction.channel?.id
		if (channelId === "1300140360139280394") {
			mainEmbed = new StaffListEmbed(
				"PR Team",
				prTeamList,
				"https://i.imgur.com/RMciiVL.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshStaffTeamButton()])]
			})
		} else if (channelId === "1301669785960054864") {
			mainEmbed = new StaffListEmbed(
				"MOS Team Leads",
				mosTeamLeadList,
				"https://i.imgur.com/sceCyzd.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new RefreshStaffTeamButton()])]
			})
		} else {
			mainEmbed = new StaffListEmbed(
				"Staff Listings",
				`**Unit Command** - The leaders that make up this unit.
			
				**PR Team** - The people who help with recruitment and run the socials.
			
				**MOS Team Leaders** - The professionals in a certian MOS who help train and lead people in the same field`,
				"https://i.imgur.com/VV8XFKY.png"
			)
			await interaction.reply({
				embeds: [mainEmbed],
				components: [new Row([new CategorySelectMenu()])]
			})
		}
	}
}

class CategorySelectMenu extends StringSelectMenu {
	customId = "type"
	placeholder = "Select Staff Type"
	options = [
		{
			label: "Unit Command",
			value: "unitCommand",
			description: "The leaders that make up this unit."
		},
		{
			label: "PR Team",
			value: "prTeam",
			description:
				"The people who help with recruitment and run the socials"
		},
		{
			label: "MOS Team Leaders",
			value: "mosTeamLeads",
			description:
				"The professionals in a certian MOS who help train and lead people in the same field"
		}
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "unitCommand") {
			mainEmbed = new StaffListEmbed(
				"Unit Command",
				unitCommandList,
				"https://i.imgur.com/T0Fh3x8.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		} else if (userInput === "prTeam") {
			mainEmbed = new StaffListEmbed(
				"PR Team",
				prTeamList,
				"https://i.imgur.com/RMciiVL.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		} else if (userInput === "mosTeamLeads") {
			mainEmbed = new StaffListEmbed(
				"MOS Team Leaders",
				mosTeamLeadList,
				"https://i.imgur.com/sceCyzd.png"
			)
			await interaction.update({ embeds: [mainEmbed] })
		}
	}
}

class RefreshStaffTeamButton extends Button {
	customId = "refreshStaffTeam"
	label = "Refresh Message"
	style = ButtonStyle.Secondary
	emoji = { name: "updated", id: "1299929730182676550", animated: false }
	async run(interaction: ButtonInteraction) {
		const channelId = interaction.channel?.id
		if (channelId === "1300140360139280394") {
			mainEmbed = new StaffListEmbed(
				"PR Team",
				prTeamList,
				"https://i.imgur.com/RMciiVL.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshStaffTeamButton()])]
			})
		} else if (channelId === "1301669785960054864") {
			mainEmbed = new StaffListEmbed(
				"MOS Team Leads",
				mosTeamLeadList,
				"https://i.imgur.com/sceCyzd.png"
			)
			await interaction.update({
				embeds: [mainEmbed],
				components: [new Row([new RefreshStaffTeamButton()])]
			})
		}
	}
}