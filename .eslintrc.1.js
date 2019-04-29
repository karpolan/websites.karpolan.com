module.exports = {
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	root: true,
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				semi: true,
				singleQuote: false,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: true,
			},
		],
	},
};
