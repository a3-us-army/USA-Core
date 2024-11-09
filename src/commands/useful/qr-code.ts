// =================== Imports ===================================

import {
	ApplicationCommandOptionType,
	Command,
	CommandOptions,
	type CommandInteraction
} from "@buape/carbon"

import { shortio } from "src/lib/short-io.js"

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
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		const id = interaction.options.getString("id", true)
		const bgColor = interaction.options.getString("bg-color", false)
		const color = interaction.options.getString("color", false)

		const qrCode = await shortio.link.generateQRCode(id, {
			backgroundColor: bgColor,
			color: color
		})
		const final = JSON.stringify(qrCode)

		await interaction.reply({ content: final })
	}
}
