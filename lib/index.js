module.exports = {
  rules: {
    "no-console-log": require("./rules/no-console-log"),
    "no-duplicate-code": require("./rules/no-duplicate-code"),
    "enforce-useeffect-deps": require("./rules/enforce-useeffect-deps"),
    "no-inline-styles": require("./rules/no-inline-styles"),
    "no-dom-manipulation": require("./rules/no-dom-manipulation"),
    "a11y-no-missing-alt": require("./rules/a11y-no-missing-alt"),
    "max-lines-per-component": require("./rules/max-lines-per-component"),
    "api-route-naming-convention": require("./rules/api-route-naming-convention"),
    "no-deprecated-lifecycle-methods": require("./rules/no-deprecated-lifecycle-methods"),
    "no-expose-env-variables": require("./rules/no-expose-env-variables"),
  },
};
