const { EmbedBuilder } = require("discord.js"); //Requerimos los paquetes
const translate = require("@iamtraction/google-translate");

module.exports = {
	name: "traductor", //Nombre del comando
	description: "Traduce palabras a otro idioma", //Descripción del comando
	options: [
		{
			name: "texto",
			description: "Escribe la palabra a traducir",
			type: 3,
			required: true,
			minLength: 2,
			maxLength: 4000,
		},
		{
			name: "idioma",
			description: "Selecciona el idioma a traducir",
			type: 3,
			required: true,
			choices: [
				{ name: "Ingles", value: "en" },
				{ name: "Frances", value: "fr" },
				{ name: "Aleman", value: "de" },
				{ name: "Italiano", value: "it" },
				{ name: "Portugues", value: "pt" },
				{ name: "Español", value: "es" },
			],
		},
	],

	async execute(_, interaction) {
		const texto = interaction.options.getString("texto");
		const lenguaje = interaction.options.getString("idioma");

		await interaction.reply({ content: "🔎 Traduciendo tu mensaje..." });

		const applied = await translate(texto, { to: `${lenguaje}` });

		const embed = new EmbedBuilder()
			.setColor("Green")
			.setDescription(
				`🔎 | **Mensaje traducido**\n\n**Tu texto:**\n\`\`\`${texto}\`\`\`\n**Texto traducido:**\n\`\`\`${applied.text}\`\`\``,
			);

		await interaction.editReply({ content: "", embeds: [embed] });
	},
};

/*
╔═══════════════════════════════════════════════════╗
║  || - ||   Código por erick_jazael        || - |  ║
║     --|   https://discord.gg/9aMxpy8Neb    |--    ║
╚═══════════════════════════════════════════════════╝
*/
