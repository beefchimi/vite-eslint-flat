import configLove from 'eslint-config-love';
// Includes both `config` and `plugin`.
import pluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  configLove,
  pluginPrettier,
  {
    files: ['**/*.ts', '**/*.js', '**/*.mjs'],
    ignores: ['coverage/**', 'dist/**'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  /*
  import globals from 'globals';

  {
    languageOptions: {
      ...configLove.languageOptions,
      parserOptions: {
        ...configLove.languageOptions.parserOptions,
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  */
];
