import { Client, createHandle } from "@buape/carbon";
import { createHandler } from "@buape/carbon/adapters/cloudflare";

import UpdateModpackCommand from "./commands/update-modpack.js";
import PingCommand from "./commands/ping.js";
import HelpCommand from "./commands/help.js";

const handle = createHandle((env) => {
	const client = new Client(
		{
			baseUrl: String(env.BASE_URL),
			deploySecret: String(env.DEPLOY_SECRET),
			clientId: String(env.DISCORD_CLIENT_ID),
			publicKey: String(env.DISCORD_PUBLIC_KEY),
			token: String(env.DISCORD_BOT_TOKEN),
			clientSecret: String(env.DISCORD_CLIENT_SECRET),
		},
		[
			new UpdateModpackCommand(),
			new PingCommand(),
			new HelpCommand(),
		],
	);
	return [client];
});

const handler = createHandler(handle);
export default { fetch: handler };
