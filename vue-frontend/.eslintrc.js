// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
  ],
  rules: {
     "no-console": process.env.NODE_ENV === "production" ? "error" : "off",

    "vue/multi-word-component-names": [
      "error",
      { ignores: ["Drawer", "Footer"] },
    ],
  },
};