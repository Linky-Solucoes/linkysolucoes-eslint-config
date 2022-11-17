module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  rules: {
    "vue/no-unused-vars": "off",
    "no-undef": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-v-html": 0,
    "vue/require-default-prop": 0,
    "vue/require-prop-types": 0,
    indent: ["error", 2],
    quotes: ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    semi: ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
