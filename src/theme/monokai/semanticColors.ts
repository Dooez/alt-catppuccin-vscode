import { ThemeContext } from "../../types";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;
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
};
