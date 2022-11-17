# Linky Soluções ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Vuejs plugin
- Prettier;

## Setup

1. Install the dependencies

```
npm i -D eslint @linkysolucoes/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

For React:

```
{
  "extends": "@linkysolucoes/eslint-config/react"
}
```

For Vue:

```
{
  "extends": "@linkysolucoes/eslint-config/vue"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
