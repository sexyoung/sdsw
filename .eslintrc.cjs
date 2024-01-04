module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'eqeqeq': 'error', // 要求使用 === 和 !==
    'curly': 'error', // 要求遵循大括號風格約定
    'no-eval': 'error', // 禁用 eval()
    '@typescript-eslint/no-unused-vars': 'warn', // 禁止未使用的變量
    'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
    'react-hooks/exhaustive-deps': 'warn', // 檢查 effect 依賴
    'semi': ['error', 'always'], // 要求或禁止使用分號
  },
}
