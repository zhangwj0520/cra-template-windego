## cra-template-windego

## 初始化项目

1. cz-customizable

```
  yarn add cz-conventional-changelog cz-customizable -D
  // 配置package.json
  "config": {
      "commitizen": {
          "path": "./node_modules/cz-customizable"
      },
      "cz-customizable": {
          "config": ".cz-config.js"
      }
  }
```

2. husky

```

yarn add husky pre-commit --dev
// 配置package.json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged -c lint-staged.config.js",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
yarn add lint-staged --dev
//配置lint-staged.config
const baseRules = ['prettier --write','git add .'];

module.exports = {
  '*.{js,jsx,json}': baseRules,
  '*.{ts,tsx}': ['eslint --fix', ...baseRules],
  '*.css': ['stylelint --fix', ...baseRules],
  '*.scss': ['stylelint --syntax scss --fix', ...baseRules],
};
```

3. commitlint

```
yarn add @commitlint/cli  @commitlint/config-conventional --D
//配置.commitlintrc.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 50],
    'body-max-length': [2, 'always', 72],
    'footer-max-length': [2, 'always', 72],
  },
};
```

4. stylelint

```
yarn add --dev stylelint stylelint-order stylelint-config-standard stylelint-config-recess-order
```
