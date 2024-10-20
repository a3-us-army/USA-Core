import { Command, type CommandInteraction, Embed } from "@buape/carbon";

const helpTitles = [
	"Here are the commands you can do:",
	"You need help? Damn lol:",
	"Help? Yeah sure:",
	"Lol loser needs help:",
	"Ugh i have to do things:",
	"Heres your help ig:",
	"Why are you asking me:",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

class HelpEmbed extends Embed {
	constructor(title: string) {
		super({});
		this.description = "The Help Embed!";
		this.title = title;
		this.color = 0xff0000;
		this.fields = [
			{
				name: "Useful Commands:",
				value:
					'</help:1292673305840713739> - Show this menu \n </ping:1292673305840713740> - Bot replies with "Pong"\n </update-modpack:1292950221495730300> - Remind someone to update their modpack."',
				inline: false,
			},
			{
				name: "Other Commands:",
				value: "",
				inline: false,
			},
		];
	}
}

export default class HelpCommand extends Command {
	name = "help";
	description = "Show the help menu";
	defer = true;

	async run(interaction: CommandInteraction) {
		const helpTitle = getRandom(helpTitles);
		const helpEmbed = new HelpEmbed(helpTitle);

		await interaction.reply({ embeds: [helpEmbed] });
	}
}
