# React + TypeScript + Vite

This library build with Vite and React.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to Use

🔧 Set up repository in package.json
"notfound": "git+https://github.com/[username]/notfound.git#main"

📦 Installation:
```js
npm install notfound
# or
yarn add notfound
```

🚀 Usage:
*The component accepts a message prop to display a custom message

```js
import { NotFound } from "notfound";

export default function NotFoundPage() {
  return <NotFound message="The page you're looking for doesn't exist" />;
}
```

🐛 Troubleshooting:
*Make sure your package.json includes the correct module paths

```js
{
  "main": "dist/index.cjs.js",
  "module": "dist/index.es.js",
  "types": "dist/types/index.d.ts",
  "exports": {
    "import": "./dist/index.es.js",
    "require": "./dist/index.cjs.js"
  }
}
```