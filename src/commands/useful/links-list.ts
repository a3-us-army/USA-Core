import { Command, type CommandInteraction, Embed } from "@buape/carbon"

import { dub } from "src/lib/dub.js"

let mainEmbed: Embed

class MainEmbed extends Embed {
	constructor(title: string, description: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
	}
}

export default class ListLinksCommand extends Command {
	name = "list"
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
						externalID: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						id: any
					}) => `**Short Link:** https://${t.domain}/${t.key}
            **Target:** ${t.url}
            **ID:** ${t.externalID} | ${t.id}`
				)
				.join("\n\n")

			mainEmbed = new MainEmbed(
				"Links List",
				linkListTestingServer.slice(0, 2000)
			)

			await interaction.reply({ embeds: [mainEmbed] })
		} else {
			const linkList = jsonObject.result
				.map(
					(t: {
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						id: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						externalID: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						domain: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						key: any
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						url: any
					}) => `**Short Link:** https://${t.domain}/${t.key}
            **Target:** ${t.url}`
				)
				.join("\n\n")

			mainEmbed = new MainEmbed("Links List", linkList.slice(0, 2000))

			await interaction.reply({ embeds: [mainEmbed] })
		}
	}
}
