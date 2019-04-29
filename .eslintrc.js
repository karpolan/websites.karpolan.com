module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/prettier',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				printWidth: 80,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: true,
			},
		],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
