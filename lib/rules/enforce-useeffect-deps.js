module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Ensure `useEffect` has correct dependencies",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      missingDeps: "`useEffect` is missing dependencies.",
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.name === "useEffect" &&
          (node.arguments.length === 1 ||
            node.arguments[1].type !== "ArrayExpression")
        ) {
          context.report({
            node,
            messageId: "missingDeps",
          });
        }
      },
    };
  },
};
