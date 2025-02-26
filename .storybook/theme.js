import { create } from "@storybook/theming/create";
const version = require("../package.json").version;

export default create({
  base: "light",
  background: "white",
  colorPrimary: "#005eb8",
  colorSecondary: "#768692",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontCode: "monospace",

  // Text colors
  textColor: "#212b32",
  textInverseColor: "white",

  // Toolbar default and active colors
  barTextColor: "rgba(255,255,255,0.8)",
  barSelectedColor: "rgba(255,255,255,1)",
  barBg: "#005eb8",

  // Form colors
  inputBg: "white",
  inputBorder: "#425563",
  inputTextColor: "#212b32",
  inputBorderRadius: 4,

  brandTitle: `GDS React Components (v${version})`,
  brandUrl: "https://github.com/jacksonhyde/gds-react-components",
});
