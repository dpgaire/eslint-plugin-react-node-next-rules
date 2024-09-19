module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow inline styles in JSX",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      noInlineStyles:
        "Avoid using inline styles. Consider using CSS classes or styled-components.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === "style") {
          context.report({
            node,
            messageId: "noInlineStyles",
          });
        }
      },
    };
  },
};
