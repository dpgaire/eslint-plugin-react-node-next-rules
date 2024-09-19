module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Ensure images have `alt` attributes for accessibility",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      missingAlt: "Image elements must have an `alt` attribute.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === "img") {
          const hasAlt = node.attributes.some(
            (attr) => attr.name && attr.name.name === "alt"
          );
          if (!hasAlt) {
            context.report({
              node,
              messageId: "missingAlt",
            });
          }
        }
      },
    };
  },
};
