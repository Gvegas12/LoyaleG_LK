module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jest",
    "import",
    "i18next",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    /* other */
    "no-void": "off",
    camelcase: "off",
    "no-shadow": "off",
    "no-console": "warn",
    "comma-dangle": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "operator-linebreak": "off",
    "consistent-return": ["off"],
    "react/display-name": "off",
    "array-callback-return": ["off"],
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": "off",
    "linebreak-style": ["off", "windows"],
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 110,
      },
    ],
    /* a11y */
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    /* i18next */
    "i18next/no-literal-string": [
      "error",
      {
        ignoreAttribute: ["data-testid", "to", "placeholder"],
        // Реагировать только на jsx-файлы
        markupOnly: true,
      },
    ],
    /* react */
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "react/jsx-curly-newline": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-wrap-multilines": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": "off",
    "react/void-dom-elements-no-children": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"],
      },
    ],
    /* typescript */
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    /* import */
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["off"],
  },
  overrides: [
    {
      files: [
        "**/src/**/*.{test,stories}.{ts,tsx}",
        "./templates/**/*.{ts,tsx}",
      ],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
