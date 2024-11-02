// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon"

export default class ServerInfoCommand extends Command {
	name = "server-info"
	description = "ArmA-3 server info + Other useful information."

	async run(interaction: CommandInteraction) {
		await interaction.reply(`
# Server Info: <:cag:1299934500624797768>  

**Server Name:** US-SCEPTER-CAG.factions.ws
**Server Port:** 26985
**Server Password:** CAGUSSOF

**Teamspeak IP:** eaa2672.4netplayers.com
**Password:** CAGUSSOF

# Useful Links:

**ArmA-3 Unit:** https://units.arma3.com/unit/uscag
**Certifications and Roster:** https://trello.com/b/OGWWKvaU/certifications-and-player-info
**Teamspeak Download:** https://files.teamspeak-services.com/releases/client/3.6.2/TeamSpeak3-Client-win64-3.6.2.exe
**TFAR Plugin:** https://cag.xanderxx.xyz/cdn/task_force_radio.ts3_plugin

# Radio Frequencies:

**Short Range:** 244
**Long Range:** 44`)
	}
}
