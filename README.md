# CONFIG

- Prettier + Standard JS (ESLint)

```npm
pnpm install -D -E prettier prettier-plugin-tailwindcss standard
```

- .prettierrc.json

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],

  "semi": false,
  "printWidth": 100,
  "singleQuote": true,
  "jsxSingleQuote": true
}
```

- .eslintrc.json

```json
{
  "extends": ["standard", "standard-jsx"],

  "rules": {
    "comma-dangle": "off",
    "space-before-function-paren": "off"
  }
}
```

- .editorconfig

```npm
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```
