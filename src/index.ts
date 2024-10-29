// =================== Imports ===================================

import { Client, createHandle } from "@buape/carbon";
import { createHandler } from "@buape/carbon/adapters/cloudflare";

// =================== Useful Commands ===================================

import UpdateModpackCommand from "./commands/useful-commands/update-modpack.js";
import PingCommand from "./commands/useful-commands/ping.js";
import HelpCommand from "./commands/useful-commands/help.js";

// =================== Tag Commands ===================================

import SocialsCommand from "./commands/tag-commands/socials.js";
import RulesCommand from "./commands/tag-commands/rules.js";
import EventTimesCommand from "./commands/tag-commands/event-times.js";
import ServerInfoCommand from "./commands/tag-commands/server-info.js";
import MosListCommand from "./commands/tag-commands/mos-list.js";
import RecruitmentMessageCommand from "./commands/tag-commands/recruitment-message.js";
import StaffListCommand from "./commands/tag-commands/staff-list.js";

// =================== Fun Commands ===================================

import NukeCommand from "./commands/fun-commands/nuke.js";

// =================== Test Stuff ===================================
import TestingCommand from "./commands/testing-commands/testing.js";

const handle = createHandle((env) => {
	const client = new Client(
		{
			baseUrl: String(env.BASE_URL),
			deploySecret: String(env.DEPLOY_SECRET),
			clientId: String(env.DISCORD_CLIENT_ID),
			publicKey: String(env.DISCORD_PUBLIC_KEY),
			token: String(env.DISCORD_BOT_TOKEN),
		},
		[
			// =================== Useful Commands ===================================

			new UpdateModpackCommand(),
			new PingCommand(),
			new HelpCommand(),

			// =================== Tag Commands ===================================

			new SocialsCommand(),
			new RulesCommand(),
			new EventTimesCommand(),
			new ServerInfoCommand(),
			new MosListCommand(),
			new RecruitmentMessageCommand(),
			new StaffListCommand(),

			// =================== Fun Commands ===================================

			new NukeCommand(),

			// =================== Test Stuff ===================================

			new TestingCommand(),
		],
	);
	return [client];
});

const handler = createHandler(handle);
export default { fetch: handler };
