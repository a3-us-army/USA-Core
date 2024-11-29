// =================== Imports ===================================

import {
	Command,
	type CommandInteraction,
	Row,
	Embed,
	TextInput,
	ModalInteraction,
	Modal,
	TextInputStyle,
	ButtonInteraction,
	ButtonStyle,
	Button
} from "@buape/carbon"

class MainEmbed extends Embed {
	constructor(title: string, description: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
	}
}

export default class ScheduleCommand extends Command {
	name = "schedule"
	description = "Send this weeks schedule!"

	modals = [ScheduleModalOne]

	async run(interaction: CommandInteraction) {
		await interaction.reply({
			content: "Use the button below to open the first 5 days.",
			components: [new Row([new ModalButtonOne()])]
		})
	}
}

class ScheduleModalOne extends Modal {
	title = "Week Schedule"
	customId = "schedule-modal"

	components = [
		new Row([new TextInputMonday()]),
		new Row([new TextInputTuesday()]),
		new Row([new TextInputWendesday()]),
		new Row([new TextInputThursday()]),
		new Row([new TextInputFriday()])
	]

	async run(interaction: ModalInteraction) {
		const monday = interaction.fields.getText("monday") || "N/A"
		const tuesday = interaction.fields.getText("tuesday") || "N/A"
		const wendesday = interaction.fields.getText("wendesday") || "N/A"
		const thursday = interaction.fields.getText("thursday") || "N/A"
		const friday = interaction.fields.getText("friday") || "N/A"

		

		await interaction.reply({
			content: "Next Page",
			components: [new Row([new ModalButtonTwo()])]
		})
	}
}

class ScheduleModalTwo extends Modal {
	title = "Week Schedule"
	customId = "schedule-modal"

	components = [
		new Row([new TextInputWeek()]),
		new Row([new TextInputSaturday()]),
		new Row([new TextInputSunday()])
	]

	async run(interaction: ModalInteraction) {
		const saturday = interaction.fields.getText("saturday") || "N/A"
		const sunday = interaction.fields.getText("sunday") || "N/A"
		const week = interaction.fields.getText("week") || "N/A"

		const mainEmbed = new MainEmbed(
			`Week of ${week}`,
			`**Monday:** ${monday}

            **Tuesday:** ${tuesday}

            **Wendesday:** ${wendesday}

            **Thursday:** ${thursday}

            **Friday:** ${friday}

            **Saturday:** ${saturday}

            **Sunday:** ${sunday}`
		)

		await interaction.reply({})
	}
}

class ModalButtonOne extends Button {
	customId = "modalButton1"
	label = "1st Page!"
	style = ButtonStyle.Secondary
	emoji = { name: "number_1", id: "1299929730182676550", animated: false }
	async run(interaction: ButtonInteraction) {
		await interaction.showModal(new ScheduleModalOne())
	}
}
class ModalButtonTwo extends Button {
	customId = "modalButton1"
	label = "2nd Page!"
	style = ButtonStyle.Secondary
	emoji = { name: "number_2", id: "1299929730182676550", animated: false }
	async run(interaction: ButtonInteraction) {
		await interaction.showModal(new ScheduleModalTwo())
	}
}

class TextInputMonday extends TextInput {
	label = "What are we doing on Monday?"
	customId = "monday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputTuesday extends TextInput {
	label = "What are we doing on Tuesday?"
	customId = "tuesday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputWendesday extends TextInput {
	label = "What are we doing on Wendesday?"
	customId = "wendesday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputThursday extends TextInput {
	label = "What are we doing on Thursday?"
	customId = "thursday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputFriday extends TextInput {
	label = "What are we doing on Friday?"
	customId = "friday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputSaturday extends TextInput {
	label = "What are we doing on Saturday?"
	customId = "saturday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}

class TextInputSunday extends TextInput {
	label = "What are we doing on Sunday?"
	customId = "sunday"
	placeholder = "Optional, defaults to N/A"
	style = TextInputStyle.Paragraph
	required = false
}
class TextInputWeek extends TextInput {
	label = "What is this the week of?"
	customId = "week"
	placeholder = "Example: 11/24 - 11/30"
	style = TextInputStyle.Paragraph
	required = false
}
