// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon"

export default class RecruitmentMessageCommand extends Command {
	name = "recruitment-message"
	description = "The recruitment message."

	async run(interaction: CommandInteraction) {
		await interaction.reply(`**📢 Join [USA] United States Army Today!**

Are you looking for a **semi-milsim Arma 3 unit** that values teamwork, tactical gameplay, and most importantly, having fun? Look no further!  

**Who We Are:**
We’re a United States Armed Forces-inspired unit that strikes the perfect balance between realism and relaxation. Whether you're a seasoned Arma veteran or new to the game, we welcome players of all skill levels.  

**What We Offer:**
- Immersive, team-oriented missions  
- A relaxed and friendly atmosphere—no over-the-top punishments or stress  
- Flexible scheduling that respects real-life commitments  
- Regular operations: **Tuesdays and Wednesdays at 7 PM EST (<t:1736380800:t> your time)**, with a posted schedule to keep things organized  

**Why Join Us?**
we know gaming is about unwinding and having a great time with friends. You’ll experience realistic gameplay without the unnecessary pressure of strict milsim units.  

**Rosters**
https://go.cag-ussof.org/rangers
https://go.cag-ussof.org/1st-combat

**MEPS Invitation**
https://discord.gg/3mMayQqfd7`)
	}
}
