// =================== Imports ===================================

import {
    Command, 
    type CommandInteraction, 
} from "@buape/carbon";

export default class TestingCommand extends Command {
	name = "testing";
	description = "Personal test command";
	ephemeral = true
	defer = true;

	async run(interaction: CommandInteraction){
		const guildId = interaction.guild?.id

		if(guildId === "993993868712349716"){
			await interaction.reply({ content: "yes" });
		} else {
			await interaction.reply({content: "This is a testing command for Xander only. Please refrain from trying this again."})
		}
	}
}

