import { ThemeContext } from "../types";

export const getTokenColors = (context: ThemeContext) => {
  const { palette, options } = context;

  return [
    {
      name: "Comment",
      scope: [
        "comment",
        "string.comment"
      ],
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.overlay0
      }
    },
    {
      name: "String",
      scope: [
        "string",
        "string.template"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Embedded String Begin/End",
      scope: [
        "string.embedded.begin",
        "string.embedded.end",
        "punctuation.definition.template-expression",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "Default Embedded Color",
      scope: [
        "punctuation.section.embedded.begin.js",
        "punctuation.section.embedded.end.js",
        "punctuation.section.embedded.begin.erb",
        "punctuation.section.embedded.end.erb",
        "source.elixir.embedded",
        "punctuation.separator",
        "punctuation.accessor",
        "meta.brace"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      name: "Built-in constant",
      scope: "constant.language",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "User-defined constant",
      scope: [
        "constant.character",
        "constant.other"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Keyword",
      scope: [
        "keyword",
        "keyword.operator.logical",
        "keyword.operator.constructor"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.red
      }
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Types",
      scope: "storage.type",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Class",
      scope: [
        "entity.name.class",
        "entity.name.module",
        "entity.name.type",
        "storage.identifier",
        "support.class"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Variable Object",
      scope: [
        "variable.other.object",
        "variable.other.constant",
        "variable.other.global",
        "variable.other.readwrite.class",
        "variable.other.readwrite.instance",
        "variable.other.readwrite.batchfile",
        "variable.readwrite",
        "variable.readwrite.other.block"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      name: "Other variable",
      scope: [
        "variable.other",
        "variable.other.property",
        "variable.other.block"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Package Import",
      scope: [
        "storage.modifier.import",
        "storage.modifier.package"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Function name",
      scope: [
        "entity.name.function",
        "support.function"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Function argument",
      scope: [
        "variable.parameter",
        "entity.name.variable.parameter",
        "parameter.variable"
      ],
      settings: {
        fontStyle: "italic",
        foreground: palette.peach
      }
    },
    {
      name: "Function call",
      scope: "entity.name.function-call",
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      name: "Builtin Functions",
      scope: [
        "function.support.builtin",
        "function.support.core"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Tag Name",
      scope: [
        "entity.name.tag",
        "entity.name.tag.class.js"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "Tag Class and ID",
      scope: [
        "entity.name.tag.class",
        "entity.name.tag.id"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Tag Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Library class/type",
      scope: [
        "support.type",
        "support.variable"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Json Property",
      scope: "support.dictionary.json",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Property name",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.scss",
        "support.type.property-name.less",
        "support.type.property-name.sass"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      name: "CSS: Pseudo Attribute Names",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-class.scss",
        "entity.other.attribute-name.pseudo-class.less",
        "entity.other.attribute-name.pseudo-class.sass",
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.pseudo-element.scss",
        "entity.other.attribute-name.pseudo-element.less",
        "entity.other.attribute-name.pseudo-element.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Property value",
      scope: [
        "support.constant.css",
        "support.constant.scss",
        "support.constant.less",
        "support.constant.sass"
      ],
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "StyleSheet Variable",
      scope: [
        "variable.css",
        "variable.scss",
        "variable.less",
        "variable.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "StyleSheet Variable String",
      scope: [
        "variable.css.string",
        "variable.scss.string",
        "variable.less.string",
        "variable.sass.string"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "StyleSheet Unit",
      scope: [
        "unit.css",
        "unit.scss",
        "unit.less",
        "unit.sass"
      ],
      settings: {
        foreground: palette.mauve
      }
    },
    {
      name: "StyleSheet Function",
      scope: [
        "function.css",
        "function.scss",
        "function.less",
        "function.sass"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {
        fontStyle: ""
      }
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        "background": palette.mauve,
        foreground: palette.rosewater
      }
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        "background": palette.sky,
        foreground: palette.rosewater
      }
    },
    {
      name: "JSON String",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Link",
      scope: "string.detected-link",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "diff.header",
      scope: [
        "meta.diff",
        "meta.diff.header"
      ],
      settings: {
        foreground: "#75715E"
      }
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: palette.red
      }
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "constant.numeric.line-number.find-in-files - match",
      settings: {
        foreground: "#56b6c2A0"
      }
    },
    {
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      name: "Markup: Emphasis",
      scope: "markup.italic, markup.italic.markdown",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      name: "Markup: Punctuation",
      scope: [
        "punctuation.definition.italic.markdown",
        "punctuation.definition.bold.markdown",
        "punctuation.definition.heading.markdown"
      ],
      settings: {
        foreground: palette.overlay0
      }
    },
    {
      name: "Markup: Emphasis Punctuation",
      scope: "punctuation.definition.italic.markdown",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      name: "Markdown: Link",
      scope: "markup.underline.link.markdown",
      settings: {
        foreground: palette.blue
      }
    },
    {
      name: "Markup: Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold"
      }
    },
    {
      name: "Markup: Heading",
      scope: "markup.heading.markdown",
      settings: {
        fontStyle: "bold",
        foreground: palette.red
      }
    },
    {
      name: "Markup: Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      name: "Markup: Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: palette.mauve,
        fontStyle: "bold"
      }
    },
    {
      name: "Markup: Raw",
      scope: [
        "markup.raw.inline.markdown",
        "markup.raw.block.markdown"
      ],
      settings: {
        foreground: palette.sky
      }
    },
    {
      name: "Markup: List Punctuation",
      scope: "punctuation.definition.list_item.markdown",
      settings: {
        fontStyle: "bold",
        foreground: "#ffffff"
      }
    }
  ]
};
