module.exports = {
  extends: ['prettier'], // eslint-config-prettier
  plugins: ['prettier'], //  eslint-plugin-prettier
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ], // eslint-plugin-prettier
    '@typescript-eslint/no-require-imports': 0,
    // 不需要强制指定方法的 访问性如：public/private等
    '@typescript-eslint/explicit-member-accessibility': 0,
    // 不需要限制this的使用
    '@typescript-eslint/no-invalid-this': 0,

    '@typescript-eslint/no-loss-of-precision': 0,

    // 不需要屏蔽react的不安全方法，暂时因为不会升级react17，然而有些业务需要用到即将废弃的方法，所暂时保留不提示错误
    'react/no-unsafe': 0,
    '@typescript-eslint/no-duplicate-imports': 0,
    '@typescript-eslint/no-unnecessary-type-constraint': 0,
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  parser: '@typescript-eslint/parser',
}
