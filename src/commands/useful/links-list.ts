import { Command, type CommandInteraction, Embed } from "@buape/carbon"

import { dub } from "src/lib/dub.js"

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
	description = "List all short links"
	defer = true

	async run(interaction: CommandInteraction) {
		const guildId = interaction.guild?.id

		const result = await dub.links.list()
		const jsonString = JSON.stringify(result)
		const jsonObject = JSON.parse(jsonString)

		if (guildId === "993993868712349716") {
			const linkListTestingServer = jsonObject.result
				.map(
					(t: {
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						domain: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						key: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						url: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						externalId: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						id: any
					}) => `**Short Link:** https://${t.domain}/${t.key}
            **Target:** ${t.url}
            **Ext ID:** \`${t.externalId}\`
			**Int ID:** \`${t.id}\``
				)
				.join("\n\n")

			const count = await dub.links.count()

			mainEmbed = new MainEmbed(
				"Links List",
				linkListTestingServer,
				`${count} Links`
			)

			await interaction.reply({ embeds: [mainEmbed] })
		} else {
			const linkList = jsonObject.result
				.map(
					(t: {
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						domain: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						key: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						url: any
					}) =>
						`**Short Link:** https://${t.domain}/${t.key}
						**Target:** ${t.url}`
				)
				.join("\n\n")

			const count = await dub.links.count()

			mainEmbed = new MainEmbed(
				"Links List",
				linkList.slice(0, 2000),
				`${count} Links`
			)

			await interaction.reply({ embeds: [mainEmbed] })
		}
	}
}
