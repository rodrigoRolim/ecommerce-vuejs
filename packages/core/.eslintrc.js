module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
};