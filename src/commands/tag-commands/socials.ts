// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class SocialsCommand extends Command {
	name = "socials";
	description = "The CAG social media accounts.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"# <:youtube:1299933061965680722> Youtube: \nhttps://www.youtube.com/@A3USSOFCAG \n\n# <:tiktok:1299933083113357362> TikTok: \nhttps://www.tiktok.com/@cag.ussof \n\n# <:instagram:1299933115908620360> Instagram: \nhttps://www.instagram.com/cag.ussof/",
		);
	}
}
