import {
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	type CommandOptions,
	CommandWithSubcommands,
	Embed
} from "@buape/carbon"

import { dub } from "src/lib/dub.js"

let mainEmbed: Embed

let errorEmbed: Embed

class MainEmbed extends Embed {
	constructor(title: string, description: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0x454b1b
	}
}

class ErrorEmbed extends Embed {
	constructor(title: string, description: string) {
		super({})
		this.description = description
		this.title = title
		this.color = 0xff0000
	}
}

class CreateLinkCommand extends Command {
	name = "create"
	description = "Create a new shortened link!"
	defer = true

	options: CommandOptions = [
		{
			name: "url",
			type: ApplicationCommandOptionType.String,
			description: "What should this link lead to?",
			required: true
		},
		{
			name: "key",
			type: ApplicationCommandOptionType.String,
			description:
				"What slug should it be? (https://go.cag-ussof.org/{KEY})",
			required: true
		},
		{
			name: "ext-id",
			type: ApplicationCommandOptionType.String,
			description: "Unique id to identify each link.",
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		await interaction.guild?.fetch()

		const guildId = interaction.guild?.id

		const url = interaction.options.getString("url", true)
		const key = interaction.options.getString("key", true)
		const ext = interaction.options.getString("ext-id", true)

		if (guildId === "993993868712349716") {
			const { shortLink } = await dub.links.create({
				url: url,
				key: key,
				externalId: ext
			})

			mainEmbed = new MainEmbed(
				"New Link",
				`**You have created:** ${shortLink}\n\n**Which leads to:** ${url}\n\n**External ID:** ${ext}`
			)

			errorEmbed = new ErrorEmbed(
				"You can not use this in this guild.",
				`You can not use this command in guild ${guildId}`
			)

			await interaction.reply({ embeds: [mainEmbed] })
		} else {
			await interaction.reply({ embeds: [errorEmbed] })
		}
	}
}

class UpdateLinkCommand extends Command {
	name = "update"
	description = "Update a command."
	defer = true

	options: CommandOptions = [
		{
			name: "url",
			type: ApplicationCommandOptionType.String,
			description: "What should the new URL be?",
			required: true
		},
		{
			name: "id",
			type: ApplicationCommandOptionType.String,
			description: "**NOTE*:** Use EXTERNAL ID, defined in /links list",
			required: true
		},
		{
			name: "key",
			type: ApplicationCommandOptionType.String,
			description: "What should the new slug be? (Optional)",
			required: false
		}
	]

	async run(interaction: CommandInteraction) {
		const guildId = interaction.guild?.id

		const id = interaction.options.getString("id", true)
		const newUrl = interaction.options.getString("url", true)
		const newKey = interaction.options.getString("key", false)

		if (guildId === "993993868712349716") {
			const newLink = await dub.links.update(`ext_${id}`, {
				url: newUrl,
				key: newKey
			})

			const jsonString = JSON.stringify(newLink)
			const jsonObject = JSON.parse(jsonString)

			const url = jsonObject.url
			const key = jsonObject.key
			const domain = jsonObject.domain

			mainEmbed = new MainEmbed(
				"Updated Link",
				`**Short Link** https://${domain}/${key}\n\n**New URL:** ${url}\n\n**ID:** ${id}`
			)

			errorEmbed = new ErrorEmbed(
				"You can not use this in this guild.",
				`You can not use this command in guild ${guildId}`
			)

			await interaction.reply({ embeds: [mainEmbed] })
		} else {
			await interaction.reply({ embeds: [errorEmbed] })
		}
	}
}

export default class LinkAdminCommand extends CommandWithSubcommands {
	name = "link-admin"
	description = "Do many things with dub.co Link!"
	defer = true

	subcommands = [new CreateLinkCommand(), new UpdateLinkCommand()]
}
