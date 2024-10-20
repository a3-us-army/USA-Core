import { Client, createHandle } from "@buape/carbon";
import { createHandler } from "@buape/carbon/adapters/cloudflare";

// import ButtonCommand from "./commands/button.js";
import PingCommand from "./commands/ping.js";
import HelpCommand from "./commands/help.js";
import RemindCommand from "./commands/remind.js";

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
			// new ButtonCommand(),
			new PingCommand(),
			new HelpCommand(),
			new RemindCommand(),
		],
	);
	return [client];
});

const handler = createHandler(handle);
export default { fetch: handler };
