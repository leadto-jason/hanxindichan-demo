## 这是国际化的目录

### 目录解析

```bash
// 国际化目录
-> src/i18n

  // 文字
  -> languages
  
  // 特殊需要执行的 js
  -> scripts
  
  // 特殊的样式指定
  -> styles
```

### 使用流程：
> index.js 不要删除，index.js 会根据当前环境变量 LANG 导入不同语言

1. 在 package.json scripts 中指定 LANG 变量

```json
{
  "scripts": {
    "dev:cn": "cross-env NODE_ENV=development LANG=cn node_modules/.bin/webpack-dev-server --config ./build/webpack.dev.config.js --mode=development",
    "build:cn": "cross-env NODE_ENV=production LANG=cn node_modules/.bin/webpack --config ./build/webpack.pro.config.js --mode=production",
    
    "dev:en": "cross-env NODE_ENV=development LANG=en node_modules/.bin/webpack-dev-server --config ./build/webpack.dev.config.js --mode=development",
    "build:en": "cross-env NODE_ENV=production LANG=en node_modules/.bin/webpack --config ./build/webpack.pro.config.js --mode=production"
  }
}
```

2. 在 src/i18n/xxx 目录下，新增相应版本文件（文件名，需要与上面指定的 LANG 相同）
