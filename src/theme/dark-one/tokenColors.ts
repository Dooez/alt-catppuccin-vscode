import { ThemeContext } from "../../types";
export const getTokenColors = (context: ThemeContext) => {
    const { palette, options } = context;
    return  [
      {
        "scope": "meta.embedded",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "unison punctuation",
        "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "haskell variable generic-type",
        "scope": "variable.other.generic-type.haskell",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "haskell storage type",
        "scope": "storage.type.haskell",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "support.variable.magic.python",
        "scope": "support.variable.magic.python",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "punctuation.separator.parameters.python",
        "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "variable.parameter.function.language.special.self.python",
        "scope": "variable.parameter.function.language.special.self.python",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "variable.parameter.function.language.special.cls.python",
        "scope": "variable.parameter.function.language.special.cls.python",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "storage.modifier.lifetime.rust",
        "scope": "storage.modifier.lifetime.rust",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "support.function.std.rust",
        "scope": "support.function.std.rust",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "entity.name.lifetime.rust",
        "scope": "entity.name.lifetime.rust",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "variable.language.rust",
        "scope": "variable.language.rust",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "support.constant.edge",
        "scope": "support.constant.edge",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "regexp constant character-class",
        "scope": "constant.other.character-class.regexp",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "keyword.operator",
        "scope": [
          "keyword.operator.word"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "regexp operator.quantifier",
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Text",
        "scope": "variable.parameter.function",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Comment Markup Link",
        "scope": "comment markup.link",
        "settings": {
          fontStyle: options.italicComments ? "italic" : "",
          "foreground": palette.subtext0
        }
      },
      {
        "name": "markup diff",
        "scope": "markup.changed.diff",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "diff",
        "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "inserted.diff",
        "scope": "markup.inserted.diff",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "deleted.diff",
        "scope": "markup.deleted.diff",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "c++ function",
        "scope": "meta.function.c,meta.function.cpp",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "c++ block",
        "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "js/ts punctuation separator key-value",
        "scope": "punctuation.separator.key-value",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "js/ts import keyword",
        "scope": "keyword.operator.expression.import",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "math js/ts",
        "scope": "support.constant.math",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "math property js/ts",
        "scope": "support.constant.property.math",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "js/ts variable.other.constant",
        "scope": "variable.other.constant",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "java type",
        "scope": [
          "storage.type.annotation.java",
          "storage.type.object.array.java"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "java source",
        "scope": "source.java",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "java modifier.import",
        "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "java modifier.import",
        "scope": "meta.method.java",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "java modifier.import",
        "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "java instanceof",
        "scope": "keyword.operator.instanceof.java",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "java variable.name",
        "scope": "meta.definition.variable.name.java",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "operator logical",
        "scope": "keyword.operator.logical",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "operator bitwise",
        "scope": "keyword.operator.bitwise",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "operator channel",
        "scope": "keyword.operator.channel",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "support.constant.property-value.scss",
        "scope": "support.constant.property-value.scss,support.constant.property-value.css",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "CSS/SCSS/LESS Operators",
        "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "css color standard name",
        "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "css comma",
        "scope": "punctuation.separator.list.comma.css",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "css attribute-name.id",
        "scope": "support.constant.color.w3c-standard-color-name.css",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "css property-name",
        "scope": "support.type.vendored.property-name.css",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "js/ts module",
        "scope": "support.module.node,support.type.object.module,support.module.node",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "entity.name.type.module",
        "scope": "entity.name.type.module",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "js variable readwrite",
        "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "js/ts json",
        "scope": "support.constant.json",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "js/ts Keyword",
        "scope": [
          "keyword.operator.expression.instanceof",
          "keyword.operator.new",
          "keyword.operator.ternary",
          "keyword.operator.optional",
          "keyword.operator.expression.keyof"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "js/ts console",
        "scope": "support.type.object.console",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "js/ts support.variable.property.process",
        "scope": "support.variable.property.process",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "js console function",
        "scope": "entity.name.function,support.function.console",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "keyword.operator.misc.rust",
        "scope": "keyword.operator.misc.rust",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "keyword.operator.sigil.rust",
        "scope": "keyword.operator.sigil.rust",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "operator",
        "scope": "keyword.operator.delete",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "js dom",
        "scope": "support.type.object.dom",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "js dom variable",
        "scope": "support.variable.dom,support.variable.property.dom",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "keyword.operator",
        "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "C operator assignment",
        "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation.separator.delimiter",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Other punctuation .c",
        "scope": "punctuation.separator.c,punctuation.separator.cpp",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "C type posix-reserved",
        "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "keyword.operator.sizeof.c",
        "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "python parameter",
        "scope": "variable.parameter.function.language.python",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "python type",
        "scope": "support.type.python",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "python logical",
        "scope": "keyword.operator.logical.python",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "pyCs",
        "scope": "variable.parameter.function.python",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "python block",
        "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "python function-call.generic",
        "scope": "meta.function-call.generic.python",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "python placeholder reset to normal string",
        "scope": "constant.character.format.placeholder.other.python",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Operators",
        "scope": "keyword.operator",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Compound Assignment Operators",
        "scope": "keyword.operator.assignment.compound",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Compound Assignment Operators js/ts",
        "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "Keywords",
        "scope": "keyword",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Namespaces",
        "scope": "entity.name.namespace",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Variables",
        "scope": "variable",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Variables",
        "scope": "variable.c",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Language variables",
        "scope": "variable.language",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Java Variables",
        "scope": "token.variable.parameter.java",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Java Imports",
        "scope": "import.storage.java",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Packages",
        "scope": "token.package.keyword",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Packages",
        "scope": "token.package",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Functions",
        "scope": [
          "entity.name.function",
          "meta.require",
          "support.function.any-method",
          "variable.function"
        ],
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Classes",
        "scope": "entity.name.type.namespace",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Classes",
        "scope": "support.class, entity.name.type.class",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Class name",
        "scope": "entity.name.class.identifier.namespace.type",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Class name",
        "scope": [
          "entity.name.class",
          "variable.other.class.js",
          "variable.other.class.ts"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Class name php",
        "scope": "variable.other.class.php",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Type Name",
        "scope": "entity.name.type",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Keyword Control",
        "scope": "keyword.control",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Control Elements",
        "scope": "control.elements, keyword.operator.less",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Methods",
        "scope": "keyword.other.special-method",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Storage JS TS",
        "scope": "token.storage",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
        "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Java Storage",
        "scope": "token.storage.type.java",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Support",
        "scope": "support.function",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "Support type",
        "scope": "support.type.property-name",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "[VSCODE-CUSTOM] toml support",
        "scope": "support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Support type",
        "scope": "support.constant.property-value",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Support type",
        "scope": "support.constant.font-name",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Meta tag",
        "scope": "meta.tag",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Strings",
        "scope": "string",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "Constant other symbol",
        "scope": "constant.other.symbol",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "Integers",
        "scope": "constant.numeric",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Constants",
        "scope": "constant",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Constants",
        "scope": "punctuation.definition.constant",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Tags",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Attributes",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Attribute IDs",
        "scope": "entity.other.attribute-name.id",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Attribute class",
        "scope": "entity.other.attribute-name.class.css",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Selector",
        "scope": "meta.selector",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Headings",
        "scope": "markup.heading",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Headings",
        "scope": "markup.heading punctuation.definition.heading, entity.name.section",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Units",
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Bold",
        "scope": "markup.bold,todo.bold",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Bold",
        "scope": "punctuation.definition.bold",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "markup Italic",
        "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "emphasis md",
        "scope": "emphasis md",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown headings",
        "scope": "entity.name.section.markdown",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
        "scope": "punctuation.definition.heading.markdown",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "punctuation.definition.list.begin.markdown",
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown heading setext",
        "scope": "markup.heading.setext",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
        "scope": "punctuation.definition.bold.markdown",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
        "scope": "markup.inline.raw.markdown",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
        "scope": "markup.inline.raw.string.markdown",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
        "scope": "punctuation.definition.raw.markdown",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
        "scope": "punctuation.definition.list.markdown",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
        "scope": [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "punctuation.definition.metadata.markdown"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "beginning.punctuation.definition.list.markdown",
        "scope": [
          "beginning.punctuation.definition.list.markdown"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
        "scope": "punctuation.definition.metadata.markdown",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
        "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
        "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Asciidoc Inline Raw",
        "scope": "markup.raw.monospace.asciidoc",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
        "scope": "punctuation.definition.asciidoc",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
        "scope": "markup.list.asciidoc",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Asciidoc underline link",
        "scope": "markup.link.asciidoc,markup.other.url.asciidoc",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Asciidoc link name",
        "scope": "string.unquoted.asciidoc,markup.other.url.asciidoc",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Regular Expressions",
        "scope": "string.regexp",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "Embedded",
        "scope": "punctuation.section.embedded, variable.interpolation",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Embedded",
        "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "illegal",
        "scope": "invalid.illegal",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "illegal",
        "scope": "invalid.illegal.bad-ampersand.html",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "scope": "invalid.illegal.unrecognized-tag.html",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Broken",
        "scope": "invalid.broken",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "Deprecated",
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "html Deprecated",
        "scope": "invalid.deprecated.entity.other.attribute-name.html",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "Unimplemented",
        "scope": "invalid.unimplemented",
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
        "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
        "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
        "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
        "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "[VSCODE-CUSTOM] JSON Property Name",
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
        "scope": "support.type.property-name.json punctuation",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "laravel blade tag",
        "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "laravel blade @",
        "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "use statement for other classes",
        "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "error suppression",
        "scope": "keyword.operator.error-control.php",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "php instanceof",
        "scope": "keyword.operator.type.php",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "style double quoted array index normal begin",
        "scope": "punctuation.section.array.begin.php",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "style double quoted array index normal end",
        "scope": "punctuation.section.array.end.php",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "php illegal.non-null-typehinted",
        "scope": "invalid.illegal.non-null-typehinted.php",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "name": "php types",
        "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "php call-function",
        "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "php function-resets",
        "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "support php constants",
        "scope": "support.constant.core.rust",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "support php constants",
        "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "php goto",
        "scope": "entity.name.goto-label.php,support.other.php",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "php logical/bitwise operator",
        "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "php regexp operator",
        "scope": "keyword.operator.regexp.php",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "php comparison",
        "scope": "keyword.operator.comparison.php",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "php heredoc/nowdoc",
        "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "python function decorator @",
        "scope": "meta.function.decorator.python",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "python function support",
        "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "parameter function js/ts",
        "scope": "function.parameter",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "brace function",
        "scope": "function.brace",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "parameter function ruby cs",
        "scope": "function.parameter.ruby, function.parameter.cs",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "constant.language.symbol.ruby",
        "scope": "constant.language.symbol.ruby",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "constant.language.symbol.hashkey.ruby",
        "scope": "constant.language.symbol.hashkey.ruby",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "rgb-value",
        "scope": "rgb-value",
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "rgb value",
        "scope": "inline-color-decoration rgb-value",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "rgb value less",
        "scope": "less rgb-value",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "sass selector",
        "scope": "selector.sass",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "ts primitive/builtin types",
        "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "block scope",
        "scope": "block.scope.end,block.scope.begin",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "cs storage type",
        "scope": "storage.type.cs",
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "cs local variable",
        "scope": "entity.name.variable.local.cs",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Import module JS",
        "scope": [
          "keyword.operator.module"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "js Flowtype",
        "scope": [
          "support.type.type.flowtype"
        ],
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "js Flow",
        "scope": [
          "support.type.primitive"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "js class prop",
        "scope": [
          "meta.property.object"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "js func parameter",
        "scope": [
          "variable.parameter.function.js"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "js template literals begin",
        "scope": [
          "keyword.other.template.begin"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "js template literals end",
        "scope": [
          "keyword.other.template.end"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "js template literals variable braces begin",
        "scope": [
          "keyword.other.substitution.begin"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "js template literals variable braces end",
        "scope": [
          "keyword.other.substitution.end"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "js operator.assignment",
        "scope": [
          "keyword.operator.assignment"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "go operator",
        "scope": [
          "keyword.operator.assignment.go"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "go operator",
        "scope": [
          "keyword.operator.arithmetic.go",
          "keyword.operator.address.go"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "Go package name",
        "scope": [
          "entity.name.package.go"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "elm prelude",
        "scope": [
          "support.type.prelude.elm"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "elm constant",
        "scope": [
          "support.constant.elm"
        ],
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "template literal",
        "scope": [
          "punctuation.quasi.element"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "html/pug (jade) escaped characters and entities",
        "scope": [
          "constant.character.entity"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
        "scope": [
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "Clojure globals",
        "scope": [
          "entity.global.clojure"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Clojure symbols",
        "scope": [
          "meta.symbol.clojure"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Clojure constants",
        "scope": [
          "constant.keyword.clojure"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "CoffeeScript Function Argument",
        "scope": [
          "meta.arguments.coffee",
          "variable.parameter.function.coffee"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Ini Default Text",
        "scope": [
          "source.ini"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "Makefile prerequisities",
        "scope": [
          "meta.scope.prerequisites.makefile"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Makefile text colour",
        "scope": [
          "source.makefile"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Groovy import names",
        "scope": [
          "storage.modifier.import.groovy"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Groovy Methods",
        "scope": [
          "meta.method.groovy"
        ],
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "Groovy Variables",
        "scope": [
          "meta.definition.variable.name.groovy"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Groovy Inheritance",
        "scope": [
          "meta.definition.class.inherited.classes.groovy"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "HLSL Semantic",
        "scope": [
          "support.variable.semantic.hlsl"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "HLSL Types",
        "scope": [
          "support.type.texture.hlsl",
          "support.type.sampler.hlsl",
          "support.type.object.hlsl",
          "support.type.object.rw.hlsl",
          "support.type.fx.hlsl",
          "support.type.object.hlsl"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "SQL Variables",
        "scope": [
          "text.variable",
          "text.bracketed"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "types",
        "scope": [
          "support.type.swift",
          "support.type.vb.asp"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "heading 1, keyword",
        "scope": [
          "entity.name.function.xi"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "heading 2, callable",
        "scope": [
          "entity.name.class.xi"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "heading 3, property",
        "scope": [
          "constant.character.character-class.regexp.xi"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "heading 4, type, class, interface",
        "scope": [
          "constant.regexp.xi"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "name": "heading 5, enums, preprocessor, constant, decorator",
        "scope": [
          "keyword.control.xi"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "name": "heading 6, number",
        "scope": [
          "invalid.xi"
        ],
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "string",
        "scope": [
          "beginning.punctuation.definition.quote.markdown.xi"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "comments",
        "scope": [
          "beginning.punctuation.definition.list.markdown.xi"
        ],
        "settings": {
          fontStyle: options.italicComments ? "italic" : "",
          "foreground": palette.subtext1
        }
      },
      {
        "name": "link",
        "scope": [
          "constant.character.xi"
        ],
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "accent",
        "scope": [
          "accent.xi"
        ],
        "settings": {
          "foreground": palette.sapphire
        }
      },
      {
        "name": "wikiword",
        "scope": [
          "wikiword.xi"
        ],
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "name": "language operators like '+', '-' etc",
        "scope": [
          "constant.other.color.rgb-value.xi"
        ],
        "settings": {
          "foreground": "#ffffff"
        }
      },
      {
        "name": "elements to dim",
        "scope": [
          "punctuation.definition.tag.xi"
        ],
        "settings": {
          "foreground": palette.subtext0
        }
      },
      {
        "name": "C++/C#",
        "scope": [
          "entity.name.label.cs",
          "entity.name.scope-resolution.function.call",
          "entity.name.scope-resolution.function.definition"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "Markdown underscore-style headers",
        "scope": [
          "entity.name.label.cs",
          "markup.heading.setext.1.markdown",
          "markup.heading.setext.2.markdown"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "meta.brace.square",
        "scope": [
          " meta.brace.square"
        ],
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Comments",
        "scope": "comment, punctuation.definition.comment",
        "settings": {
          fontStyle: options.italicComments ? "italic" : "",
          "foreground": palette.subtext1
        }
      },
      {
        "name": "[VSCODE-CUSTOM] Markdown Quote",
        "scope": "markup.quote.markdown",
        "settings": {
          "foreground": palette.subtext0
        }
      },
      {
        "name": "punctuation.definition.block.sequence.item.yaml",
        "scope": "punctuation.definition.block.sequence.item.yaml",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "scope": [
          "constant.language.symbol.elixir",
          "constant.language.symbol.double-quoted.elixir"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "scope": [
          "entity.name.variable.parameter.cs"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "scope": [
          "entity.name.variable.field.cs"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Deleted",
        "scope": "markup.deleted",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "Inserted",
        "scope": "markup.inserted",
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "name": "Underline",
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "punctuation.section.embedded.begin.php",
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "support.other.namespace.php",
        "scope": [
          "support.other.namespace.php"
        ],
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "variable.other.object",
        "scope": [
          "variable.other.object"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "variable.other.constant.property",
        "scope": [
          "variable.other.constant.property"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "entity.other.inherited-class",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "name": "c variable readwrite",
        "scope": "variable.other.readwrite.c",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "php scope",
        "scope": "entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",
        "settings": {
          "foreground": palette.subtext1
        }
      },
      {
        "name": "Assembly",
        "scope": [
          "constant.numeric.decimal.asm.x86_64"
        ],
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "scope": [
          "support.other.parenthesis.regexp"
        ],
        "settings": {
          "foreground": palette.peach
        }
      },
      {
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": palette.teal
        }
      },
      {
        "scope": [
          "string.regexp"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "scope": [
          "log.info"
        ],
        "settings": {
          "foreground": palette.green
        }
      },
      {
        "scope": [
          "log.warning"
        ],
        "settings": {
          "foreground": palette.yellow
        }
      },
      {
        "scope": [
          "log.error"
        ],
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "scope": "keyword.operator.expression.is",
        "settings": {
          "foreground": palette.mauve
        }
      },
      {
        "scope": "entity.name.label",
        "settings": {
          "foreground": palette.red
        }
      },
      {
        "name": "js/ts italic",
        "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "comment",
        "scope": "comment.line.double-slash,comment.block.documentation",
        "settings": {
          fontStyle: options.italicComments ? "italic" : "",
        }
      },
      {
        "name": "Python Keyword Control",
        "scope": "keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "markup.italic.markdown",
        "scope": "markup.italic.markdown",
        "settings": {
          "fontStyle": "italic"
        }
      }
    ];
};