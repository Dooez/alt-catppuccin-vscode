import { ThemeContext } from "../types";
import { getTokenColors as defaultTokenColors } from "./default/tokenColors";
import { getTokenColors as monokaiTokenColors } from "./monokai/tokenColors";
import { getTokenColors as darkOneTokenColors } from "./dark-one/tokenColors";
import { getTokenColors as msTokenColors } from "./ms/tokenColors";

export const getTokenColors = (context: ThemeContext) => {
  const { palette, options } = context;

  if (options.syntaxMode == "monokai") {
    return monokaiTokenColors(context);
  }
  else if(options.syntaxMode == "dark-one"){
    return darkOneTokenColors(context);
  }
  else if(options.syntaxMode == "ms"){
    return msTokenColors(context);
  }
  else {
    return defaultTokenColors(context);
  }
};
