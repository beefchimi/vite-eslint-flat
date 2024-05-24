import configLove from 'eslint-config-love'

export default [
  configLove,
  {
    rules: {
      'no-console': 'error'
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
