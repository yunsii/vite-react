module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    // https://github.com/import-js/eslint-plugin-import#typescript
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        project: __dirname,
      },
    },
  },
  rules: {
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
      },
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md#importno-unresolved
    'import/no-unresolved': [2, { ignore: ['.css$'] }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      1,
      {
        disallowTypeAnnotations: false,
      },
    ],
  },
};
