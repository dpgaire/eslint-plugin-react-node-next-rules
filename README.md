````markdown
# eslint-plugin-codeguard

`eslint-plugin-codeguard` is an ESLint plugin designed to enforce best practices and coding standards in your JavaScript and TypeScript codebases. This plugin provides several rules to help maintain code quality and consistency.

## Installation

To install the plugin, you need to add it as a development dependency in your project:

```bash
npm install eslint-plugin-codeguard --save-dev
```
````

or with Yarn:

```bash
yarn add eslint-plugin-codeguard --dev
```

## Configuration

To use this plugin in your project, you need to configure ESLint. Follow these steps:

1. **Create or update your ESLint configuration file** (`.eslintrc.js`, `.eslintrc.json`, or `.eslintrc.yaml`). Here is an example configuration using `.eslintrc.js`:

   ```js
   module.exports = {
     extends: [
       "eslint:recommended",
       "plugin:react/recommended",
       "plugin:jsx-a11y/recommended",
       "plugin:node/recommended",
     ],
     plugins: ["codeguard"],
     rules: {
       "codeguard/no-console-log": "warn",
       "codeguard/no-duplicate-code": "warn",
       "codeguard/enforce-useeffect-deps": "warn",
       "codeguard/no-inline-styles": "warn",
       "codeguard/no-dom-manipulation": "warn",
       "codeguard/a11y-no-missing-alt": "warn",
       "codeguard/max-lines-per-component": ["warn", 200],
       "codeguard/api-route-naming-convention": "warn",
       "codeguard/no-deprecated-lifecycle-methods": "warn",
       "codeguard/no-expose-env-variables": "error",
     },
     settings: {
       react: {
         version: "detect",
       },
     },
     env: {
       browser: true,
       node: true,
       es6: true,
     },
   };
   ```

2. **Add the plugin to your ESLint configuration**. You need to specify `codeguard` as a plugin and set the rules you want to enforce. The example above demonstrates how to do this.

## Rules

This plugin includes the following rules:

- **`no-console-log`**: Disallow the use of `console.log` statements.
- **`no-duplicate-code`**: Disallow code duplication.
- **`enforce-useeffect-deps`**: Enforce the inclusion of dependencies in `useEffect`.
- **`no-inline-styles`**: Disallow inline styles.
- **`no-dom-manipulation`**: Disallow direct DOM manipulation.
- **`a11y-no-missing-alt`**: Enforce the presence of `alt` attributes on `<img>` tags.
- **`max-lines-per-component`**: Limit the number of lines per React component.
- **`api-route-naming-convention`**: Enforce a naming convention for API routes.
- **`no-deprecated-lifecycle-methods`**: Disallow the use of deprecated React lifecycle methods.
- **`no-expose-env-variables`**: Disallow exposing environment variables in the client-side code.

## Testing the Plugin

To test the plugin locally, you can create a test project and install the plugin from your local directory:

```bash
npm install /path/to/your/local/eslint-plugin-codeguard
```

Then, run ESLint on your test files:

```bash
npx eslint your-test-file.js
```

## Contributing

If you want to contribute to the development of this plugin, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to reach out to [Durga Gairhe](mailto:gairhedurga13@gmail.com).

```

### Explanation:

- **Installation**: Shows how to install the plugin using npm or Yarn.
- **Configuration**: Provides an example of how to configure ESLint to use the plugin and its rules.
- **Rules**: Lists and briefly describes the rules included in the plugin.
- **Testing**: Instructions for testing the plugin locally before publishing.
- **Contributing**: Guidelines for contributing to the development of the plugin.
- **License**: Information about the license under which the plugin is distributed.
- **Contact**: Contact information for questions or further assistance.

Replace placeholders such as `[Durga Gairhe]` and `gairhedurga13@gmail.com` with your actual details.
```
