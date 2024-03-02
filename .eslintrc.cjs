/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
   //让eslint不再强制要求组件命名
  rules: {
    'vue/multi-word-component-names': 0,
  }
}
