module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@store', './src/store'],
          ['@common', './src/common'],
          ['@components', './src/components'],
          ['@views', './src/views'],
          ['@routes', './src/routes'],
          ['@layouts', './src/layouts'],
          ['@styles', './src/styles'],
        ],
        extensions: ['.js', '.jsx', '.json', 'scss'],
      },
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-restricted-globals': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'comma-dangle': [
      'off',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'valid-jsdoc': 'warn',
    'no-console': 'warn',
    'no-inner-declarations': 'off',
    'no-class-assign': 'off',
    'no-unused-vars': 'warn',
    'no-case-declarations': 'warn',

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/button-has-type': 'off',
    // //JSX的文件扩展名
    // "react/jsx-filename-extension": [1, { "extensions": [".js",".jsx"] }]

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/no-webpack-loader-syntax': 'off',
  },
};
