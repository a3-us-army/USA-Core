// =================== Imports ===================================

import { Client, createHandle } from "@buape/carbon";
import { createHandler } from "@buape/carbon/adapters/cloudflare";

// =================== Useful Commands ===================================

import UpdateModpackCommand from "./commands/useful/update-modpack.js";
import PingCommand from "./commands/useful/ping.js";
import HelpCommand from "./commands/useful/help.js";
import InfoCommand from "./commands/useful/info.js";

// =================== Tag Commands ===================================

import SocialsCommand from "./commands/tag/socials.js";
import RulesCommand from "./commands/tag/rules.js";
import EventTimesCommand from "./commands/tag/event-times.js";
import ServerInfoCommand from "./commands/tag/server-info.js";
import MosListCommand from "./commands/tag/mos-list.js";
import RecruitmentMessageCommand from "./commands/tag/recruitment-message.js";
import StaffListCommand from "./commands/tag/staff-list.js";
import RosterCommand from "./commands/tag/roster.js"

// =================== Fun Commands ===================================

import NukeCommand from "./commands/fun/nuke.js";
import RateCommand from "./commands/fun/rate.js";

// =================== Test Stuff ===================================
import TestingCommand from "./commands/testing/testing.js";

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

			new UpdateModpackCommand(),
			new PingCommand(),
			new HelpCommand(),
			new InfoCommand(),

			// =================== Tag Commands ===================================

			new SocialsCommand(),
			new RulesCommand(),
			new EventTimesCommand(),
			new ServerInfoCommand(),
			new MosListCommand(),
			new RecruitmentMessageCommand(),
			new StaffListCommand(),
			new RosterCommand(),

			// =================== Fun Commands ===================================

			new NukeCommand(),
			new RateCommand(),

			// =================== Test Stuff ===================================

			new TestingCommand()
		]
	)
	return [client];
});

const handler = createHandler(handle);
export default { fetch: handler };
