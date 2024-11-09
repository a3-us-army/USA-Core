// =================== Imports ===================================

import { Command, Embed, type CommandInteraction } from "@buape/carbon"

import { shortio } from "src/lib/short-io.js"

const domainId = 1224713

let mainEmbed: Embed

class MainEmbed extends Embed {
	constructor(title: string, description: string, footerText: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
		this.footer = {
			text: footerText
		}
	}
}

export default class ListLinksCommand extends Command {
	name = "list-links"
	description = "List all of the shortened links."
	defer = true

	async run(interaction: CommandInteraction) {
		const result = await shortio.link.list(domainId)
		const jsonString = JSON.stringify(result)
		const jsonObject = JSON.parse(jsonString)

		const linkList = jsonObject.links
			.map(
				(t: {
					idString: any
					shortURL: any
					originalURL: any
				}) =>
					`**Short Link:** ${t.shortURL}\n**Target:** ${t.originalURL}\n**ID:** \`${t.idString}\``
			)
			.join("\n\n")

		const count = jsonObject.count

		mainEmbed = new MainEmbed("Links List", linkList, `${count} Link(s)`)

		await interaction.reply({ embeds: [mainEmbed] })
	}
}
