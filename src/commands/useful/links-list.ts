// =================== Imports ===================================

import { Command, Embed, type CommandInteraction } from "@buape/carbon"

import { Shortio } from "@short.io/client-node"

import { Env } from "src/index.js"

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

	private env: Env
	constructor(env: Env) {
		super()
		this.env = env
	}

	async run(interaction: CommandInteraction) {
		const shortio = new Shortio(this.env.SHORT_IO_API_KEY)

		const result = await shortio.link.list(domainId)
		const jsonString = JSON.stringify(result)
		const jsonObject = JSON.parse(jsonString)

		const linkList = jsonObject.links
			.map(
				(t: {
					// biome-ignore lint/suspicious/noExplicitAny: <Works fine>
					idString: any
					// biome-ignore lint/suspicious/noExplicitAny: <Works fine>
					shortURL: any
					// biome-ignore lint/suspicious/noExplicitAny: <Works fine>
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
