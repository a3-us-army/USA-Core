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
	DmChannel,
} from "@buape/carbon";

let userId = "";

export default class UpdateModpackCommand extends Command {
	name = "update-modpack";
	description = "Remind people to update their modpack.";
	defer = true;
	components = [UpdatedButton];

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "who",
			type: ApplicationCommandOptionType.String,
			description: "Who would you like to ask to remind?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		const who = interaction.options.getString("who", true);

		await interaction.reply({
			content: `Please update your modpack! Click the button below when you have done so. \n\n ${who}`,
			components: [new Row([new UpdatedButton()])],
		});
	}
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
