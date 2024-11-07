import {
	Button,
	type ButtonInteraction,
	ButtonStyle,
	LinkButton,
	Command,
	type CommandInteraction,
	Row,
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Embed,
} from "@buape/carbon";

let userId = "";
let date = "";
let link = "";

class UpdateEmbed extends Embed {
	constructor(description: string) {
		super({});
		this.description = description;
		this.title = "Update Your Modpack!";
		this.color = 0x454b1b;
	}
}

export default class TestingCommand extends Command {
	name = "testing-command";
	description = "Command used to test shit.";
	defer = true;
	components = [UpdatedButton];

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "date",
			type: ApplicationCommandOptionType.String,
			description: "What is the modpack's date?",
			required: true,
		},
		{
			name: "link",
			type: ApplicationCommandOptionType.String,
			description: "Send a link to the new file.",
			required: true,
		},
	];
	async run(interaction: CommandInteraction) {
		date = interaction.options.getString("date", true);
		link = interaction.options.getString("link", true);
		const updateDescription = `Please update your modpack! Click the button below when you have done so.\n\n**New modpack:** ${link}\n\n**Compatibility Date:** ${date}`;
		const updateEmbed = new UpdateEmbed(updateDescription);
		await interaction.reply({
			embeds: [updateEmbed],
			components: [new Row([new UpdatedButton(), new ModpackLinkButton()])],
		});
	}
}

class ModpackLinkButton extends LinkButton {
	label = "Modpack Link";
	url = link;
}

class UpdatedButton extends Button {
	customId = "updated";
	label = "Updated!";
	style = ButtonStyle.Success;
	async run(interaction: ButtonInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");
		userId = interaction.userId?.toString();

		await interaction.reply(`<@${userId}> has updated their modpack!`);
	}
}
