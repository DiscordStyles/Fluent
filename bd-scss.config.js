/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Fluent',
		author: 'Gibbu',
		version: '1.0.10',
		description: 'Brings the look of Windows 11 to Discord.',
		source: 'https://github.com/DiscordStyles/Fluent',
		invite: 'ZHthyCw',
		authorId: '174868361040232448'
	},
	dev: {
		target: 'src/dev.scss',
		output: "C:/Users/tomme/AppData/Roaming/Vencord/themes"
	},
	baseImport: 'https://discordstyles.github.io/Fluent/Fluent.css',
	addons: [['src/addons/_icons.scss', 'dist/Icons.css']]
};
