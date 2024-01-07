module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 90,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: 'lf',
        arrowParens: 'always'
      }
    ],

    // В компоненте Sheet подчеркивался className, мол, он неопределен в пропсах
    // Нашел такое решение в обсуждениях этой проблемы
    'react/prop-types': [2, { ignore: ['className'] }]
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js'
  ]
}
