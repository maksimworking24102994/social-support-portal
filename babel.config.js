export default {
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "babel-plugin-transform-import-meta",
  ],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
