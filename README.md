# Better react exhaustive-deps eslint plugin with static variable check

## Installation


```bash
npm i eslint-plugin-ignore-use-effect
```

## Usage

To use this plugin, you must disable original `react-hooks/exhaustive-deps` rule

```javascript
module.exports = {
  // ...
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
  }
  // ...
}
```
