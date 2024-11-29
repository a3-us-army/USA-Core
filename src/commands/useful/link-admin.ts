import {
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	type CommandOptions,
	CommandWithSubcommands,
	Embed
} from "@buape/carbon"

import { Shortio } from "@short.io/client-node"

import { Env } from "src/index.js"

const domain = "go.cag-ussof.org"

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

export default class LinkAdminCommand extends CommandWithSubcommands {
	name = "link-admin"
	description = "Do many things with dub.co Link!"
	defer = true

	subcommands: Command[]

	private env: Env

	constructor(env: Env) {
		super()
		this.env = env
		this.subcommands = [
			new Create(env),
			new Update(env),
			new Delete(env)
		]
	}
}

class Create extends Command {
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
			name: "path",
			type: ApplicationCommandOptionType.String,
			description:
				"What slug should it be? (https://go.cag-ussof.org/{KEY})",
			required: true
		}
	]

	env: Env
	constructor(env: Env) {
		super()
		this.env = env
	}

	async run(interaction: CommandInteraction) {
		const guildId = interaction.guild?.id

		const userId = interaction.user?.id

		const shortio = new Shortio(this.env.SHORT_IO_API_KEY)

		const url = interaction.options.getString("url", true)
		const path = interaction.options.getString("path", true)

		errorEmbed = new ErrorEmbed(
			"You do not have permission to use this.",
			`You are not an authorized user to use this command. Please talk to <@829909201262084096> or <@3968913991165542400>`
		)

		if (
			userId === "829909201262084096" ||
			userId === "396891399116554240"
		) {
			if (guildId === "993993868712349716") {
				const link = await shortio.link.create(domain, url, {
					path: path,
					title: path
				})

				const jsonString = JSON.stringify(link)
				const jsonObject = JSON.parse(jsonString)

				mainEmbed = new MainEmbed(
					"New Link",
					`**You have created:** ${jsonObject.shortURL}\n\n**Which leads to:** ${url}\n\n**ID:** \`${jsonObject.idString}\``
				)

				await interaction.reply({ embeds: [mainEmbed] })
			} else {
				const link = await shortio.link.create(domain, url, {
					path: path
				})

				const jsonString = JSON.stringify(link)
				const jsonObject = JSON.parse(jsonString)

				mainEmbed = new MainEmbed(
					"New Link",
					`**You have created:** ${jsonObject.shortURL}\n\n**Which leads to:** ${url}`
				)

				await interaction.reply({ embeds: [mainEmbed] })
			}
		} else {
			await interaction.reply({ embeds: [errorEmbed] })
		}
	}
}

class Delete extends Command {
	name = "delete"
	description = "Delete a short link"
	defer = true

	options: CommandOptions = [
		{
			name: "id",
			type: ApplicationCommandOptionType.String,
			description: "ID found in /list-links",
			required: true
		}
	]

	env: Env
	constructor(env: Env) {
		super()
		this.env = env
	}

	async run(interaction: CommandInteraction) {
		const userId = interaction.user?.id

		const id = interaction.options.getString("id", true)

		const shortio = new Shortio(this.env.SHORT_IO_API_KEY)

		errorEmbed = new ErrorEmbed(
			"You do not have permission to use this.",
			`You are not an authorized user to use this command. Please talk to <@829909201262084096> or <@3968913991165542400>`
		)

		if (
			userId === "829909201262084096" ||
			userId === "396891399116554240"
		) {
			await shortio.link.delete(id)

			mainEmbed = new MainEmbed(
				"Deleted Link",
				`You have deleted link with id: \`${id}\``
			)

			await interaction.reply({ embeds: [mainEmbed] })
		} else {
			await interaction.reply({ embeds: [errorEmbed] })
		}
	}
}

class Update extends Command {
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
			description: "Defined in /list-links",
			required: true
		},
		{
			name: "path",
			type: ApplicationCommandOptionType.String,
			description: "What should the new slug be? (Optional)",
			required: false
		}
	]

	env: Env
	constructor(env: Env) {
		super()
		this.env = env
	}

	async run(interaction: CommandInteraction) {
		const userId = interaction.user?.id
		const guildId = interaction.guild?.id

		const shortio = new Shortio(this.env.SHORT_IO_API_KEY)

		const id = interaction.options.getString("id", true)
		const newUrl = interaction.options.getString("url", true)
		const newPath = interaction.options.getString("key", false)

		errorEmbed = new ErrorEmbed(
			"You do not have permission to use this.",
			`You are not an authorized user to use this command. Please talk to <@829909201262084096> or <@3968913991165542400>`
		)
		if (
			userId === "829909201262084096" ||
			userId === "396891399116554240"
		) {
			if (guildId === "993993868712349716") {
				const newLink = await shortio.link.update(id, {
					path: newPath,
					originalURL: newUrl
				})

				const jsonString = JSON.stringify(newLink)
				const jsonObject = JSON.parse(jsonString)

				mainEmbed = new MainEmbed(
					"Updated Link",
					`**New Link** ${jsonObject.shortURL}\n\n**Which leads to:** ${jsonObject.originalURL}\n\n**ID:** \`${jsonObject.idString}\``
				)

				await interaction.reply({ embeds: [mainEmbed] })
			} else {
				const newLink = await shortio.link.update(id, {
					path: newPath,
					originalURL: newUrl
				})

				const jsonString = JSON.stringify(newLink)
				const jsonObject = JSON.parse(jsonString)

				mainEmbed = new MainEmbed(
					"Updated Link",
					`**New Link** ${jsonObject.shortURL}\n\n**Which leads to:** ${jsonObject.originalURL}`
				)

				await interaction.reply({ embeds: [mainEmbed] })
			}
		} else {
			await interaction.reply({ embeds: [errorEmbed] })
		}
	}
}
