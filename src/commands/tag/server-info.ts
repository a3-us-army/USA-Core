// =================== Imports ===================================

import { Command, type CommandInteraction, Embed } from "@buape/carbon"

class MainEmbed extends Embed {
	title = "Server Information!"
	fields = [
		{
			name: "TS/Arma Server:",
			value: `**Server IP:**
US-SCEPTER-CAG.factions.ws
**Server Port:** 26985
**Server Password:** CAGUSSOF

**Teamspeak IP:**
brown-gorilla-81187.zap.cloud
**Password:** CAGUSSOF`,
			inline: true
		},
		{
			name: "Useful Links:",
			value: `**[ArmA-3 Unit](https://units.arma3.com/unit/uscag)**
**[Certifications and Roster](https://trello.com/b/OGWWKvaU/certifications-and-player-info)**
**[Teamspeak Download](https://files.teamspeak-services.com/releases/client/3.6.2/TeamSpeak3-Client-win64-3.6.2.exe)**
**[TFAR Plugin](https://cag-ussof.org/cdn/task_force_radio.ts3_plugin)**`,
			inline: true
		},
		{
			name: "Radio Frequencies:",
			value: `**Short Range:** 244
**Long Range:** 44`,
			inline: true
		}
	]
}

export default class ServerInfoCommand extends Command {
	name = "server-info"
	description = "ArmA-3 server info + Other useful information."

	async run(interaction: CommandInteraction) {
		const mainEmbed = new MainEmbed()
		await interaction.reply({ embeds: [mainEmbed] })
	}
}
