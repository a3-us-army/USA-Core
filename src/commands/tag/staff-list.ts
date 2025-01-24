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

import prTeam from "src/storage-files/staff/pr-team.json" assert {
	type: "json"
}

const prTeamList = prTeam
	.map((s) => `<@${s.userID}> - ${s.access} - ${s.position}`)
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
		} else {
			mainEmbed = new StaffListEmbed(
				"Staff Listings",
				`**Unit Command** - The leaders that make up this unit.
			
				**PR Team** - The people who help with recruitment and run the socials.`,
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
		}
	]
	async run(interaction: StringSelectMenuInteraction) {
		const userInput = interaction.values.toString()

		if (userInput === "unitCommand") {
			mainEmbed = new StaffListEmbed(
				"Unit Command",
				"https://cag-ussof.org/C&S",
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
		}
	}
}
