module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{astro,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};