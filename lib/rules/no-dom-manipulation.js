module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow direct DOM manipulation",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noDOMManipulation:
        "Avoid direct DOM manipulation (e.g., `document.getElementById`); use React ref instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.object && node.callee.object.name === "document") {
          context.report({
            node,
            messageId: "noDOMManipulation",
          });
        }
      },
    };
  },
};
