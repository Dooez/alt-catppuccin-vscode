import { ThemeContext } from "../types";
import { getTokenColors as defaultTokenColors } from "./default/tokenColors";
import { getTokenColors as monokaiTokenColors } from "./monokai/tokenColors";

export const getTokenColors = (context: ThemeContext) => {
  const { palette, options } = context;

  if (options.syntaxMode == "monokai") {
    return monokaiTokenColors(context);
  }
  else {
    return defaultTokenColors(context);
  }
};
