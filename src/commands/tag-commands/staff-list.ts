// =================== Imports ===================================

import { Command, type CommandInteraction } from "@buape/carbon";

import staff from "../util-stuff/staff.json";

const output = staff.map(s => `${s.ping} - ${s.position} ${s.emoji} - ${s.boardRank}`).join('\n')

const staffListServer = "## <@&1291542630777360444>:\n <@396891399116554240> - O-3 Captain <:O3_Captain:1300297042731732994> \n\n## <@&1278354078984048742>: \n<@790301500521971743> - W-2 Chief Warrent Officer <:W2_Chief_Warrant_Officer_2:1300296890033639494> \n<@588752803602890793> - E-6 Staff Sergeant <:E6_Staff_Sergeant:1300296754574393394> \n<@891502308804931655> - E-4 Corporal <:E4_Corporal:1300296662731853907>:"
const staffListDms = "## CO Board:\n <@396891399116554240> - O-3 Captain <:O3_Captain:1300297042731732994> \n\n## NCO Board: \n<@790301500521971743> - W-2 Chief Warrent Officer <:W2_Chief_Warrant_Officer_2:1300296890033639494> \n<@588752803602890793> - E-6 Staff Sergeant <:E6_Staff_Sergeant:1300296754574393394> \n<@891502308804931655> - E-4 Corporal <:E4_Corporal:1300296662731853907>:"

export default class StaffListCommand extends Command {
	name = "staff-list";
	description = "List the people with power.";

	async run(interaction: CommandInteraction) {

		const guildId = interaction.guild?.id

		if (guildId === "1277788356067201054"){
			await interaction.reply({content: `${staffListServer}`, allowedMentions: { parse: [] }})
		}
		else if(guildId === "993993868712349716"){
			await interaction.reply({content: `${output}`, allowedMentions: { parse: [] }})
		}
		else {
			await interaction.reply({content: `${staffListDms}`, allowedMentions: { parse: [] }})
		}
	}
}
