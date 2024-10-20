import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

export default class RemindCommand extends Command {
	name = "update-modpack";
	description = "Remind people to update their modpack.";
	defer = true;

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
			content: `Hey, dont forget to update your modpack!\n\n${who}`,
		});
	}
}
