import { ThemeContext } from "../types";
import { getSemanticColors as defaultSemanticColors } from "./default/semanticColors";
import { getSemanticColors as monokaiSemanticColors } from "./monokai/semanticColors";
import { getSemanticColors as darkOneSemanticColors } from "./dark-one/semanticColors";
import { getSemanticColors as msSemanticColors } from "./ms/semanticColors";

export const getSemanticColors = (context: ThemeContext) => {
  const { palette, options } = context;

  if (options.syntaxMode == "monokai") {
    return monokaiSemanticColors(context);
  }
  else if(options.syntaxMode == "dark-one"){
    return darkOneSemanticColors(context);
  }
  else if(options.syntaxMode == "ms"){
    return msSemanticColors(context);
  }
  else {
    return defaultSemanticColors(context);
  }
};
