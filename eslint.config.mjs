import configLove from 'eslint-config-love'

export default [
  {
    ...configLove,
    files: ["src/**/*.{ts,js}"],
    rules: {
      ...configLove.rules,
      'no-console': 'error',
    }
  }
]

/*
  {
    languageOptions: {
      sourceType: "module",
    },
    ignores: ["coverage/*", "dist/*"],
    files: ["*.js", "*.ts"],
    rules: {
      "no-console": "error",
    },
  },
*/
