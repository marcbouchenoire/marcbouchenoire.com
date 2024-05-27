const config = require("@marcbouchenoire/prettier-config")

module.exports = {
  ...config,
  plugins: [...(config.plugins ?? []), "prettier-plugin-tailwindcss"]
}
