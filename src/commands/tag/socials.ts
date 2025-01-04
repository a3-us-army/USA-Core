// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon"

export default class SocialsCommand extends Command {
	name = "socials"
	description = "The US Army social media accounts."

	async run(interaction: CommandInteraction) {
		await interaction.reply(`
# <:youtube:1299933061965680722> Youtube: 
N/A

# <:tiktok:1299933083113357362> TikTok: 
https://www.tiktok.com/@usarmy.a3

# <:instagram:1299933115908620360> Instagram: 
https://www.instagram.com/usarmy.a3/`)
	}
}
