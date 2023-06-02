import { ThemeContext } from "../../types";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;
  return {
    enumMember: {
      foreground: palette.sky,
    },
    "variable.constant": {
      foreground: palette.yellow,
    },
    "variable.defaultLibrary": {
      foreground: palette.peach,
    },
  };

};
