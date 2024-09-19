module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow deprecated React lifecycle methods",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      deprecatedMethod:
        "Avoid using deprecated React lifecycle methods like `componentWillMount`.",
    },
    schema: [],
  },
  create(context) {
    const deprecatedMethods = [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ];

    return {
      MethodDefinition(node) {
        if (deprecatedMethods.includes(node.key.name)) {
          context.report({
            node,
            messageId: "deprecatedMethod",
          });
        }
      },
    };
  },
};
