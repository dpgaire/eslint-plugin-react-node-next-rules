module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow `console.log` statements",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noConsoleLog: "Avoid using `console.log`.",
    },
    schema: [], // No options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object &&
          node.callee.object.name === "console" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "noConsoleLog",
          });
        }
      },
    };
  },
};
