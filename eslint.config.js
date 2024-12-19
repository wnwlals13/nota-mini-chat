import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      'plugin:tailwindcss/recommended',
      'plugin:@typescript-eslint/recommended',
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      tailwindcss: tailwindPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'tailwindcss/classnames-order': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
