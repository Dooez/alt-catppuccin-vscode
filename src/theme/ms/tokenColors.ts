import { ThemeContext } from "../../types";
export const getTokenColors = (context: ThemeContext) => {
  const { palette, options } = context;
  return [
    // VISUAL STUDIO DARK
    {
      scope: [
        "meta.embedded",
        "source.groovy.embedded",
        "string meta.image.inline.markdown",
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: "emphasis",
      settings: {
        "fontStyle": "italic"
      }
    },
    {
      scope: "strong",
      settings: {
        "fontStyle": "bold"
      }
    },
    {
      scope: "header",
      settings: {
        foreground: "#000080"
      }
    },
    {
      scope: "comment",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.green
      }
    },
    {
      scope: "constant.language",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: [
        "constant.numeric",
        "variable.other.enummember",
        "keyword.operator.plus.exponent",
        "keyword.operator.minus.exponent"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: palette.mauve
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.other.attribute-name.scss"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "invalid",
      settings: {
        foreground: palette.red
      }
    },
    {
      scope: "markup.underline",
      settings: {
        "fontStyle": "underline"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        "fontStyle": "bold",
        foreground: palette.blue
      }
    },
    {
      scope: "markup.heading",
      settings: {
        "fontStyle": "bold",
        foreground: palette.blue
      }
    },
    {
      scope: "markup.italic",
      settings: {
        "fontStyle": "italic"
      }
    },
    {
      scope: "markup.strikethrough",
      settings: {
        "fontStyle": "strikethrough"
      }
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: palette.green
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: palette.peach
      }
    },
    {
      "name": "brackets of XML/HTML tags",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: palette.subtext0
      }
    },
    {
      scope: [
        "meta.preprocessor",
        "entity.name.function.preprocessor"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "storage",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "storage.type",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: [
        "storage.modifier",
        "keyword.operator.noexcept"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: [
        "string",
        "meta.embedded.assembly"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.tag",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.value",
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: palette.red
      }
    },
    {
      "name": "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      scope: [
        "meta.template.expression"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name",
        "variable.css",
        "variable.scss",
        "variable.other.less",
        "source.coffee.embedded"
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "keyword",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.control",
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.alignof",
        "keyword.operator.typeid",
        "keyword.operator.alignas",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python",
        "keyword.operator.wordlike"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php"
      ],
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "coloring of the Java import and package identifiers",
      scope: [
        "storage.modifier.import.java",
        "variable.language.wildcard.java",
        "storage.modifier.package.java"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      "name": "this.self",
      scope: "variable.language",
      settings: {
        foreground: palette.blue
      }
    },
    // DARK PLUS
    {
      "name": "Function declarations",
      scope: [
        "entity.name.function",
        "support.function",
        "support.constant.handlebars",
        "source.powershell variable.other.member",
        "entity.name.operator.custom-literal" // See https://en.cppreference.com/w/cpp/language/user_literal
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      "name": "Types declaration and references",
      scope: [
        "support.class",
        "support.type",
        "entity.name.type",
        "entity.name.namespace",
        "entity.other.attribute",
        "entity.name.scope-resolution",
        "entity.name.class",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "Types declaration and references, TS grammar specific",
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class"
      ],
      settings: {
        foreground: palette.teal
      }
    },
    {
      "name": "Control flow / Special keywords",
      scope: [
        "keyword.control",
        "source.cpp keyword.operator.new",
        "keyword.operator.delete",
        "keyword.other.using",
        "keyword.other.operator",
        "entity.name.operator"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.pink
      }
    },
    {
      "name": "Variable and parameter name",
      scope: [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable",
        "constant.other.placeholder", // placeholders in strings
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      "name": "Constants and enums",
      scope: [
        "variable.other.constant",
        "variable.other.enummember"
      ],
      settings: {
        foreground: palette.blue,
      }
    },
    {
      "name": "Object keys, TS grammar specific",
      scope: [
        "meta.object-literal.key"
      ],
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      "name": "CSS property value",
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "support.constant.color"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      "name": "Regular expression groups",
      scope: [
        "punctuation.definition.group.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "keyword.operator.negation.regexp",
        "support.other.parenthesis.regexp"
      ],
      settings: {
        foreground: palette.peach
      }
    },
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "constant.other.character-class.regexp",
        "constant.character.set.regexp"
      ],
      settings: {
        foreground: palette.red
      }
    },
    {
      scope: [
        "keyword.operator.or.regexp",
        "keyword.control.anchor.regexp"
      ],
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "constant.character",
      settings: {
        foreground: palette.blue
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.yellow
      }
    },
    {
      scope: "entity.name.label",
      settings: {
        foreground: palette.text
      }
    },
    // VISUAL STUDIO 2019 DARK
    {
      "name": "Control flow / Special keywords",
      scope: [
        "keyword.control",
        "keyword.other.using",
        "keyword.other.operator",
        "entity.name.operator"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.pink
      }
    },
    {
      scope: [
        "keyword.control.directive",
        "variable.parameter",
        "entity.other.attribute-name.pragma.preprocessor.cpp"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      scope: [
        "meta.preprocessor",
        "entity.name.namespace",
        "variable.other.global",
        "variable.other.constant",
        "entity.name.scope-resolution"
      ],
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: "variable.other.property",
      settings: {
        foreground: palette.text
      }
    },
    {
      scope: [
        "punctuation",
        "storage.modifier.pointer",
        "storage.modifier.reference",
        "keyword.operator",
        "entity.name.function.operator",
        "keyword.other.operator.overload.cpp",
        "entity.name.operator.cpp",
        "entity.name.operator.type.reference.cpp",
        "entity.name.operator.type.pointer.cpp"
      ],
      settings: {
        foreground: palette.subtext1
      }
    },
    {
      scope: [
        "comment",
        "punctuation.definition.comment"
      ],
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.green
      }
    },
    {
      scope: "punctuation.definition.string",
      settings: {
        foreground: palette.flamingo
      }
    },
    {
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: palette.lavender
      }
    },
    {
      scope: [
        "keyword.other.using",
        "keyword.operator.new",
        "keyword.operator.new.cpp",
        "keyword.operator.delete.cpp"
      ],
      settings: {
        fontStyle: options.boldKeywords ? "bold" : "",
        foreground: palette.blue
      }
    },
    {
      scope: "punctuation.support.type.property-name",
      settings: {
        foreground: palette.sapphire
      }
    },
    {
      scope: "variable.other.enummember",
      settings: {
        foreground: palette.teal
      }
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.yellow
      }
    }
  ];
};