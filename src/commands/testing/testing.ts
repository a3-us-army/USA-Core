import {
	AllowedMentionsTypes,
	APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	Modal,
	type ModalInteraction,
	Row,
	TextInput,
	TextInputStyle
} from "@buape/carbon"

export default class TestingCommand extends Command {
	name = "modal"
	description = "Modal test"

	modals = [TestModal]

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "day1",
			type: ApplicationCommandOptionType.String,
			description: "What is the modpack's date?",
			required: true
		},
		{
			name: "day2",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		},
		{
			name: "day2",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		},
		{
			name: "day2",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		},
		{
			name: "day",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		},
		{
			name: "day6",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		},
		{
			name: "day7",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		await interaction.showModal(new TestModal())
	}
}

class TestModal extends Modal {
	title = "Test Modal"
	customId = "test-modal"

	components = [
		new Row([new TextInputHi()]),
		new Row([new TextInputName()]),
		new Row([new TextInputAge()]),
		new Row([new TextInputColor()]),
		new Row([new TextInputHeight()])
	]

	async run(interaction: ModalInteraction) {
		const name = interaction.fields.getText("name")
		const age = interaction.fields.getText("age")
		const color = interaction.fields.getText("color")
		const height = interaction.fields.getText("height") || "not"
		await interaction.reply({
			content: `@everyone Hi ${name}, you are ${age} years old, and your favorite color is ${color}. You are ${height} tall.`,
			allowedMentions: { parse: ["everyone"] }
		})
	}
}

class TextInputHi extends TextInput {
	label = "Hi, how are you?"
	customId = "hi"
	style = TextInputStyle.Paragraph
}

class TextInputColor extends TextInput {
	label = "What is your favorite color?"
	customId = "color"
}

class TextInputAge extends TextInput {
	label = "How old are you?"
	customId = "age"
}

class TextInputName extends TextInput {
	label = "What is your name?"
	customId = "name"
}

class TextInputHeight extends TextInput {
	label = "How tall are you?"
	customId = "height"
	required = false
}
