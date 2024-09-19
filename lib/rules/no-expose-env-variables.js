module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Prevent exposing sensitive environment variables",
      category: "Security",
      recommended: true,
    },
    messages: {
      exposeEnvVar:
        "Do not expose sensitive environment variables in the frontend.",
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "process" && node.property.name === "env") {
          context.report({
            node,
            messageId: "exposeEnvVar",
          });
        }
      },
    };
  },
};
