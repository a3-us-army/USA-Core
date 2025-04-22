import {
	Command,
	type CommandInteraction,
	Embed,
	Modal,
	type ModalInteraction,
	Row,
	TextInput,
	TextInputStyle
} from "@buape/carbon"

export default class EventCommand extends Command {
	name = "new-event"
	description = "Make a new event"

	modals = [TestModal]

	async run(interaction: CommandInteraction) {
		await interaction.showModal(new TestModal())
	}
}

class MainEmbed extends Embed {
	constructor(description: string, title: string, thumbnail: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
		this.thumbnail = thumbnail
	}
}

class TestModal extends Modal {
	title = "Test Modal"
	customId = "test-modal"

	components = [
		new Row([new TextInputName()]),
		new Row([new TextInputTime()]),
		new Row([new TextInputEventDescription()]),
		new Row([new TextInputDuration()]),
		new Row([new TextInputImage()])
	]

	async run(interaction: ModalInteraction) {
		const name = interaction.fields.getText("name")
		const time = interaction.fields.getText("time")
		const description = interaction.fields.getText("description")
		const duration = interaction.fields.getText("duration")
		const image =
			interaction.fields.getText("image") ||
			"https://cdn.xanderxx.xyz/1a-logo.png"

		const mainEmbed = new MainEmbed(
			`
            **Event Time**: <t:${time}>
            
            **Event Description**: ${description}
			
			**Event Duration**: Approx ${duration}`,
			`${name}`,
			`${image}`
		)
		await interaction.reply({ embeds: [mainEmbed] })
	}
}

class TextInputName extends TextInput {
	label = "What is the event name"
	customId = "name"
}

class TextInputTime extends TextInput {
	label = "What is the event time (unix timestamp ONLY)"
	customId = "time"
}

class TextInputEventDescription extends TextInput {
	label = "What is the event description."
	customId = "description"
	style = TextInputStyle.Paragraph
}

class TextInputDuration extends TextInput {
	label = "How long will it last."
	customId = "duration"
}

class TextInputImage extends TextInput {
	label = "What image?"
	customId = "image"
	required = false
}
