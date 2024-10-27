// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class ServerInfoCommand extends Command {
	name = "server-info";
	description = "ArmA-3 server info + Other useful information.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"# Server Info: \n\n**Server Name:** US-SCEPTER-CAG.factions.ws\n**Server Port:** 26985\n**Server Password:** CAGUSSOF\n\n**Teamspeak IP:** eaa2672.4netplayers.com\n**Password:** CAGUSSOF\n\n# Useful Links:\n\n**ArmA-3 Unit:** https://units.arma3.com/unit/uscag\n**Certifications and Roster:** https://trello.com/b/OGWWKvaU/certifications-and-player-info\n**Teamspeak Download:** https://files.teamspeak-services.com/releases/client/3.6.2/TeamSpeak3-Client-win64-3.6.2.exe\n**TFAR Plugin:** https://discord.com/channels/1277788356067201054/1278492564114112616/1282108951063691264\n\n# Radio Frequencies:\n\n**Short Range:** 244\n**Long Range:** 44",
		);
	}
}
