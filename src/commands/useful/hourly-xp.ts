import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	CommandWithSubcommands,
	Embed
} from "@buape/carbon"

import { type Env } from "../../index.js"

const allowedUsers = [
	"829909201262084096",
	"396891399116554240",
	"790301500521971743",
	"588752803602890793"
]

const armyServer = "993993868712349716"

class RequestEmbed extends Embed {
	constructor(description: string) {
		super({})
		this.description = description
		this.title = "New Request!"
		this.color = 0x454b1b
	}
}

class AcceptEmbed extends Embed {
	constructor(description: string) {
		super({})
		this.description = description
		this.title = "Request Accepted"
		this.color = 0x454b1b
	}
}

class Request extends Command {
	private env: Env

	constructor(env: Env) {
		super()
		this.env = env
	}

	name = "request"
	description = "Put in a request for XP"
	options: APIApplicationCommandBasicOption[] = [
		{
			name: "hours",
			type: ApplicationCommandOptionType.Integer,
			description: "How many hours did you attend?",
			required: true
		},
		{
			name: "operation",
			type: ApplicationCommandOptionType.String,
			description: "What operation was it?",
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user")
		const userId = interaction.userId
		const hours = interaction.options.getInteger("hours", true)
		const operation = interaction.options.getString("operation", true)

		const embed = new RequestEmbed(`<@${userId}>:

            You have requested to log **${hours}** hours on operation **${operation}**`)

		await interaction.reply({
			content: "<@&1291542630777360444>",
			embeds: [embed],
			allowedMentions: { roles: ["1291542630777360444"] }
		})
	}
}

class Accept extends Command {
	private env: Env

	constructor(env: Env) {
		super()
		this.env = env
	}

	name = "accept"
	description = "Accept a users request"
	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who is being accepted?",
			required: true
		},
		{
			name: "hours",
			type: ApplicationCommandOptionType.Integer,
			description: "How many hours did they attend?",
			required: true
		}
	]

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user")
		const commandUser = interaction.userId

		const hours = interaction.options.getInteger("hours", true)
		const user = interaction.options.getUser("user", true)
		const userId = user.id

		const serverId = interaction.guild?.id

		const xp = hours * 10

		if (allowedUsers.includes(commandUser)) {
			await fetch(
				`https://api.kiai.app/v2/${serverId}/member/${userId}/xp`,
				{
					method: "PATCH",
					headers: {
						Authorization: `${this.env.KIAI_API_KEY}`,
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						xp: xp
					})
				}
			)

			const embed = new AcceptEmbed(
				`You have accepted <@${user.id}>'s request for **${hours}** hours, gaining them **${xp}** XP.`
			)
			await interaction.reply({
				content: `<@${user.id}>`,
				embeds: [embed]
			})
		} else {
			await interaction.reply(
				"You don't have permission to accept requests."
			)
		}
	}
}

export default class HourlyXP extends CommandWithSubcommands {
	private env: Env
	name = "hourly-xp"
	description = "Short-link root command"
	defer = true
	subcommands: Command[]

	constructor(env: Env) {
		super()
		this.env = env
		this.subcommands = [new Request(this.env), new Accept(this.env)]
	}
}
