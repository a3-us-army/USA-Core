// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class RulesCommand extends Command {
	name = "rules";
	description = "The CAG Discord server rules";

	async run(interaction: CommandInteraction) {
		await interaction.reply(`
<:number_1:1299937196609900576> Respect Everyone: Treat all members with respect. No harassment, discrimination, or hate speech will be tolerated. 
- No Hard R's (Soft A allowed)

<:number_2:1299937213915598998> No Spamming: Avoid spamming messages, emojis, or links. Keep the chat clean and relevant.

<:number_3:1299937237408153610> No Self-Promotion: Do not advertise your own or others' content without permission from the admins.

<:number_4:1299937260703060010> Use Channels Properly: Post content in the appropriate channels. Keep off-topic discussions in their designated 

<:number_5:1299937282907836527> Follow Discord's TOS: All members must adhere to Discord's Terms of Service and Community Guidelines.

<:number_6:1299937302323400744> Listen to Mods/Admins: The decisions of moderators and admins are final. Respect their authority and follow their instructions.

<:number_7:1299937329724657725> No Impersonation: Do not impersonate other members, moderators, or admins.

<:number_8:1299937359508279386> Have Fun: Enjoy the server and help maintain a positive and welcoming community!`);
	}
}
