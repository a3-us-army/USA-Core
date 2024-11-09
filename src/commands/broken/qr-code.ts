// =================== Imports ===================================

import {
	ApplicationCommandOptionType,
	Command,
	type CommandOptions,
	type CommandInteraction,
	Embed
} from "@buape/carbon"

import { shortio } from "src/lib/short-io.js"

let mainEmbed: Embed

class MainEmbed extends Embed {
	constructor(image: string) {
		super({})
		this.description = "eee"
		this.title = "eeeee"
		this.color = 0x454b1b
		this.image = image
	}
}

export default class QrCodeCommand extends Command {
	name = "qr-code"
	description = "Generate a QR Code"
	defer = true
	options: CommandOptions = [
		{
			name: "id",
			type: ApplicationCommandOptionType.String,
			description: "Defined in /list-links",
			required: true
		},
		{
			name: "bg-color",
			type: ApplicationCommandOptionType.String,
			description: "Background Color, defaults to white. (Optional)",
			required: false
		},
		{
			name: "color",
			type: ApplicationCommandOptionType.String,
			description: "Main Color, defaults to black. (Optional)",
			required: false
		}
	]

	async run(interaction: CommandInteraction) {
		const id = interaction.options.getString("id", true)
		const bgColor = interaction.options.getString("bg-color", false)
		const color = interaction.options.getString("color", false)

		const qrCode = await shortio.link.generateQRCode(id, {
			backgroundColor: bgColor,
			color: color,
			type: "svg"
		}) 
		
		const final = JSON.stringify(qrCode)

		mainEmbed = new MainEmbed(final)

		await interaction.reply({ embeds: [mainEmbed] })
	}
}
