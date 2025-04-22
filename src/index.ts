// =================== Imports ===================================

import { Client, createHandle } from "@buape/carbon"
import { createHandler } from "@buape/carbon/adapters/cloudflare"

// =================== Useful Commands ===================================

import PingCommand from "./commands/useful/ping.js"
import HelpCommand from "./commands/useful/help.js"
import InfoCommand from "./commands/useful/info.js"
import EventCommand from "./commands/useful/event-attendence.js"

// =================== Tag Commands ===================================

import SocialsCommand from "./commands/tag/socials.js"
import EventTimesCommand from "./commands/tag/event-times.js"
import ServerInfoCommand from "./commands/tag/server-info.js"
import RecruitmentMessageCommand from "./commands/tag/recruitment-message.js"

// =================== Fun Commands ===================================

import NukeCommand from "./commands/fun/nuke.js"
import RateCommand from "./commands/fun/rate.js"

export type Env = {
	DISCORD_CLIENT_ID: string
	DISCORD_PUBLIC_KEY: string
	DISCORD_BOT_TOKEN: string
	DEPLOY_SECRET: string
	KIAI_API_KEY: string
}

const handle = createHandle((env) => {
	const client = new Client(
		{
			baseUrl: String(env.BASE_URL),
			deploySecret: String(env.DEPLOY_SECRET),
			clientId: String(env.DISCORD_CLIENT_ID),
			publicKey: String(env.DISCORD_PUBLIC_KEY),
			token: String(env.DISCORD_BOT_TOKEN)
		},
		[
			// =================== Useful Commands ===================================

			new PingCommand(),
			new HelpCommand(),
			new InfoCommand(),
			new EventCommand(),

			// =================== Tag Commands ===================================

			new SocialsCommand(),
			new EventTimesCommand(),
			new ServerInfoCommand(),
			new RecruitmentMessageCommand(),

			// =================== Fun Commands ===================================

			new NukeCommand(),
			new RateCommand()
		]
	)
	return [client]
})

const handler = createHandler(handle)
export default { fetch: handler }
