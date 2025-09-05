module.exports = grammar({
  name: "flou",

  rules: {
    source_file: ($) => repeat(choice($.keyword, $.number, $.identifier)),

    keyword: ($) =>
      choice("proc", "if", "loop", "else", "return", "break", "continue"),
    number: ($) => /\d+/,
    identifier: ($) => /[a-zA-Z_]\w*/,
  },
});
