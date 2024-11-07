// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

export default class RecruitmentMessageCommand extends Command {
	name = "recruitment-message";
	description = "The recruitment message.";

	async run(interaction: CommandInteraction) {
		await interaction.reply(`
# USSOF Combat Applications Group
Arma-3 Semi-Milsim Unit
https://discord.gg/QMYsPnHVJG 

<<-------------------------------------------------------->>

## Details:
- 16+ Preferred
- Semi-MILSIM
- Special Forces | Small Team Tactics
- Microphone Required

*We're a semi-milsim unit primarily focused on special operations and small team tactics. We like to keep things structured, but we always prioritize keeping things fun while being organized. Our missions are designed to challenge teamwork and precision, but we also understand that real life comes first. Attendance isn't strict; however, if our numbers drop too low, we’ll usually reach out to check in with members who are E-3+ and keep everyone in the loop. We are a closely knitted community and we love tactical realism. Our goal is to create an enjoyable and immersive experience for all.*

## Operation Times:
- 7:00 PM EST on Tuesday and Wednesday
- note: we host random events outside the schedule throughout the week.


## List of MOS:
***MOS Availability is subject to change due to unit needs; Message the Recruiter about openings.***

### Operator MOS:
- Combat Engineer | 12B
- Demolitions Expert | 18C
- Sniper/Marksman | 18B
- Combat Medic | 18D
- Grenadier | 11B
- Rifleman | 11B
- Machine Gunner | 18B
- Joint Terminal Attack Controller (JTAC) | 13F

### 160th Detachment MOS:
- Crew Chief | 15T
- Door Gunner | 15T or 11B
- Pilot | 15A (Commissioned Officer) or 153A (Warrant Officer)
- UAV Operator | 15W

[image-1](https://i.imgur.com/Tl3WhtH.png) 
[image-2](https://i.imgur.com/LjwUiUZ.png) 
[image-3](https://i.imgur.com/djijSKh.png)`);
	}
}