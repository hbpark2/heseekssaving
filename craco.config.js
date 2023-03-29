// eslint-disable-next-line import/no-extraneous-dependencies
const CracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'jsconfig',
				jsConfigPath: 'jsconfig.paths.json',
			},
		},
	],
};
