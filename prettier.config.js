const config = require("@sapphire/prettier-config");

module.exports = {
  ...config,
  plugins: [require("prettier-plugin-tailwindcss")],
};
