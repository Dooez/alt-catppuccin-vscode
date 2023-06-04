import { ThemeContext } from "../../types";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;
  return {
    newOperator: {
      foreground: palette.blue,
    },
    stringLiteral: {
      foreground: palette.peach,
    },
    customLiteral: {
      foreground: palette.yellow,
    },
    numberLiteral:{
      foreground: palette.teal,
    },
  };
};
