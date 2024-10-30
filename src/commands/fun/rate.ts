// =================== Imports ===================================

import {
	Command,
	type CommandInteraction,
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
} from "@buape/carbon";

let thing = "";
let stat = "";

export default class RateCommand extends Command {
	name = "rate";
	description = "Get totally real and totally accurate rating of something.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "thing",
			type: ApplicationCommandOptionType.String,
			description: "What are you checking for?",
			required: true,
		},
        {
			name: "stat",
			type: ApplicationCommandOptionType.String,
			description: "What stat are we checking?",
			required: true,
		}
	];

	async run(interaction: CommandInteraction) {
		thing = interaction.options.getString("thing", true);
        stat = interaction.options.getString("stat", true);

        const random = Math.floor(Math.random() * 101);

		await interaction.reply(`${thing} is ${random}% ${stat}`);
	}
}
