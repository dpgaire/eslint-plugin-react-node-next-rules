const hash = require("object-hash");
let codeBlocks = new Set();

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow duplicate code blocks",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      duplicateCode: "Duplicate code detected.",
    },
    schema: [],
  },
  create(context) {
    return {
      BlockStatement(node) {
        const blockHash = hash(node.body);
        if (codeBlocks.has(blockHash)) {
          context.report({
            node,
            messageId: "duplicateCode",
          });
        } else {
          codeBlocks.add(blockHash);
        }
      },
    };
  },
};
