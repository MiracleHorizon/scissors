import js from '@eslint/js'
import globals from 'globals'
import tsEslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tsEslint.config(
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: ['**/dist', '**/node_modules', '**/coverage', '*.config.*', '*.json']
  },
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      prettier: prettierPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024
      },
      ecmaVersion: 2024,
      parserOptions: {
        project: ['**/tsconfig.json']
      }
    },
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          offsetTernaryExpressions: true
        }
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'for-direction': 'warn',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-expressions': 'error',
      'constructor-super': 'error',
      'getter-return': 'error',
      'no-setter-return': 'error',
      'no-class-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-constructor-return': 'error',
      'no-this-before-super': 'error',
      'no-unused-private-class-members': 'error',
      'grouped-accessor-pairs': ['error', 'setBeforeGet'],
      'accessor-pairs': [
        'error',
        {
          getWithoutSet: true,
          enforceForClassMembers: false
        }
      ],
      'no-irregular-whitespace': [
        'error',
        {
          skipComments: true,
          skipRegExps: true
        }
      ],
      'no-template-curly-in-string': 'error',
      'no-unexpected-multiline': 'error',
      'no-async-promise-executor': 'off',
      'no-await-in-loop': 'error',
      'no-promise-executor-return': 'error',
      'vars-on-top': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'warn',
      'no-self-assign': 'error',
      'no-undef': 'off',
      'block-scoped-var': 'error',
      'no-dupe-args': 'error',
      'no-func-assign': 'error',
      'arrow-body-style': 'warn',
      'default-param-last': 'error',
      'func-name-matching': 'warn',
      'func-names': ['warn', 'as-needed'],
      'no-dupe-keys': 'error',
      'no-empty-pattern': 'error',
      'no-obj-calls': 'error',
      'no-new-symbol': 'error',
      'no-new-object': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-prototype-builtins': 'error',
      'dot-notation': 'off',
      'no-sparse-arrays': 'warn',
      'array-callback-return': 'error',
      'no-cond-assign': ['error', 'always'],
      'func-style': ['error', 'expression'],
      'no-constant-condition': 'error',
      'no-compare-neg-zero': 'error',
      'no-dupe-else-if': 'error',
      'no-inner-declarations': 'warn',
      'no-self-compare': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'valid-typeof': 'error',
      'no-duplicate-imports': 'error',
      'no-import-assign': 'error',
      'no-ex-assign': 'error',
      'no-duplicate-case': 'error',
      'no-fallthrough': 'error',
      'default-case': 'off',
      'default-case-last': 'error',
      'capitalized-comments': 'off',
      'no-loss-of-precision': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      camelcase: [
        'error',
        {
          properties: 'always'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
)
