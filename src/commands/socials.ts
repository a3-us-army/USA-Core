import { Command, type CommandInteraction } from "@buape/carbon";

export default class SocialsCommand extends Command {
	name = "socials";
	description = "Send the CAG social media accounts.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"# Youtube: \nhttps://www.youtube.com/@A3USSOFCAG \n\n# TikTok: \nhttps://www.tiktok.com/@cag.ussof \n\n# Instagram: \nhttps://www.instagram.com/cag.ussof/",
		);
	}
}
