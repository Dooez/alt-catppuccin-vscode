import { ThemeContext } from "../types";
import { getSemanticColors as defaultSemanticColors } from "./default/semanticColors";
import { getSemanticColors as monokaiSemanticColors } from "./monokai/semanticColors";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;

  if (options.syntaxMode == "monokai"){
    return monokaiSemanticColors(context);
  }
  else{
    return defaultSemanticColors(context);

  }
};
