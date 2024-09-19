module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Limit component size to improve maintainability",
      category: "Best Practices",
      recommended: false,
    },
    schema: [
      {
        type: "integer",
        minimum: 1,
      },
    ],
    messages: {
      componentTooLarge:
        "This component exceeds the maximum allowed size of {{ max }} lines.",
    },
  },
  create(context) {
    const maxLines = context.options[0] || 200;

    return {
      Program(node) {
        const lines = node.loc.end.line;
        if (lines > maxLines) {
          context.report({
            node,
            messageId: "componentTooLarge",
            data: { max: maxLines },
          });
        }
      },
    };
  },
};
