module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: false }],
        'no-console': 'warn',
        'no-debugger': 'error',
        'vue/no-unused-components': 'warn',
        'vue/no-unused-vars': 'warn',
        'vue/attribute-hyphenation': 'error',
        'vue/singleline-html-element-content-newline': ['error', {
            'ignoreWhenNoAttributes': false,
        }],
        'vue/order-in-components': 'error',
        'vue/attributes-order': 'error',
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
    }
};
