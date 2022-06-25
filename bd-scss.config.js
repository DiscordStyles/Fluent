/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Fluent',
		author: 'Gibbu#1211',
		version: '1.0.5',
		description: 'Brings the look of Windows 11 to Discord.',
		source: 'https://github.com/DiscordStyles/Fluent',
		invite: 'ZHthyCw'
	},
	baseImport: 'https://discordstyles.github.io/Fluent/Fluent.css',
	addons: [
		['src/addons/_selfmessages.scss', 'dist/SelfMessages.css']
	]
}