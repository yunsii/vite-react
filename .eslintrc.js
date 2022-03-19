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
    'import/no-unresolved': [2, { ignore: ['^virtual:windi.css$'] }],
    // https://github.com/import-js/eslint-plugin-import/issues/1639
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '*.svg?component',
            patternOptions: {
              dot: true,
              nocomment: true,
              matchBase: true,
            },
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '*.svg',
            patternOptions: {
              dot: true,
              nocomment: true,
              matchBase: true,
            },
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**/*.@(less|scss)',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**/*.@(less|scss)',
            group: 'index',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: false /* ignore case. Options: [true, false] */,
        },
      },
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
    '@typescript-eslint/no-empty-interface': 0,
    'import/no-named-as-default-member': 0,
    '@typescript-eslint/consistent-type-imports': [
      1,
      {
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/triple-slash-reference': 0,
    'no-unused-expressions': 'off',
  },
};
