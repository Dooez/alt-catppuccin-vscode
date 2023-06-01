import { workspace, ConfigurationChangeEvent, extensions } from "vscode";
import { getThemePaths } from "./helpers";
import utils, { UpdateTrigger } from "./utils";

export const activate = () => {
  const paths = getThemePaths();

  // regenerate on a fresh install if non-default config is set
  if (utils.isFreshInstall() && !utils.isDefaultConfig()) {
    utils.updateThemes(
      utils.getConfiguration(),
      paths,
      UpdateTrigger.FRESH_INSTALL
    );
  }

  // regenerate the theme files when the config changes
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (
      event.affectsConfiguration("workbench.colorTheme") &&
      extensions.getExtension("catppuccin.catppuccin-vsc-icons")
    ) {
      const theme = workspace
        .getConfiguration("workbench")
        .get<string>("colorTheme");
      const ctp_themes = {
        "Catppuccin Monokai Latte": "catppuccin-monokai-latte",
        "Catppuccin Monokai Frappé": "catppuccin-monokai-frappe",
        "Catppuccin Monokai Macchiato": "catppuccin-monokai-macchiato",
        "Catppuccin Monokai Mocha": "catppuccin-monokai-mocha",
      };
      if (Object.keys(ctp_themes).includes(theme)) {
        workspace
          .getConfiguration("workbench")
          .update("iconTheme", ctp_themes[theme], true);
      }
    }
    if (event.affectsConfiguration("catppuccin-monokai")) {
      utils.updateThemes(
        utils.getConfiguration(),
        paths,
        UpdateTrigger.CONFIG_CHANGE
      );
    }
  });
};

export const deactivate = () => {};
