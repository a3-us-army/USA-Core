import { Command, type CommandInteraction } from "@buape/carbon";

export default class RulesCommand extends Command {
	name = "rules";
	description = "Send the CAG rules.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"**1.** Respect Everyone: Treat all members with respect. No harassment, discrimination, or hate speech will be tolerated. \n- No Hard R's (Soft A allowed)\n\n**2.** No Spamming: Avoid spamming messages, emojis, or links. Keep the chat clean and relevant.\n\n**3.** No Self-Promotion: Do not advertise your own or others' content without permission from the admins.\n\n**4.** Use Channels Properly: Post content in the appropriate channels. Keep off-topic discussions in their designated \n\n**5.** Follow Discord's TOS: All members must adhere to Discord's Terms of Service and Community Guidelines.\n\n**6.** Listen to Mods/Admins: The decisions of moderators and admins are final. Respect their authority and follow their instructions.\n\n**7.** No Impersonation: Do not impersonate other members, moderators, or admins.\n\n**8.** Have Fun: Enjoy the server and help maintain a positive and welcoming community!",
		);
	}
}
