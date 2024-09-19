module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce consistent naming for API routes",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      invalidName: "API route should be named in snake_case.",
    },
    schema: [],
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        const isAPIRoute = node.id && node.id.name.startsWith("api_");
        if (!isAPIRoute) {
          context.report({
            node,
            messageId: "invalidName",
          });
        }
      },
    };
  },
};
