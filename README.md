# @txpjs/translate

International(i18n) automatic translation, Support Google and Youdao

## api

### translate

调用谷歌、有道 api 进行翻译

- content: 需要翻译的内容
- options: 选项
  - translatorType: 翻译器类型，默认值有道
  - language: 语言
    - form: 需要被翻译的语言
    - to: 翻译的目标语言
  - youdao: 有道相关配置（api key 需要到[官网](https://ai.youdao.com/login.s)申请）
  - google: 谷歌相关配置（代理配置）

```js
interface Translate {
  content: string;
  options: {
    language: {
      from: string,
      to: string,
    },
    translatorType?: 'google' | 'youdao',
    google?: {
      proxy: {
        host: string,
        port: number,
      },
    },
    youdao?: {
      key: string,
      secret: string,
    },
  };
}
```

例子:

```js
import { translate } = '@txpjs/translate';
const result = translate(content, options);
```

### i18n

- outDir: locales 文件的绝对路径或者相对路径
- keep: 是否保持以前的翻译不变（可选），默认开启
- type: 类型，默认为目录（antd-pro 模式）
- hook: 钩子函数，自定义输出
- language: 语言转换，默认从中文转英文,输出的文件名和这个配置有关
- separator: 分隔符号，默认为`-`，如果你的文件名不是以-分割的话需要配置
- prettierPath: 配置你的.prettier.js 文件路径（绝对路径或者相对路径）翻译后输出文件会安装你的配置进行格式化，避免无用的变更
- translatorType: 默认 youdao
- google: 谷歌相关配置（代理配置），默认空
- youdao: 默认有值，如果翻译失败可能余额不足，请配置

```js
interface I18n {
  outDir: string;
  keep?: true;
  type?: 'dir' | 'file';
  hook?: {
    filter: () => {},
    convertContent: { input: () => {}, out: () => {} },
    handleData: () => {},
  };
  language?: {
    from: string,
    to: string[],
  };
  separator?: string;
  prettierPath?: string;
  translatorType?: 'google' | 'youdao';
  google?: {
    proxy: {
      host: string,
      port: number,
    },
  };
  youdao?: {
    key: string,
    secret: string,
  };
}
```

```js
import { i18n } = '@txpjs/translate';
i18n(options);
```
