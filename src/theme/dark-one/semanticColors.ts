import { ThemeContext } from "../../types";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;
  return  {
    "enumMember": {
      foreground: palette.teal
    },
    "variable.constant": {
      foreground: palette.peach
    },
    "variable.defaultLibrary": {
      foreground: palette.flamingo
    },
    "variable:dart": {
      foreground: palette.peach
    },
    "property:dart": {
      foreground: palette.peach
    },
    "annotation:dart": {
      foreground: palette.peach
    },
    "parameter.label:dart": {
      foreground: "#abb2bf"
    },
    "macro": {
      foreground: palette.peach
    },
    "tomlArrayKey": {
      foreground: palette.flamingo
    }
  };
};
