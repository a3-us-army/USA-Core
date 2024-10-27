// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class RecruitmentMessageCommand extends Command {
	name = "recruitment-message";
	description = "The recruitment message.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(
			"# USSOF Combat Applications Group\nArma-3 Semi-Milsim Unit\nhttps://discord.gg/QMYsPnHVJG \n\n<<-------------------------------------------------------->>\n\n## Details:\n- 16+ Preferred\n- Semi-MILSIM\n- Special Forces | Small Team Tactics\n- Microphone Required\n\n*We're a semi-milsim unit primarily focused on special operations and small team tactics. We like to keep things structured, but we always prioritize keeping things fun while being organized. Our missions are designed to challenge teamwork and precision, but we also understand that real life comes first. Attendance isn't strict; however, if our numbers drop too low, we’ll usually reach out to check in with members who are E-3+ and keep everyone in the loop. We are a closely knitted community and we love tactical realism. Our goal is to create an enjoyable and immersive experience for all.*\n\n## Operation Times:\n- 6:30 PM EST on Tuesday and Wednesday\n- note: we host random events outside the schedule throughout the week.\n\n\n## List of MOS:\n***MOS Availability is subject to change due to unit needs; Message the Recruiter about openings.***\n\n### Operator MOS:\n- Combat Engineer | 12B\n- Demolitions Expert | 18C\n- Sniper/Marksman | 18B\n- Combat Medic | 18D\n- Grenadier | 11B\n- Rifleman | 11B\n- Machine Gunner | 18B\n- Joint Terminal Attack Controller (JTAC) | 13F\n\n### 160th Detachment MOS:\n- Crew Chief | 15T\n- Door Gunner | 15T or 11B\n- Pilot | 15A (Commissioned Officer) or 153A (Warrant Officer)\n- UAV Operator | 15W\n\n[image-1](https://i.imgur.com/Tl3WhtH.png) \n[image-2](https://i.imgur.com/LjwUiUZ.png) \n[image-3](https://i.imgur.com/djijSKh.png)",
		);
	}
}