// =================== Imports ===================================

import { Command, type CommandInteraction, Embed } from "@buape/carbon";

import contributersRaw from "src/storage-files/bot-contributers.json";

const contributers = contributersRaw
	.map((c) => `${c.ping} - ${c.position} ${c.emoji}`)
	.join("\n");

let infoEmbed = null;

class InfoEmbed extends Embed {
	title = "Bot info:";
	color = 0x454b1b;
	fields = [
		{ name: "Bot Owner", value: "<@829909201262084096>", inline: true },
		{ name: "Contributers", value: contributers, inline: true },
		{
			name: "Source Code",
			value: "[Click Here](https://github.com/Xanderxx46/cag-faq)",
			inline: true,
		},
		{
			name: "About CAG Operating System",
			value:
				"This bot is a multipurpose bot to help do some stuff in CAG. It has multiple category of commands such as tag commands, useful commands, and even some fun commands. The tag commands are so we can easily paste different things, such as the MOS list as well as server info. It lets us DM people with the server info without having to go copy and pasting so much. It also allows to keep track of who has updated their modpack.",
			inline: false,
		},
	];
	thumbnail = "https://i.imgur.com/LjwUiUZ.png";
}

export default class InfoCommand extends Command {
	name = "info";
	description = "Information on this bot.";
	defer = true;

	async run(interaction: CommandInteraction) {
		infoEmbed = new InfoEmbed();
		await interaction.reply({ embeds: [infoEmbed] });
	}
}

