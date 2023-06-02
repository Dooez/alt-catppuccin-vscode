import { ThemeContext } from "../types";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;

  if (options.syntaxMode == "monokai"){
    return {
      enumMember: {
        foreground: palette.mauve,
      },
      namespace: {
        foreground: palette.text,
      },
      concept: {
        foreground: palette.rosewater,
      },
    };
  }
  else{
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

  }
};
